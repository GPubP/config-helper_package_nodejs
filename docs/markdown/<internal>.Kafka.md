# Class: Kafka

[<internal>](../wiki/%3Cinternal%3E).Kafka

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Kafka#constructor)

### Methods

- [subscribe](../wiki/%3Cinternal%3E.Kafka#subscribe)

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
| `config.groupId` | `string` |
| `config.topic` | `string` |
| `config.callback` | (`message`: [`KafkaMessage`](../wiki/%3Cinternal%3E.KafkaMessage)<`unknown`\>) => `void` |

#### Returns

`void`

#### Defined in

src/global.d.ts:33
