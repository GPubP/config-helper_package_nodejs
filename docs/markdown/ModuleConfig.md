# Interface: ModuleConfig

## Table of contents

### Properties

- [\_id](../wiki/ModuleConfig#_id)
- [data](../wiki/ModuleConfig#data)
- [meta](../wiki/ModuleConfig#meta)
- [uuid](../wiki/ModuleConfig#uuid)

## Properties

### \_id

• **\_id**: `string`

#### Defined in

src/index.types.ts:11

___

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `moduleType` | `string` |
| `name` | `string` |
| `routePrefix` | `string` |
| `versions` | { `dependencies`: [`Dependency`](../wiki/~internal~.Dependency)[] ; `description`: `string` ; `endpoint`: `string` ; `version`: `string`  }[] |

#### Defined in

src/index.types.ts:18

___

### meta

• **meta**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created` | `Date` |
| `deleted` | `boolean` |
| `lastModified` | `Date` |

#### Defined in

src/index.types.ts:13

___

### uuid

• **uuid**: `string`

#### Defined in

src/index.types.ts:12
