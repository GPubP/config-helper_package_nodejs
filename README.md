# WCM Config helper

This packages provides the tools to protect your BSL (business service layer) from unwanted requests.

It provides the following tools:

### Create instance
```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
	cronFrequency: "*/10 * * * * *", // = default
});
```

### apiKeyGuard
Middleware that converts an apikey to a tenant context and blocks request when the key is not valid.

```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
});

app.use(tenantsConfig.apiKeyGuard);
```

### getAppContext
Helper that converts an apikey to tenant info.

```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
});

tenantsConfig.getAppContext(req.headers.apikey);

// returns
interface AppContext {
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
```

### getAllApps
Helper that returns all tenants applicable for your BSL.

```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
});

tenantsConfig.getAllApps();

// returns
type AppContext = Array<{
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
}>
```

### requestModule
Request helper to request resources from other BSL's who have access tot the tenant.

```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
});

tenantsConfig.requestModule(
	"tenant-name", 
	"target module name", 
	"PUT", 
	"/path-of-target-module-resource", 
	{
		query: {
			something: "something"
		},
		headers: {},
		body: {}
		// ...
	}
);

// returns request response
```

### AppContext
NestJS decorator that uses the getAppContext to get tenant info.

```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
});
const AppContext = tenantsConfig.AppContext;

@Get()
@ApiOperation({ summary: 'Read all', description: 'Get all resources' })
@ApiOkResponse({ type: SometType, description: 'OK' })
public async read(
	@AppContext(['apikey']) targetApikey: string
	@AppContext(['name']) tenantName: string
): Promise<IEmbeddedResponse<Site>> {
	// use apikey and tenantName here
}
```

### getModuleConfig
Get the module config received from wcm-admin

```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
});
const moduleConfig = tenantsConfig.getModuleConfig();

// returns
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
};
```
