import { Request } from 'express'
import { CronJob } from 'cron'
import { propOr } from 'ramda';
import got, { Method } from 'got'

import { PortalConfig, ModuleContext, AppContext } from './index.types'
import { UnauthorizedError } from './errors';

export class TenantsConfig {
	private portalConfig: PortalConfig;
	private moduleContext: ModuleContext;
	private job: CronJob;

	constructor(portalConfig: PortalConfig) {
		this.portalConfig = {
			cronFrequency: '*/10 * * * * *',
			...portalConfig,
		};

		this.initCron();
	}

	public apiKeyGuard = (req: Request, res: Response, next: any): void => {
		if (!req.headers.apikey) {
			return next(UnauthorizedError);
		}

		const linkedApp = this.moduleContext.appsAccess.find((app) => app.apikey === req.headers.apikey)

		if (!linkedApp) {
			return next(UnauthorizedError);
		}

		return next();
	}

	public getAppContext(tenant: string): AppContext {
		return this.moduleContext.appsAccess.find((app) => app.name === tenant)
	}

	public requestModule(tenant: string, module: string, method: Method, path: string, params?: any): Promise<any> {
		const appContext = this.getAppContext(tenant);
		const moduleContext = appContext.modules.find((modu) => modu.name === module);

		return got(`${moduleContext.endpoint}/${path}`, {
			...params || {},
			method,
			responseType: 'json',
			headers: {
				...propOr({}, 'headers')(params),
				apikey: appContext.apikey,
			},
		})
	}

	private initCron(): void {
		this.job = new CronJob(this.portalConfig.cronFrequency, this.onTick.bind(this), null, true, null, null, true)
	}

	private onTick(): void {
		got.get<ModuleContext>(`${this.portalConfig.baseUrl}/api/1.0.0/modules/config`, {
			responseType: 'json',
			headers: {
				apikey: this.portalConfig.apikey,
			},
		})
			.then((result) => this.moduleContext = result.body)
	}
}
