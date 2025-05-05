[**@wcm/config-helper**](../README.md)

***

[@wcm/config-helper](../globals.md) / CustomValidationError

# Class: CustomValidationError

Defined in: src/errors.ts:37

## Extends

- [`CustomError`](CustomError.md)

## Constructors

### Constructor

> **new CustomValidationError**(`err`): `CustomValidationError`

Defined in: src/errors.ts:42

#### Parameters

##### err

`unknown`

#### Returns

`CustomValidationError`

#### Overrides

[`CustomError`](CustomError.md).[`constructor`](CustomError.md#constructor)

## Properties

### code

> **code**: `string` = `'BAD_REQUEST'`

Defined in: src/errors.ts:39

#### Overrides

[`CustomError`](CustomError.md).[`code`](CustomError.md#code)

***

### extraInfo

> **extraInfo**: `any` = `null`

Defined in: src/errors.ts:26

#### Inherited from

[`CustomError`](CustomError.md).[`extraInfo`](CustomError.md#extrainfo)

***

### identifier

> **identifier**: `string`

Defined in: src/errors.ts:23

#### Inherited from

[`CustomError`](CustomError.md).[`identifier`](CustomError.md#identifier)

***

### status

> **status**: `number` = `400`

Defined in: src/errors.ts:40

#### Overrides

[`CustomError`](CustomError.md).[`status`](CustomError.md#status)

***

### title

> **title**: `string` = `'Invalid object'`

Defined in: src/errors.ts:38

#### Overrides

[`CustomError`](CustomError.md).[`title`](CustomError.md#title)

***

### type

> **type**: `string` = `'error'`

Defined in: src/errors.ts:20

#### Inherited from

[`CustomError`](CustomError.md).[`type`](CustomError.md#type)
