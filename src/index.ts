import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CronJob } from 'cron';
import { EventEmitter } from 'events';
import { Request, Response } from 'express';
import got, { GotOptions, Method, Response as GotResponse } from 'got';
import jwt from 'jsonwebtoken';
import { clone, pathOr, propOr } from 'ramda';

import { UnauthorizedError } from './errors';
import {
	AppContext,
	BSLRequest,
	GatewayJWTContent,
	ModuleConfig,
	ModuleContext,
	PortalConfig,
} from './index.types';

export class TenantsConfig extends EventEmitter {
	private portalConfig: PortalConfig;
	private moduleContext: ModuleContext;
	private job: CronJob;

	constructor(portalConfig: PortalConfig) {
		super();

		this.portalConfig = {
			cronFrequency: '*/10 * * * * *',
			...portalConfig,
		};

		this.initCron();

		this.fetchConfig()
			.then(moduleContext => this.emit('ready', moduleContext));
	}

	public apiKeyGuard = (req: BSLRequest, res: Response, next: Function): void => {
		if (!req.headers.apikey) {
			return next(UnauthorizedError);
		}

		const linkedApp = this.moduleContext.appsAccess.find(app => app.apikey === req.headers.apikey);

		if (!linkedApp) {
			return next(UnauthorizedError);
		}

		return next();
	}

	public verifyJwt(jwtPublicKey: string = this.portalConfig.jwtPublicKey): (req: BSLRequest, res: Response, next: Function) => void {
		if (!jwtPublicKey) {
			throw new Error('verifyJwt: cannot verify incoming request when no public key is specified');
		}

		return (req: BSLRequest, res: Response, next: Function): void => {
			if (typeof req.headers.authorization !== 'string') {
				return next();
			}

			const token = req.headers.authorization.replace(/^token /i, '');

			jwt.verify(token, jwtPublicKey, { algorithms: ['RS256'] }, (err, context) => {
				if (err || !context) {
					// tslint:disable-next-line no-console
					console.error('Invalid Token passed in authorization header', req.url);
					return next();
				}

				req.locals = {
					...req.locals,
					requestContex: jwt.decode(token),
				};

				next();
			});
		};
	}

	public getJWTContent(req: BSLRequest): GatewayJWTContent {
		return req.locals?.requestContext;
	}

	public getAppContext(apikey: string): AppContext {
		return this.moduleContext.appsAccess.find(app => app.apikey === apikey);
	}

	public getAllApps(): AppContext[] {
		return this.moduleContext.appsAccess;
	}

	public getModuleContext(): ModuleConfig {
		return clone(this.moduleContext.moduleConfiguration);
	}

	public async requestModule<T = unknown>(
		tenantApikey: string,
		moduleRoutePrefix: string,
		method: Method,
		path: string,
		params?: GotOptions
	): Promise<GotResponse<T>> {
		const appContext = this.getAppContext(tenantApikey);

		if (!appContext) {
			throw new Error('Could not find tenant based on tenant key');
		}

		const moduleContext = appContext.modules.find(modu =>
			modu?.module?.data?.moduleType === 'business-service' && modu?.module?.data?.routePrefix === moduleRoutePrefix
		);

		if (!moduleContext) {
			throw new Error(`Could not find module with endpoint ${moduleRoutePrefix} for tenant ${appContext.name}`);
		}

		return await got<T>(path.replace(/^\//, ''), {
			...params || {} as unknown as any, // tslint:disable-line no-any
			method,
			prefixUrl: moduleContext.endpoint,
			responseType: 'json',
			resolveBodyOnly: true,
			headers: {
				...propOr({}, 'headers')(params),
				apikey: appContext.apikey,
			},
		}).catch((e) => {
			throw {
				status: e?.response?.statusCode,
				body: e?.response?.body,
				error: e,
			};
		});
	}

	public AppContext = createParamDecorator( // tslint:disable-line variable-name
		(path: string[] = [], ctx: ExecutionContext): unknown => {
			const req: Request = ctx.switchToHttp().getRequest();
			const appContext: AppContext = this.getAppContext(req.get('apikey'));

			return pathOr(null, path)(appContext);
		}
	);

	public getAppsFeaturingModule(routePrefix: string, moduleVersion: string): AppContext[] {
		return this.moduleContext.appsAccess.reduce((acc, app) => {
			const hasModule = !!app.modules.find(mod => mod?.module?.data?.routePrefix === routePrefix && (!moduleVersion || mod.version === moduleVersion));
			return acc.concat(hasModule ? [app] : []);
		}, []);
	}

	private initCron(): void {
		this.job = new CronJob(this.portalConfig.cronFrequency, this.onTick.bind(this));
		this.job.start();
	}

	private onTick(): void {
		this.fetchConfig()
			.then(moduleContext => this.emit('config-updated', moduleContext));
	}

	private fetchConfig(): Promise<ModuleContext> {
		return got.get<ModuleContext>(`${this.portalConfig.baseUrl}/api/1.0.0/modules/config`, {
			responseType: 'json',
			headers: {
				apikey: this.portalConfig.apikey,
			},
		})
			.then((result) => {
				this.moduleContext = result.body;
				return result.body;
			});
	}
}

// Export types from root
export * from './index.types';
