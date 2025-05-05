[**@wcm/config-helper**](../README.md)

***

[@wcm/config-helper](../globals.md) / CustomError

# Class: CustomError

Defined in: src/errors.ts:19

## Extended by

- [`CustomValidationError`](CustomValidationError.md)

## Implements

- [`ICustomError`](../interfaces/ICustomError.md)

## Constructors

### Constructor

> **new CustomError**(`err?`): `CustomError`

Defined in: src/errors.ts:28

#### Parameters

##### err?

`Error`

#### Returns

`CustomError`

## Properties

### code

> **code**: `string` = `'UNKNOWN_ERROR'`

Defined in: src/errors.ts:24

#### Implementation of

[`ICustomError`](../interfaces/ICustomError.md).[`code`](../interfaces/ICustomError.md#code)

***

### extraInfo

> **extraInfo**: `any` = `null`

Defined in: src/errors.ts:26

#### Implementation of

[`ICustomError`](../interfaces/ICustomError.md).[`extraInfo`](../interfaces/ICustomError.md#extrainfo)

***

### identifier

> **identifier**: `string`

Defined in: src/errors.ts:23

#### Implementation of

[`ICustomError`](../interfaces/ICustomError.md).[`identifier`](../interfaces/ICustomError.md#identifier)

***

### status

> **status**: `number` = `500`

Defined in: src/errors.ts:22

#### Implementation of

[`ICustomError`](../interfaces/ICustomError.md).[`status`](../interfaces/ICustomError.md#status)

***

### title

> **title**: `string` = `'Something went wrong'`

Defined in: src/errors.ts:21

#### Implementation of

[`ICustomError`](../interfaces/ICustomError.md).[`title`](../interfaces/ICustomError.md#title)

***

### type

> **type**: `string` = `'error'`

Defined in: src/errors.ts:20

#### Implementation of

[`ICustomError`](../interfaces/ICustomError.md).[`type`](../interfaces/ICustomError.md#type)
