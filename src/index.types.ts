interface Dependency {
	version: string;
	module: string;
}

interface ModuleConfig {
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
		versions: {
			version: string;
			description: string;
			endpoint: string;
			dependencies: Dependency[];
		}[];
	};
}

export interface AppContext {
	_id: string;
	uuid: string;
	name: string;
	apikey: string;
	modules: {
		name: string;
		packageName?: string;
		endpoint?: string;
		description: string;
		version: string;
		dependencies: Dependency[];
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
