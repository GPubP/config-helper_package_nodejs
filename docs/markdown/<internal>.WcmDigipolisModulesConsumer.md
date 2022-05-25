# Class: WcmDigipolisModulesConsumer

[<internal>](../wiki/%3Cinternal%3E).WcmDigipolisModulesConsumer

## Hierarchy

- [`AbstractKafkaConsumer`](../wiki/%3Cinternal%3E.AbstractKafkaConsumer)

  ↳ **`WcmDigipolisModulesConsumer`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer#constructor)

### Properties

- [kafka](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer#kafka)
- [kafkaConfig](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer#kafkaconfig)

### Methods

- [on](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer#on)
- [subscribe](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer#subscribe)

## Constructors

### constructor

• **new WcmDigipolisModulesConsumer**(`kafkaInstance`, `kafkaConfig`)

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

▸ **on**(`name`, `handler`): [`WcmDigipolisModulesConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`WcmDigipolisModulesConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer)

#### Inherited from

[AbstractKafkaConsumer](../wiki/%3Cinternal%3E.AbstractKafkaConsumer).[on](../wiki/%3Cinternal%3E.AbstractKafkaConsumer#on)

#### Defined in

src/kafka/consumers/AbstractKafkaConsumer.ts:23

▸ **on**(`name`, `handler`): [`WcmDigipolisModulesConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string`[] |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

[`WcmDigipolisModulesConsumer`](../wiki/%3Cinternal%3E.WcmDigipolisModulesConsumer)

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

src/kafka/consumers/wcm-digipolis.modules.ts:7
