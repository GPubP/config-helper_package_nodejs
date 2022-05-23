# WCM Config helper

This packages provides the tools to protect your BSL (business service layer) from unwanted requests.

It provides the following tools:

## Interface

### Create instance
```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
	cronFrequency: "*/10 * * * * *", // optional => default
	jwtPublicKey: "-----BEGIN PUBLIC KEY-----\n...-----END PUBLIC KEY-----", // optional => defaults to undefined
	kafka: {
		host: "hostname of kafka";
		origin: "server origin";
		ca: "CA PUBLIC KEY";
		key: "PRIVATE KEY";
		cert: "PUBLIC KEY";
		systemTopic: "wcm-digipolis.system"; // example
		systemGroupId: "wcm-digipolis.system-portal"; // example
	} // optional => defaults to undefined
});
```
Tip:
It is recommended to set kafka variables. 
This will switch the polling behaviour to an event subsription behaviour. 
Subscriptions are far more efficient. This also means that events become more meaningful (see Events section).

### systemKafkaConsumer
This is the consumer the TenantsConfig class uses to listen to wcm-digipolis.system (or other) kafka events.
You can subscribe to events yourself when needed.

```ts
const tenantsConfig = new TenantsConfig({
	...
});

tenantsConfig.systemKafkaConsumer.on('tenant-create', (message: KafkaMessage) => {
	// Handle event ...
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

### verifyJwt
Middleware that converts an apikey to a tenant context and blocks request when the key is not valid.

```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",

});

app.use(tenantsConfig.verifyJwt("PUBLIC KEY"));
```

You don't need to pass the token if it is specified in tenantsConfig constructor
```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
	jwtPublicKey: "-----BEGIN PUBLIC KEY-----\n...-----END PUBLIC KEY-----"
});

app.use(tenantsConfig.verifyJwt());
```

### getJWTContent
Helper that returns the payload of the authorization jwt token set on the req.locals object by the verifyJwt function

```ts
const tenantsConfig = new TenantsConfig({
	baseUrl: "base-url of your service",
	apikey: "your-apikey",
	jwtPublicKey: "-----BEGIN PUBLIC KEY-----\n...-----END PUBLIC KEY-----"
});

app.use(tenantsConfig.verifyJwt());
app.use((req, res, next) => {
	// You can get the context after verifyJwt has been called.
	const context = tenantsConfig.getJWTContent();
})
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
		module: AppModule;
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
		module: AppModule;
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
	"target module endpoint", 
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

### getAppModuleConfig
Get the custom module config for a tenant received from wcm-admin.
In the website config in wcm-admin, a module can be given additional custom config for a specific tenant (JSon format). 
Use this method to retrieve this custom config in a BSL. 
It is strongly advised to cache this response in the BSL for performance reasons.

```ts
// Returns the JSon object as stored in wcm-admin
const customConfig = tenantConfig.getAppModuleConfig(tenantUuid);
```

## Events

| name           | type          | description                                                                       |
|----------------|---------------|-----------------------------------------------------------------------------------|
| ready          | ModuleContext | ModuleConfig has been fetched and set for the first time.                         |
| config-updated | ModuleContext | ModuleConfig has been update through polling or event (depends on kafka setting). |
