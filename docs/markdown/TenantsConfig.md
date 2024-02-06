# Class: TenantsConfig

## Hierarchy

- `EventEmitter`

  ↳ **`TenantsConfig`**

## Table of contents

### Constructors

- [constructor](../wiki/TenantsConfig#constructor)

### Properties

- [AppContext](../wiki/TenantsConfig#appcontext)
- [modulesKafkaConsumer](../wiki/TenantsConfig#moduleskafkaconsumer)
- [tenantsKafkaConsumer](../wiki/TenantsConfig#tenantskafkaconsumer)

### Methods

- [apiKeyGuard](../wiki/TenantsConfig#apikeyguard)
- [getAllApps](../wiki/TenantsConfig#getallapps)
- [getAppContext](../wiki/TenantsConfig#getappcontext)
- [getAppModuleConfig](../wiki/TenantsConfig#getappmoduleconfig)
- [getAppsFeaturingModule](../wiki/TenantsConfig#getappsfeaturingmodule)
- [getJWTContent](../wiki/TenantsConfig#getjwtcontent)
- [getModuleContext](../wiki/TenantsConfig#getmodulecontext)
- [getModuleDependencies](../wiki/TenantsConfig#getmoduledependencies)
- [getModuleStatus](../wiki/TenantsConfig#getmodulestatus)
- [requestModule](../wiki/TenantsConfig#requestmodule)
- [verifyJwt](../wiki/TenantsConfig#verifyjwt)

## Constructors

### constructor

• **new TenantsConfig**(`portalConfig`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portalConfig` | [`PortalConfig`](../wiki/PortalConfig) |

#### Overrides

EventEmitter.constructor

#### Defined in

src/index.ts:36

## Properties

### AppContext

• **AppContext**: (...`dataOrPipes`: (`string`[] \| `PipeTransform`<`any`, `any`\> \| `Type`<`PipeTransform`<`any`, `any`\>\>)[]) => `ParameterDecorator`

#### Type declaration

▸ (`...dataOrPipes`): `ParameterDecorator`

Defines HTTP route param decorator

**`Public Api`**

##### Parameters

| Name | Type |
| :------ | :------ |
| `...dataOrPipes` | (`string`[] \| `PipeTransform`<`any`, `any`\> \| `Type`<`PipeTransform`<`any`, `any`\>\>)[] |

##### Returns

`ParameterDecorator`

#### Defined in

src/index.ts:248

___

### modulesKafkaConsumer

• **modulesKafkaConsumer**: [`WcmDigipolisModulesConsumer`](../wiki/~internal~.WcmDigipolisModulesConsumer)

#### Defined in

src/index.ts:29

___

### tenantsKafkaConsumer

• **tenantsKafkaConsumer**: [`WcmDigipolisTenantsConsumer`](../wiki/~internal~.WcmDigipolisTenantsConsumer)

#### Defined in

src/index.ts:28

## Methods

### apiKeyGuard

▸ **apiKeyGuard**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`BSLRequest`](../wiki/BSLRequest) |
| `res` | `Response`<`any`\> |
| `next` | `NextFunction` |

#### Returns

`void`

#### Defined in

src/index.ts:54

___

### getAllApps

▸ **getAllApps**(): [`AppContext`](../wiki/AppContext)[]

#### Returns

[`AppContext`](../wiki/AppContext)[]

#### Defined in

src/index.ts:125

___

### getAppContext

▸ **getAppContext**(`apikey`): [`AppContext`](../wiki/AppContext)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apikey` | `string` |

#### Returns

[`AppContext`](../wiki/AppContext)

#### Defined in

src/index.ts:119

___

### getAppModuleConfig

▸ **getAppModuleConfig**(`tenantUuid`): `Record`<`string`, `string` \| `Record`<`string`, `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenantUuid` | `string` |

#### Returns

`Record`<`string`, `string` \| `Record`<`string`, `string`\>\>

#### Defined in

src/index.ts:137

___

### getAppsFeaturingModule

▸ **getAppsFeaturingModule**(`routePrefix`, `moduleVersion`): [`AppContext`](../wiki/AppContext)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `routePrefix` | `string` |
| `moduleVersion` | `string` |

#### Returns

[`AppContext`](../wiki/AppContext)[]

#### Defined in

src/index.ts:260

___

### getJWTContent

▸ **getJWTContent**(`req`): [`GatewayJWTContent`](../wiki/GatewayJWTContent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`BSLRequest`](../wiki/BSLRequest) |

#### Returns

[`GatewayJWTContent`](../wiki/GatewayJWTContent)

#### Defined in

src/index.ts:115

___

### getModuleContext

▸ **getModuleContext**(): [`ModuleConfig`](../wiki/ModuleConfig)

#### Returns

[`ModuleConfig`](../wiki/ModuleConfig)

#### Defined in

src/index.ts:129

___

### getModuleDependencies

▸ **getModuleDependencies**(): [`ModuleDependency`](../wiki/ModuleDependency)[]

#### Returns

[`ModuleDependency`](../wiki/ModuleDependency)[]

#### Defined in

src/index.ts:133

___

### getModuleStatus

▸ **getModuleStatus**(`name`, `checkEndpoint?`): `CheckFunction`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `checkEndpoint` | `string` | `'/status/health'` |

#### Returns

`CheckFunction`

#### Defined in

src/index.ts:152

___

### requestModule

▸ **requestModule**<`T`\>(`tenantApikey`, `moduleRoutePrefix`, `method`, `path`, `params?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenantApikey` | `string` |
| `moduleRoutePrefix` | `string` |
| `method` | `Method` |
| `path` | `string` |
| `params?` | `Partial`<`Options`\> & { `isStream?`: ``false``  } |

#### Returns

`Promise`<`T`\>

#### Defined in

src/index.ts:180

▸ **requestModule**<`T`\>(`tenantApikey`, `moduleRoutePrefix`, `method`, `path`, `params`): `Promise`<`GotReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenantApikey` | `string` |
| `moduleRoutePrefix` | `string` |
| `method` | `Method` |
| `path` | `string` |
| `params` | `Partial`<`Options`\> & { `isStream?`: ``true``  } |

#### Returns

`Promise`<`GotReturn`\>

#### Defined in

src/index.ts:188

___

### verifyJwt

▸ **verifyJwt**(`jwtPublicKey?`): (`req`: [`BSLRequest`](../wiki/BSLRequest), `res`: `Response`<`any`\>, `next`: `NextFunction`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwtPublicKey` | `string` |

#### Returns

`fn`

▸ (`req`, `res`, `next`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`BSLRequest`](../wiki/BSLRequest) |
| `res` | `Response`<`any`\> |
| `next` | `NextFunction` |

##### Returns

`void`

#### Defined in

src/index.ts:74
