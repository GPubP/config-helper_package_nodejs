# Class: WcmDigipolisTenantsConsumer

[<internal>](../wiki/%3Cinternal%3E).WcmDigipolisTenantsConsumer

## Hierarchy

- [`AbstractKafkaConsumer`](../wiki/%3Cinternal%3E.AbstractKafkaConsumer)

  ↳ **`WcmDigipolisTenantsConsumer`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer#constructor)

### Properties

- [kafka](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer#kafka)
- [kafkaConfig](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer#kafkaconfig)

### Methods

- [on](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer#on)
- [subscribe](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer#subscribe)

## Constructors

### constructor

• **new WcmDigipolisTenantsConsumer**(`kafkaInstance`, `kafkaConfig`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kafkaInstance` | [`Kafka`](../wiki/%3Cinternal%3E.Kafka) |
| `kafkaConfig` | [`KafkaConfig`](../wiki/%3Cinternal%3E.KafkaConfig) |

#### Inherited from

[AbstractKafkaConsumer](../wiki/%3Cinternal%3E.AbstractKafkaConsumer).[constructor](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#constructor)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:10

## Properties

### kafka

• `Protected` **kafka**: [`Kafka`](../wiki/%3Cinternal%3E.Kafka)

#### Inherited from

[AbstractKafkaConsumer](../wiki/%3Cinternal%3E.AbstractKafkaConsumer).[kafka](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#kafka)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:8

___

### kafkaConfig

• `Protected` **kafkaConfig**: [`KafkaConfig`](../wiki/%3Cinternal%3E.KafkaConfig)

#### Inherited from

[AbstractKafkaConsumer](../wiki/%3Cinternal%3E.AbstractKafkaConsumer).[kafkaConfig](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#kafkaconfig)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:7

## Methods

### on

▸ **on**(`name`, `handler`): [`WcmDigipolisTenantsConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`WcmDigipolisTenantsConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer)

#### Inherited from

[AbstractKafkaConsumer](../wiki/%3Cinternal%3E.AbstractKafkaConsumer).[on](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#on)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:23

▸ **on**(`name`, `handler`): [`WcmDigipolisTenantsConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string`[] |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`WcmDigipolisTenantsConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisTenantsConsumer)

#### Inherited from

[AbstractKafkaConsumer](../wiki/%3Cinternal%3E.AbstractKafkaConsumer).[on](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#on)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:24

___

### subscribe

▸ `Protected` **subscribe**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`KafkaConfig`](../wiki/%3Cinternal%3E.KafkaConfig) |

#### Returns

`void`

#### Overrides

[AbstractKafkaConsumer](../wiki/%3Cinternal%3E.AbstractKafkaConsumer).[subscribe](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#subscribe)

#### Defined in

src/kafka/consumers/wcm-digipolis.tenants.ts:7
