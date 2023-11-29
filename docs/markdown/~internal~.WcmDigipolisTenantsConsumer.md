# Class: WcmDigipolisTenantsConsumer

[~internal~](../wiki/~internal~).WcmDigipolisTenantsConsumer

## Hierarchy

- [`AbstractKafkaConsumer`](../wiki/~internal~.AbstractKafkaConsumer)

  ↳ **`WcmDigipolisTenantsConsumer`**

## Table of contents

### Constructors

- [constructor](../wiki/~internal~.WcmDigipolisTenantsConsumer#constructor)

### Properties

- [kafka](../wiki/~internal~.WcmDigipolisTenantsConsumer#kafka)
- [kafkaConfig](../wiki/~internal~.WcmDigipolisTenantsConsumer#kafkaconfig)

### Methods

- [on](../wiki/~internal~.WcmDigipolisTenantsConsumer#on)
- [subscribe](../wiki/~internal~.WcmDigipolisTenantsConsumer#subscribe)

## Constructors

### constructor

• **new WcmDigipolisTenantsConsumer**(`kafkaInstance`, `kafkaConfig`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kafkaInstance` | [`Kafka`](../wiki/~internal~.Kafka) |
| `kafkaConfig` | [`KafkaConfig`](../wiki/~internal~.KafkaConfig) |

#### Inherited from

[AbstractKafkaConsumer](../wiki/~internal~.AbstractKafkaConsumer).[constructor](../wiki/~internal~.AbstractKafkaConsumer#constructor)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:10

## Properties

### kafka

• `Protected` **kafka**: [`Kafka`](../wiki/~internal~.Kafka)

#### Inherited from

[AbstractKafkaConsumer](../wiki/~internal~.AbstractKafkaConsumer).[kafka](../wiki/~internal~.AbstractKafkaConsumer#kafka)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:8

___

### kafkaConfig

• `Protected` **kafkaConfig**: [`KafkaConfig`](../wiki/~internal~.KafkaConfig)

#### Inherited from

[AbstractKafkaConsumer](../wiki/~internal~.AbstractKafkaConsumer).[kafkaConfig](../wiki/~internal~.AbstractKafkaConsumer#kafkaconfig)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:7

## Methods

### on

▸ **on**(`name`, `handler`): [`WcmDigipolisTenantsConsumer`](../wiki/~internal~.WcmDigipolisTenantsConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`WcmDigipolisTenantsConsumer`](../wiki/~internal~.WcmDigipolisTenantsConsumer)

#### Inherited from

[AbstractKafkaConsumer](../wiki/~internal~.AbstractKafkaConsumer).[on](../wiki/~internal~.AbstractKafkaConsumer#on)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:23

▸ **on**(`name`, `handler`): [`WcmDigipolisTenantsConsumer`](../wiki/~internal~.WcmDigipolisTenantsConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string`[] |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`WcmDigipolisTenantsConsumer`](../wiki/~internal~.WcmDigipolisTenantsConsumer)

#### Inherited from

[AbstractKafkaConsumer](../wiki/~internal~.AbstractKafkaConsumer).[on](../wiki/~internal~.AbstractKafkaConsumer#on)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:24

___

### subscribe

▸ `Protected` **subscribe**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`KafkaConfig`](../wiki/~internal~.KafkaConfig) |

#### Returns

`void`

#### Overrides

[AbstractKafkaConsumer](../wiki/~internal~.AbstractKafkaConsumer).[subscribe](../wiki/~internal~.AbstractKafkaConsumer#subscribe)

#### Defined in

src/kafka/consumers/wcm-digipolis.tenants.ts:7
