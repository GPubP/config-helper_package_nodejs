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
- [defaultMaxListeners](../wiki/TenantsConfig#defaultmaxlisteners)

### Methods

- [addListener](../wiki/TenantsConfig#addlistener)
- [apiKeyGuard](../wiki/TenantsConfig#apikeyguard)
- [emit](../wiki/TenantsConfig#emit)
- [eventNames](../wiki/TenantsConfig#eventnames)
- [getAllApps](../wiki/TenantsConfig#getallapps)
- [getAppContext](../wiki/TenantsConfig#getappcontext)
- [getAppModuleConfig](../wiki/TenantsConfig#getappmoduleconfig)
- [getAppsFeaturingModule](../wiki/TenantsConfig#getappsfeaturingmodule)
- [getJWTContent](../wiki/TenantsConfig#getjwtcontent)
- [getMaxListeners](../wiki/TenantsConfig#getmaxlisteners)
- [getModuleContext](../wiki/TenantsConfig#getmodulecontext)
- [listenerCount](../wiki/TenantsConfig#listenercount)
- [listeners](../wiki/TenantsConfig#listeners)
- [off](../wiki/TenantsConfig#off)
- [on](../wiki/TenantsConfig#on)
- [once](../wiki/TenantsConfig#once)
- [prependListener](../wiki/TenantsConfig#prependlistener)
- [prependOnceListener](../wiki/TenantsConfig#prependoncelistener)
- [rawListeners](../wiki/TenantsConfig#rawlisteners)
- [removeAllListeners](../wiki/TenantsConfig#removealllisteners)
- [removeListener](../wiki/TenantsConfig#removelistener)
- [requestModule](../wiki/TenantsConfig#requestmodule)
- [setMaxListeners](../wiki/TenantsConfig#setmaxlisteners)
- [verifyJwt](../wiki/TenantsConfig#verifyjwt)
- [listenerCount](../wiki/TenantsConfig#listenercount)

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

src/index.ts:33

## Properties

### AppContext

• **AppContext**: (...`dataOrPipes`: (`string`[] \| `PipeTransform`<`any`, `any`\> \| `Type`<`PipeTransform`<`any`, `any`\>\>)[]) => `ParameterDecorator`

#### Type declaration

▸ (...`dataOrPipes`): `ParameterDecorator`

Defines HTTP route param decorator

##### Parameters

| Name | Type |
| :------ | :------ |
| `...dataOrPipes` | (`string`[] \| `PipeTransform`<`any`, `any`\> \| `Type`<`PipeTransform`<`any`, `any`\>\>)[] |

##### Returns

`ParameterDecorator`

#### Defined in

src/index.ts:177

___

### modulesKafkaConsumer

• **modulesKafkaConsumer**: `WcmDigipolisModulesConsumer`

#### Defined in

src/index.ts:26

___

### tenantsKafkaConsumer

• **tenantsKafkaConsumer**: `WcmDigipolisTenantsConsumer`

#### Defined in

src/index.ts:25

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:45

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`TenantsConfig`](../wiki/TenantsConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`TenantsConfig`](../wiki/TenantsConfig)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/globals.d.ts:547

___

### apiKeyGuard

▸ **apiKeyGuard**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`BSLRequest`](../wiki/BSLRequest) |
| `res` | `Response` |
| `next` | `Function` |

#### Returns

`void`

#### Defined in

src/index.ts:51

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/node/globals.d.ts:557

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/globals.d.ts:562

___

### getAllApps

▸ **getAllApps**(): [`AppContext`](../wiki/AppContext)[]

#### Returns

[`AppContext`](../wiki/AppContext)[]

#### Defined in

src/index.ts:102

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

src/index.ts:98

___

### getAppModuleConfig

▸ **getAppModuleConfig**(`tenantUuid`): `Record`<`string`, `string` \| `Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tenantUuid` | `string` |

#### Returns

`Record`<`string`, `string` \| `Object`\>

#### Defined in

src/index.ts:110

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

src/index.ts:186

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

src/index.ts:94

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/globals.d.ts:554

___

### getModuleContext

▸ **getModuleContext**(): [`ModuleConfig`](../wiki/ModuleConfig)

#### Returns

[`ModuleConfig`](../wiki/ModuleConfig)

#### Defined in

src/index.ts:106

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/globals.d.ts:558

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/globals.d.ts:555

___

### off

▸ **off**(`event`, `listener`): [`TenantsConfig`](../wiki/TenantsConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`TenantsConfig`](../wiki/TenantsConfig)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/globals.d.ts:551

___

### on

▸ **on**(`event`, `listener`): [`TenantsConfig`](../wiki/TenantsConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`TenantsConfig`](../wiki/TenantsConfig)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/globals.d.ts:548

___

### once

▸ **once**(`event`, `listener`): [`TenantsConfig`](../wiki/TenantsConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`TenantsConfig`](../wiki/TenantsConfig)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/globals.d.ts:549

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`TenantsConfig`](../wiki/TenantsConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`TenantsConfig`](../wiki/TenantsConfig)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/globals.d.ts:560

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`TenantsConfig`](../wiki/TenantsConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`TenantsConfig`](../wiki/TenantsConfig)

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/globals.d.ts:561

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/globals.d.ts:556

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`TenantsConfig`](../wiki/TenantsConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`TenantsConfig`](../wiki/TenantsConfig)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/globals.d.ts:552

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`TenantsConfig`](../wiki/TenantsConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`TenantsConfig`](../wiki/TenantsConfig)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/globals.d.ts:550

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
| `params?` | `GotOptions` & { `isStream?`: ``false``  } |

#### Returns

`Promise`<`T`\>

#### Defined in

src/index.ts:117

▸ **requestModule**<`T`\>(`tenantApikey`, `moduleRoutePrefix`, `method`, `path`, `params`): `Promise`<`ProxyStream`<`unknown`\>\>

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
| `params` | `GotOptions` & { `isStream?`: ``true``  } |

#### Returns

`Promise`<`ProxyStream`<`unknown`\>\>

#### Defined in

src/index.ts:124

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`TenantsConfig`](../wiki/TenantsConfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`TenantsConfig`](../wiki/TenantsConfig)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/globals.d.ts:553

___

### verifyJwt

▸ **verifyJwt**(`jwtPublicKey?`): (`req`: [`BSLRequest`](../wiki/BSLRequest), `res`: `Response`, `next`: `Function`) => `void`

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
| `res` | `Response` |
| `next` | `Function` |

##### Returns

`void`

#### Defined in

src/index.ts:65

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `event`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:44
