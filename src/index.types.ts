interface ModuleConfig {
	_id: string;
	meta: {
		deleted: boolean;
		lastModified: Date;
		created: Date;
	};
	data: {
		name: string;
		moduleType: string;
		versions: {
			version: string;
			description: string;
			endpoint: string;
			dependencies: string;
		}[];
	};
}

export interface AppContext {
	name: string;
	apikey: string;
	modules: {
		name: string;
		packageName?: string;
		endpoint?: string;
		description: string;
		version: string;
	}[];
}

export interface ModuleContext {
	moduleConfiguration: ModuleConfig;
	appsAccess: AppContext[];
}

export interface PortalConfig {
	baseUrl: string;
	apikey: string;
	cronFrequency?: string;
}
