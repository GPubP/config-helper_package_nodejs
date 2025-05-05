[**@wcm/config-helper**](../README.md)

***

[@wcm/config-helper](../globals.md) / ErrorFilter

# Class: ErrorFilter

Defined in: src/errors.ts:51

## Implements

- `ExceptionFilter`

## Constructors

### Constructor

> **new ErrorFilter**(`__namedParameters`): `ErrorFilter`

Defined in: src/errors.ts:54

#### Parameters

##### \_\_namedParameters

###### debug?

`boolean` = `false`

#### Returns

`ErrorFilter`

## Methods

### catch()

> **catch**(`exception`, `host`): `any`

Defined in: src/errors.ts:58

Method to implement a custom exception filter.

#### Parameters

##### exception

`HttpException`

the class of the exception being handled

##### host

`ArgumentsHost`

used to access an array of arguments for
the in-flight request

#### Returns

`any`

#### Implementation of

`ExceptionFilter.catch`
