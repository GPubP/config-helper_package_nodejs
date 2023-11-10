import type { CustomValidationError } from './errors';

export type ICustomFilterOptions = {
	debug: boolean;
}

export type ICustomValidationError = CustomValidationError;

export interface ICustomErrorDetail {
	err: string;
}

export interface ICustomError {
	type: string;
	title: string;
	status: number;
	identifier: string;
	code: string;
	extraInfo: unknown;
}
export type IBodyError = ICustomError;
export type IHeadersError = ICustomError;
export type IParamsError = ICustomError;
export type IQueryError = ICustomError;
export type IUnauthorizedError = ICustomError;
export type IForbiddenError = ICustomError;
export type INotFoundError = ICustomError;
export type IConflictError = ICustomError;
export type IInternalServerError = ICustomError;
export type IErrors =
	ICustomError |
	IBodyError |
	IHeadersError |
	IParamsError |
	IQueryError |
	IUnauthorizedError |
	IForbiddenError |
	INotFoundError |
	IConflictError |
	IInternalServerError;
