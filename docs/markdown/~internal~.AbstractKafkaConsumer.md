# Class: AbstractKafkaConsumer

[~internal~](../wiki/~internal~).AbstractKafkaConsumer

## Hierarchy

- `EventEmitter`

  ↳ **`AbstractKafkaConsumer`**

  ↳↳ [`WcmDigipolisTenantsConsumer`](../wiki/~internal~.WcmDigipolisTenantsConsumer)

  ↳↳ [`WcmDigipolisModulesConsumer`](../wiki/~internal~.WcmDigipolisModulesConsumer)

## Table of contents

### Constructors

- [constructor](../wiki/~internal~.AbstractKafkaConsumer#constructor)

### Properties

- [kafka](../wiki/~internal~.AbstractKafkaConsumer#kafka)
- [kafkaConfig](../wiki/~internal~.AbstractKafkaConsumer#kafkaconfig)

### Methods

- [on](../wiki/~internal~.AbstractKafkaConsumer#on)
- [subscribe](../wiki/~internal~.AbstractKafkaConsumer#subscribe)

## Constructors

### constructor

• **new AbstractKafkaConsumer**(`kafkaInstance`, `kafkaConfig`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kafkaInstance` | [`Kafka`](../wiki/~internal~.Kafka) |
| `kafkaConfig` | [`KafkaConfig`](../wiki/~internal~.KafkaConfig) |

#### Overrides

EventEmitter.constructor

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:10

## Properties

### kafka

• `Protected` **kafka**: [`Kafka`](../wiki/~internal~.Kafka)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:8

___

### kafkaConfig

• `Protected` **kafkaConfig**: [`KafkaConfig`](../wiki/~internal~.KafkaConfig)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:7

## Methods

### on

▸ **on**(`name`, `handler`): [`AbstractKafkaConsumer`](../wiki/~internal~.AbstractKafkaConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`AbstractKafkaConsumer`](../wiki/~internal~.AbstractKafkaConsumer)

#### Overrides

EventEmitter.on

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:23

▸ **on**(`name`, `handler`): [`AbstractKafkaConsumer`](../wiki/~internal~.AbstractKafkaConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string`[] |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`AbstractKafkaConsumer`](../wiki/~internal~.AbstractKafkaConsumer)

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
| `config` | [`KafkaConfig`](../wiki/~internal~.KafkaConfig) |

#### Returns

`void`

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:38
