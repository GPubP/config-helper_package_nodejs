import Kafka from '@acpaas/kafka-nodejs-helper';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CronJob } from 'cron';
import { EventEmitter } from 'events';
import { NextFunction, Request, Response } from 'express';
import { Method, Options, GotReturn } from 'got';
import jwt from 'jsonwebtoken';
import { clone, pathOr, propOr } from 'ramda';

import { UnauthorizedError } from './errors';
import {
	AppContext,
	BSLRequest,
	GatewayJWTContent,
	ModuleConfig,
	ModuleContext,
	PortalConfig
} from './index.types';
import { axiosInstance } from './instances/axios';
import { WcmDigipolisModulesConsumer } from './kafka/consumers/wcm-digipolis.modules';
import { WcmDigipolisTenantsConsumer } from './kafka/consumers/wcm-digipolis.tenants';
import { createKafkaInstance } from './kafka/kafka';

export class TenantsConfig extends EventEmitter {
	public tenantsKafkaConsumer: WcmDigipolisTenantsConsumer;
	public modulesKafkaConsumer: WcmDigipolisModulesConsumer;

	private portalConfig: PortalConfig;
	private moduleContext: ModuleContext;
	private job: CronJob;
	private kafka: Kafka;

	constructor(portalConfig: PortalConfig) {
		super();

		this.portalConfig = {
			cronFrequency: '*/10 * * * * *',
			...portalConfig
		};

		if (portalConfig.kafka) {
			this.initKafka();
		}

		this.initCron();
		this.fetchConfig().then((moduleContext) =>
			this.emit('ready', moduleContext),
		);
	}

	public apiKeyGuard = (
		req: BSLRequest,
		res: Response,
		next: NextFunction,
	): void => {
		if (!req.headers.apikey) {
			return next(UnauthorizedError);
		}

		const linkedApp = (this.moduleContext?.appsAccess || []).find((app) =>
			app.allApiKeys.includes(req.headers.apikey as string),
		);

		if (!linkedApp) {
			return next(UnauthorizedError);
		}

		return next();
	};

	public verifyJwt(
		jwtPublicKey: string = this.portalConfig.jwtPublicKey,
	): (req: BSLRequest, res: Response, next: NextFunction) => void {
		if (!jwtPublicKey) {
			throw new Error(
				'verifyJwt: cannot verify incoming request when no public key is specified',
			);
		}

		return (req: BSLRequest, res: Response, next: NextFunction): void => {
			if (!/^token /i.exec(req.get('authorization'))) {
				return next();
			}

			const token = req.get('authorization').replace(/^token /i, '');

			jwt.verify(
				token,
				jwtPublicKey,
				{ algorithms: ['RS256'] },
				(err, context) => {
					if (err || !context) {
						// eslint-disable-next-line no-console
						console.error(
							'Invalid Token passed in authorization header',
							req.url,
						);
						return next();
					}

					req.locals = {
						...req.locals,
						requestContext: context as GatewayJWTContent
					};

					next();
				},
			);
		};
	}

	public getJWTContent(req: BSLRequest): GatewayJWTContent {
		return req.locals?.requestContext;
	}

	public getAppContext(apikey: string): AppContext {
		return (this.moduleContext?.appsAccess || []).find((app) =>
			app.allApiKeys.includes(apikey as string),
		);
	}

	public getAllApps(): AppContext[] {
		return this.moduleContext?.appsAccess;
	}

	public getModuleContext(): ModuleConfig {
		return clone(this.moduleContext?.moduleConfiguration);
	}

	public getAppModuleConfig(
		tenantUuid: string,
	): Record<string, string | Record<string, string>> {
		const app = (this.moduleContext?.appsAccess || []).find(
			(app) => app.uuid === tenantUuid,
		);
		const module = app?.modules.find(
			(moduleInfo) =>
				moduleInfo.module.uuid ===
				this.moduleContext.moduleConfiguration.uuid,
		);

		return (module?.config as Record<string, string>) || {};
	}

	public async requestModule<T = unknown>(
		tenantApikey: string,
		moduleRoutePrefix: string,
		method: Method,
		path: string,
		params?: Partial<Options> & { isStream?: false | null | undefined },
	): Promise<T>;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async requestModule<T = unknown>(
		tenantApikey: string,
		moduleRoutePrefix: string,
		method: Method,
		path: string,
		params: Partial<Options> & { isStream?: true },
	): Promise<GotReturn>;
	public async requestModule<T = unknown>(
		tenantApikey: string,
		moduleRoutePrefix: string,
		method: Method,
		path: string,
		params?: Partial<Options> & { isStream?: boolean },
	): Promise<T | GotReturn> {
		const appContext = this.getAppContext(tenantApikey);

		if (!appContext) {
			throw new Error('Could not find tenant based on tenant key');
		}

		const moduleContext = appContext.modules.find(
			(modu) =>
				(modu?.module?.data?.moduleType === 'business-service' ||
					modu?.module?.data?.moduleType === 'core-component') &&
				modu?.module?.data?.routePrefix === moduleRoutePrefix,
		);

		if (!moduleContext) {
			throw new Error(
				`Could not find module with endpoint ${moduleRoutePrefix} for tenant ${appContext?.name}`,
			);
		}

		const promise = axiosInstance.gotRequest(path.replace(/^\//, ''), {
			responseType: params?.isStream ? 'stream' : 'json',
			prefixUrl: moduleContext.endpoint,
			resolveBodyOnly: true,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...params || {} as any,
			method,
			headers: {
				...propOr({}, 'headers')(params),
				apikey: appContext.apikey,
				'x-module-id': this.moduleContext.moduleConfiguration.uuid
			}
		});

		if (params?.isStream) {
			return promise;
		}

		return promise.catch((e) => {
			throw {
				status: e?.response?.statusCode,
				body: e?.response?.body,
				error: e
			};
		}) as unknown as Promise<T>;
	}

	public AppContext = createParamDecorator(
		// tslint:disable-line variable-name
		(path: string[] = [], ctx: ExecutionContext): unknown => {
			const req: Request = ctx.switchToHttp().getRequest();
			const appContext: AppContext = this.getAppContext(
				req.get('apikey'),
			);

			return pathOr(null, path)(appContext);
		},
	);

	public getAppsFeaturingModule(
		routePrefix: string,
		moduleVersion: string,
	): AppContext[] {
		return (this.moduleContext?.appsAccess || []).reduce((acc, app) => {
			const hasModule = !!app.modules.find(
				(mod) =>
					mod?.module?.data?.routePrefix === routePrefix &&
					(!moduleVersion || mod.version === moduleVersion),
			);
			return acc.concat(hasModule ? [app] : []);
		}, []);
	}

	private initCron(): void {
		this.job = new CronJob(
			this.portalConfig.cronFrequency,
			this.onTick.bind(this),
		);
		this.job.start();
	}

	private initKafka(): void {
		this.kafka = createKafkaInstance(this.portalConfig.kafka);
		this.tenantsKafkaConsumer = new WcmDigipolisTenantsConsumer(
			this.kafka,
			this.portalConfig.kafka,
		);
		this.modulesKafkaConsumer = new WcmDigipolisModulesConsumer(
			this.kafka,
			this.portalConfig.kafka,
		);

		this.tenantsKafkaConsumer.on(
			['tenant-created', 'tenant-updated', 'tenant-removed'],
			(data) => this.onTick(propOr('config-updated', 'key', data)),
		);

		this.modulesKafkaConsumer.on(
			['module-updated', 'module-removed'],
			(data) =>
				this.onTick(propOr('config-updated', 'key', data), {
					moduleId: (data as { value: { uuid: string } })?.value
						?.uuid
				}),
		);
	}

	private onTick(
		key = 'config-updated',
		data?: Record<string, unknown>,
	): void {
		this.fetchConfig().then((moduleContext) =>
			this.emit(key, {
				...moduleContext,
				...data
			}),
		);
	}

	private fetchConfig(): Promise<ModuleContext> {
		return axiosInstance
			.gotGet<ModuleContext>(`${this.portalConfig.baseUrl}/modules/config`, {
				responseType: 'json',
				headers: { apikey: this.portalConfig.apikey }
			})
			.then((result) => {
				this.moduleContext = result.body;
				return result.body;
			});
	}
}

// Export types from root
export * from './index.types';
export * from './errors';
export * from './errors.types';
