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
import { AxiosError } from 'axios';
import { HTTPError } from 'got';
import { omit } from 'ramda';
import { v4 as uuid } from 'uuid';

import { ICustomError } from './errors.types';

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
			extraInfo: omit(['statusCode', 'error'])(origResponse)
		};

		return response.status(exception.getStatus()).json(errorResponse);
	}
}

// Catch nog NestJS errors
@Catch()
export class CustomErrorFilter implements ExceptionFilter {
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
					stack: exception?.stack,
					body: exception?.response?.body
				}
			};
		} else if (exception instanceof AxiosError || exception?.constructor?.name === 'AxiosError') {
			errorResponse = {
				...errorResponse,
				status: (exception as AxiosError)?.status || (exception as AxiosError)?.response?.status || 500,
				title: (exception as AxiosError)?.message,
				type: (exception as AxiosError)?.name,
				code: (exception as AxiosError)?.code,
				extraInfo: {
					stack: (exception as AxiosError)?.stack,
					body: (exception as AxiosError)?.response?.data
				}
			};
			return response.status(errorResponse.status).json(errorResponse);
		} else {
			errorResponse = {
				...errorResponse,
				status: (exception as CustomError)?.status || 500,
				title: (exception as CustomError)?.title || 'Onbekende error',
				type: (exception as CustomError)?.type || 'Onbekende error',
				code: (exception as CustomError)?.status || 'UKNOWN_ERROR',
				extraInfo: (exception as CustomError)?.extraInfo || exception
			};
		}

		response.status(errorResponse.status).json(errorResponse);
	}
}


