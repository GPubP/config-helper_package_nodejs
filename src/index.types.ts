import { Request } from 'express';

import { KafkaConfig } from './kafka/kafka.types';

interface Dependency {
	version: string;
	module: string;
}

export interface ModuleConfig {
	_id: string;
	uuid: string;
	meta: {
		deleted: boolean;
		lastModified: Date;
		created: Date;
	};
	data: {
		name: string;
		moduleType: string;
		routePrefix: string;
		versions: {
			version: string;
			description: string;
			endpoint: string;
			dependencies: Dependency[];
		}[];
	};
}

export interface AppModuleData {
	moduleType: 'business-service' | 'frontend-bundle' | string;
	name: string;
	routePrefix: string;
}

export interface AppModuleMeta {
	created: string;
	deleted: boolean;
	lastModified: string;
}

export interface AppModule {
	uuid: string;
	data: AppModuleData;
	meta: AppModuleMeta;
}

export interface AppModuleVersion {
	module: AppModule;
	name: string;
	packageName?: string;
	endpoint?: string;
	description: string;
	version: string;
	dependencies: Dependency[];
	// tslint:disable-next-line: no-any
	config?: any;
}

export interface AppContext {
	_id: string;
	uuid: string;
	name: string;
	apikey: string;
	allApiKeys: string[];
	modules: AppModuleVersion[];
}

export interface ModuleContext {
	moduleConfiguration: ModuleConfig;
	appsAccess: AppContext[];
}

export interface PortalConfig {
	baseUrl: string;
	apikey: string;
	cronFrequency?: string;
	jwtPublicKey?: string;
	kafka?: KafkaConfig;
}

export interface GatewayJWTContent {
	tenantKey: string;
	userToken: string;
	contract: string;
	consumerUsername: string;
	iat: number;
}

export interface BSLRequest extends Request {
	// tslint:disable-next-line no-any
	locals?: Record<string, any> & { requestContext?: GatewayJWTContent};
}
