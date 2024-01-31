import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException
} from '@nestjs/common';
import { AxiosGotError } from '@wcm/axios-got-wrapper';
import { AxiosError } from 'axios';
import { HTTPError } from 'got';
import { isEmpty, omit } from 'ramda';
import { v4 as uuid } from 'uuid';

import { ICustomError, ICustomFilterOptions } from './errors.types';

// tslint:disable-next-line variable-name
export const UnauthorizedError = Object.freeze({
	type: '/errors/v1/Unauthorized',
	title: 'You are not authorized to use this endpoint',
	status: 401,
	identifier: uuid(),
	code: 'Unauthorized'
});

export class CustomError implements ICustomError {
	public type = 'error';
	public title = 'Something went wrong';
	public status = 500;
	public identifier: string = uuid();
	public code = 'UNKNOWN_ERROR';
	public extraInfo: unknown = null;

	constructor(err?: Error) {
		Error.captureStackTrace(this, this.constructor);

		if (err) {
			this.title = err.message;
		}
	}
}

export class CustomValidationError extends CustomError {
	public title = 'Invalid object';
	public code = 'BAD_REQUEST';
	public status = 400;

	constructor(err: unknown) {
		super();

		this.extraInfo = err;
	}
}


// Map all errors to Digipolis response
@Catch()
export class ErrorFilter implements ExceptionFilter {
	private options: ICustomFilterOptions;

	constructor ({ debug = false } = {}) {
		this.options = { debug: debug };
	}

	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();

		const { status, error } = obfuscateError(exception, this.options.debug);

		return response.status(status).json(error);
	}
}

export function obfuscateError(exception: CustomError | CustomValidationError | unknown, debug: boolean): {status: number, error: CustomError} {
	let status: number;
	let error: CustomError;

	if (exception instanceof HttpException) {
		status = exception.getStatus();
		error = {
			identifier: uuid(),
			status,
			title: exception.message,
			type: 'HTTPError',
			code: exception.constructor.name,
			extraInfo: debug ? omit(['statusCode', 'error'])(exception.getResponse()) : null
		};
	} else if (exception instanceof HTTPError) {
		status = exception?.response?.statusCode || 500;
		error = {
			identifier: uuid(),
			status,
			title: exception?.message,
			type: exception?.name,
			code: exception?.name,
			extraInfo: {
				...(debug ? { stack: exception?.stack } : {}),
				body: exception?.response?.body
			}
		};
	} else if (
		exception instanceof AxiosError
		|| exception?.constructor?.name === 'AxiosError'
		|| exception instanceof AxiosGotError
		|| exception?.constructor?.name === 'AxiosGotError'
	) {
		status = (exception as AxiosGotError)?.status || (exception as AxiosGotError)?.response?.status || 500;
		error = {
			identifier: uuid(),
			status,
			title: (exception as AxiosGotError)?.message,
			type: (exception as AxiosGotError)?.name,
			code: (exception as AxiosGotError)?.code,
			extraInfo: {
				...(debug ? { stack: (exception as AxiosGotError)?.stack } : {}),
				body: (exception as AxiosGotError)?.response?.data
			}
		};
	} else {
		status = (exception as CustomError)?.status || 500;
		error = {
			identifier: uuid(),
			status,
			title: (exception as CustomError)?.title || 'Onbekende error',
			type: (exception as CustomError)?.type || 'UNKNOWN_ERROR',
			code: String((exception as CustomError)?.status) || 'UNKNOWN_ERROR',
			extraInfo: (exception as CustomError)?.extraInfo
				|| (debug
					? exception
					: exception?.toString
						? exception?.toString()
						: null
				)
		};
	}

	if (!error.extraInfo || isEmpty(error.extraInfo)) {
		delete error.extraInfo;
	}

	{return { status, error };}
}

