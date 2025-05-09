import { Request } from 'express';

import { KafkaConfig } from './kafka/kafka.types';

export interface ModuleDependency {
	version: string;
	module: string | ModuleConfig;
}

export interface ModuleVersion {
	version: string;
	description: string;
	endpoint: string;
	dependencies: ModuleDependency[];
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
		versions: ModuleVersion[];
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
	dependencies: ModuleDependency[];
	config?: unknown;
}

export interface AppContext {
	_id: string;
	uuid: string;
	name: string;
	apikey: string;
	allApiKeys: string[];
	modules: AppModuleVersion[];
	client?: {
		name: string;
	};
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
	locals?: Record<string, unknown> & { requestContext?: GatewayJWTContent };
}
