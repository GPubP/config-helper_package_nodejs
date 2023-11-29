# Class: Kafka

[~internal~](../wiki/~internal~).Kafka

## Table of contents

### Constructors

- [constructor](../wiki/~internal~.Kafka#constructor)

### Methods

- [subscribe](../wiki/~internal~.Kafka#subscribe)

## Constructors

### constructor

• **new Kafka**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.kafkaHost` | `string` |
| `config.origin` | `string` |
| `config.ssl` | `Object` |
| `config.ssl.ca` | `string`[] |
| `config.ssl.cert` | `string` |
| `config.ssl.key` | `string` |
| `config.ssl.rejectUnauthorized` | `boolean` |

#### Defined in

src/global.d.ts:22

## Methods

### subscribe

▸ **subscribe**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.callback` | (`message`: [`KafkaMessage`](../wiki/~internal~.KafkaMessage)<`unknown`\>) => `void` |
| `config.groupId` | `string` |
| `config.topic` | `string` |

#### Returns

`void`

#### Defined in

src/global.d.ts:33
