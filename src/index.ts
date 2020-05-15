import { Request, Response } from 'express'
import { CronJob } from 'cron'
import { propOr, pathOr, clone } from 'ramda';
import got, { Method, GotOptions } from 'got'
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import jwt from 'jsonwebtoken'

import { PortalConfig, ModuleContext, AppContext, ModuleConfig, BSLRequest, GatewayJWTContent } from './index.types';

import { UnauthorizedError } from './errors';

const EventEmitter = require('events');

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
			.then((moduleContext) => this.emit('ready', moduleContext))
	}

	public apiKeyGuard = (req: BSLRequest, res: Response, next: any): void => {
		if (!req.headers.apikey) {
			return next(UnauthorizedError);
		}

		const linkedApp = this.moduleContext.appsAccess.find((app) => app.apikey === req.headers.apikey)

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

			jwt.verify(token, jwtPublicKey,  { algorithms: ['HS256'] }, (err, context) => {
				if (err || !context) {
					console.error('Invalid Token passed in authorization header', req.url);
					return next();
				}

				req.locals = {
					...req.locals,
					requestContex: jwt.decode(token),
				};

				next();
			});
		}
	}

	public getJWTContent(req: BSLRequest): GatewayJWTContent {
		return req.locals?.requestContext;
	}

	public getAppContext(apikey: string): AppContext {
		return this.moduleContext.appsAccess.find((app) => app.apikey === apikey)
	}

	public getAllApps(): AppContext[] {
		return this.moduleContext.appsAccess;
	}

	public getModuleContext(): ModuleConfig {
		return clone(this.moduleContext.moduleConfiguration);
	}

	public requestModule(tenant: string, module: string, method: Method, path: string, params?: GotOptions): Promise<any> {
		const appContext = this.getAppContext(tenant);
		const moduleContext = appContext.modules.find((modu) => modu.name === module);

		return got(`${moduleContext.endpoint}/${path}`, {
			...params || {} as unknown as any,
			method,
			responseType: 'json',
			headers: {
				...propOr({}, 'headers')(params),
				apikey: appContext.apikey,
			},
		})
	}

	public AppContext = createParamDecorator( // tslint:disable-line variable-name
		(path: string[] = [], ctx: ExecutionContext): unknown => {
			const req: Request = ctx.switchToHttp().getRequest();
			const appContext: AppContext = this.getAppContext(req.get('apikey'));

			return pathOr(null, path)(appContext);
		}
	);

	private initCron(): void {
		this.job = new CronJob(this.portalConfig.cronFrequency, this.onTick.bind(this))
		this.job.start();
	}

	private onTick(): void {
		this.fetchConfig()
			.then((moduleContext) =>  this.emit('config-updated', moduleContext))
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
				return result.body
			})
	}
}

// Export types from root
export * from './index.types';
