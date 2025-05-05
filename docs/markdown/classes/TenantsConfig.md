[**@wcm/config-helper**](../README.md)

***

[@wcm/config-helper](../globals.md) / TenantsConfig

# Class: TenantsConfig

Defined in: src/index.ts:27

## Extends

- `EventEmitter`

## Constructors

### Constructor

> **new TenantsConfig**(`portalConfig`): `TenantsConfig`

Defined in: src/index.ts:36

#### Parameters

##### portalConfig

[`PortalConfig`](../interfaces/PortalConfig.md)

#### Returns

`TenantsConfig`

#### Overrides

`EventEmitter.constructor`

## Properties

### AppContext()

> **AppContext**: (...`dataOrPipes`) => `ParameterDecorator`

Defined in: src/index.ts:254

#### Parameters

##### dataOrPipes

...(`string`[] \| `PipeTransform`\<`any`, `any`\> \| `Type`\<`PipeTransform`\<`any`, `any`\>\>)[]

#### Returns

`ParameterDecorator`

***

### modulesKafkaConsumer

> **modulesKafkaConsumer**: [`WcmDigipolisModulesConsumer`](../~internal~/classes/WcmDigipolisModulesConsumer.md)

Defined in: src/index.ts:29

***

### tenantsKafkaConsumer

> **tenantsKafkaConsumer**: [`WcmDigipolisTenantsConsumer`](../~internal~/classes/WcmDigipolisTenantsConsumer.md)

Defined in: src/index.ts:28

## Methods

### apiKeyGuard()

> **apiKeyGuard**(`req`, `res`, `next`): `void`

Defined in: src/index.ts:54

#### Parameters

##### req

[`BSLRequest`](../interfaces/BSLRequest.md)

##### res

`Response`

##### next

`NextFunction`

#### Returns

`void`

***

### getAllApps()

> **getAllApps**(): [`AppContext`](../interfaces/AppContext.md)[]

Defined in: src/index.ts:113

#### Returns

[`AppContext`](../interfaces/AppContext.md)[]

***

### getAppContext()

> **getAppContext**(`apikey`): [`AppContext`](../interfaces/AppContext.md)

Defined in: src/index.ts:107

#### Parameters

##### apikey

`string`

#### Returns

[`AppContext`](../interfaces/AppContext.md)

***

### getAppModuleConfig()

> **getAppModuleConfig**(`tenantUuid`): `Record`\<`string`, `string` \| `Record`\<`string`, `string`\>\>

Defined in: src/index.ts:125

#### Parameters

##### tenantUuid

`string`

#### Returns

`Record`\<`string`, `string` \| `Record`\<`string`, `string`\>\>

***

### getAppsFeaturingModule()

> **getAppsFeaturingModule**(`routePrefix`, `moduleVersion`): [`AppContext`](../interfaces/AppContext.md)[]

Defined in: src/index.ts:264

#### Parameters

##### routePrefix

`string`

##### moduleVersion

`string`

#### Returns

[`AppContext`](../interfaces/AppContext.md)[]

***

### getJWTContent()

> **getJWTContent**(`req`): [`GatewayJWTContent`](../interfaces/GatewayJWTContent.md)

Defined in: src/index.ts:103

#### Parameters

##### req

[`BSLRequest`](../interfaces/BSLRequest.md)

#### Returns

[`GatewayJWTContent`](../interfaces/GatewayJWTContent.md)

***

### getModuleContext()

> **getModuleContext**(): [`ModuleConfig`](../interfaces/ModuleConfig.md)

Defined in: src/index.ts:117

#### Returns

[`ModuleConfig`](../interfaces/ModuleConfig.md)

***

### getModuleDependencies()

> **getModuleDependencies**(): [`ModuleDependency`](../interfaces/ModuleDependency.md)[]

Defined in: src/index.ts:121

#### Returns

[`ModuleDependency`](../interfaces/ModuleDependency.md)[]

***

### getModuleStatus()

> **getModuleStatus**(`name`, `checkEndpoint`): `CheckFunction`

Defined in: src/index.ts:134

#### Parameters

##### name

`string`

##### checkEndpoint

`string` = `'/status/ping'`

#### Returns

`CheckFunction`

***

### getPortalStatus()

> **getPortalStatus**(): `CheckFunction`

Defined in: src/index.ts:167

#### Returns

`CheckFunction`

***

### requestModule()

#### Call Signature

> **requestModule**\<`T`\>(`tenantApikey`, `moduleRoutePrefix`, `method`, `path`, `params?`): `Promise`\<`T`\>

Defined in: src/index.ts:186

##### Type Parameters

###### T

`T` = `unknown`

##### Parameters

###### tenantApikey

`string`

###### moduleRoutePrefix

`string`

###### method

`Method`

###### path

`string`

###### params?

`Partial`\<`Options`\> & `object`

##### Returns

`Promise`\<`T`\>

#### Call Signature

> **requestModule**\<`T`\>(`tenantApikey`, `moduleRoutePrefix`, `method`, `path`, `params`): `Promise`\<`GotReturn`\>

Defined in: src/index.ts:194

##### Type Parameters

###### T

`T` = `unknown`

##### Parameters

###### tenantApikey

`string`

###### moduleRoutePrefix

`string`

###### method

`Method`

###### path

`string`

###### params

`Partial`\<`Options`\> & `object`

##### Returns

`Promise`\<`GotReturn`\>

***

### verifyJwt()

> **verifyJwt**(`jwtPublicKey`): (`req`, `res`, `next`) => `void`

Defined in: src/index.ts:70

#### Parameters

##### jwtPublicKey

`string` = `...`

#### Returns

> (`req`, `res`, `next`): `void`

##### Parameters

###### req

[`BSLRequest`](../interfaces/BSLRequest.md)

###### res

`Response`

###### next

`NextFunction`

##### Returns

`void`
