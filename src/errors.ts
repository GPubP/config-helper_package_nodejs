import {
	ArgumentsHost,
	BadGatewayException,
	BadRequestException,
	Catch,
	ConflictException,
	ExceptionFilter,
	ForbiddenException,
	GatewayTimeoutException,
	GoneException,
	HttpException,
	InternalServerErrorException,
	MethodNotAllowedException,
	NotAcceptableException,
	NotFoundException,
	NotImplementedException,
	PayloadTooLargeException,
	RequestTimeoutException,
	ServiceUnavailableException,
	UnauthorizedException,
	UnprocessableEntityException,
	UnsupportedMediaTypeException
} from '@nestjs/common';
import { AxiosGotError } from '@wcm/axios-got-wrapper';
import { AxiosError } from 'axios';
import { HTTPError } from 'got';
import { omit } from 'ramda';
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


// Map NestJS errors to Digipolis response
@Catch(
	HttpException,
	BadRequestException,
	NotFoundException,
	UnauthorizedException,
	ForbiddenException,
	NotAcceptableException,
	RequestTimeoutException,
	ConflictException,
	GoneException,
	PayloadTooLargeException,
	UnsupportedMediaTypeException,
	UnprocessableEntityException,
	InternalServerErrorException,
	NotImplementedException,
	MethodNotAllowedException,
	BadGatewayException,
	ServiceUnavailableException,
	GatewayTimeoutException
)
export class ErrorFilter implements ExceptionFilter {
	private options: ICustomFilterOptions;

	constructor ({ debug = false } = {}) {
		this.options = { debug: debug };
	}

	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();

		const origResponse = exception.getResponse();
		const errorResponse = {
			status: exception.getStatus(),
			title: exception.message,
			type: 'HTTPError',
			identifier: uuid(),
			code: exception.constructor.name,
			extraInfo: this.options.debug ? omit(['statusCode', 'error'])(origResponse) : null
		};

		return response.status(exception.getStatus()).json(errorResponse);
	}
}

// Catch nog NestJS errors
@Catch()
export class CustomErrorFilter implements ExceptionFilter {
	private options: ICustomFilterOptions;

	constructor ({ debug = false } = {}) {
		this.options = { debug: debug };
	}

	catch(exception: CustomError | CustomValidationError | unknown, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		let errorResponse: Record<string, any> = { identifier: uuid() };

		if (exception instanceof HTTPError) {
			errorResponse = {
				...errorResponse,
				status: exception?.response?.statusCode || 500,
				title: exception?.message,
				type: exception?.name,
				code: exception?.name,
				extraInfo: {
					...(this.options.debug ? { stack: exception?.stack } : {}),
					body: exception?.response?.body
				}
			};
		} else if (
			exception instanceof AxiosError
			|| exception?.constructor?.name === 'AxiosError'
			|| exception instanceof AxiosGotError
			|| exception?.constructor?.name === 'AxiosGotError'
		) {
			errorResponse = {
				...errorResponse,
				status: (exception as AxiosGotError)?.status || (exception as AxiosGotError)?.response?.status || 500,
				title: (exception as AxiosGotError)?.message,
				type: (exception as AxiosGotError)?.name,
				code: (exception as AxiosGotError)?.code,
				extraInfo: {
					...(this.options.debug ? { stack: (exception as AxiosGotError)?.stack } : {}),
					body: (exception as AxiosGotError)?.response?.data
				}
			};
			return response.status(errorResponse.status).json(errorResponse);
		} else {
			errorResponse = {
				...errorResponse,
				status: (exception as CustomError)?.status || 500,
				title: (exception as CustomError)?.title || 'Onbekende error',
				type: (exception as CustomError)?.type || 'UKNOWN_ERROR',
				code: (exception as CustomError)?.status || 'UKNOWN_ERROR',
				extraInfo: (exception as CustomError)?.extraInfo
					|| (this.options.debug
						? exception
						: exception?.toString
							? exception?.toString()
							: null
					)
			};
		}

		response.status(errorResponse.status || 500).json(errorResponse);
	}
}


