# Class: AbstractKafkaConsumer

[<internal>](../wiki/%3Cinternal%3E).AbstractKafkaConsumer

## Hierarchy

- `EventEmitter`

  ↳ **`AbstractKafkaConsumer`**

  ↳↳ [`WcmDigipolisTenantsConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer)

  ↳↳ [`WcmDigipolisModulesConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#constructor)

### Properties

- [kafka](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#kafka)
- [kafkaConfig](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#kafkaconfig)

### Methods

- [on](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#on)
- [subscribe](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#subscribe)

## Constructors

### constructor

• **new AbstractKafkaConsumer**(`kafkaInstance`, `kafkaConfig`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kafkaInstance` | [`Kafka`](../wiki/%3Cinternal%3E.Kafka) |
| `kafkaConfig` | [`KafkaConfig`](../wiki/%3Cinternal%3E.KafkaConfig) |

#### Overrides

EventEmitter.constructor

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:10

## Properties

### kafka

• `Protected` **kafka**: [`Kafka`](../wiki/%3Cinternal%3E.Kafka)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:8

___

### kafkaConfig

• `Protected` **kafkaConfig**: [`KafkaConfig`](../wiki/%3Cinternal%3E.KafkaConfig)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:7

## Methods

### on

▸ **on**(`name`, `handler`): [`AbstractKafkaConsumer`](../wiki/%3Cinternal%3E.AbstractKafkaConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`AbstractKafkaConsumer`](../wiki/%3Cinternal%3E.AbstractKafkaConsumer)

#### Overrides

EventEmitter.on

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:23

▸ **on**(`name`, `handler`): [`AbstractKafkaConsumer`](../wiki/%3Cinternal%3E.AbstractKafkaConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string`[] |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`AbstractKafkaConsumer`](../wiki/%3Cinternal%3E.AbstractKafkaConsumer)

#### Overrides

EventEmitter.on

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:24

___

### subscribe

▸ `Protected` `Abstract` **subscribe**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`KafkaConfig`](../wiki/%3Cinternal%3E.KafkaConfig) |

#### Returns

`void`

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:35
