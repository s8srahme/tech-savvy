/**
 * T S  T Y P E S
 *
 * Among other basic types in TypeScript:
 * 	- any type is a compiler directive to disable TypeScript type system and shift the responsibility to the developer
 * 	- unknown type is used for variables whose type is not yet known and needs to be determined. You must first confirm
 * 		its type through type checking before performing most operations on it.
 * 	- never type represents values that never occur (a way to enforce that certain code paths will not be reached) or
 * 		values will never be returned/produced. It is also a bottom type, i.e. a type with no values and a subtype of
 * 		every other type.
 *	- void type defines the variable in question as holding no type at all
 *	- object type represents any type that is not a primitive type, i.e. not a number, string, boolean, bigint, symbol,
 *		null or undefined type
 *	- undefined is the default value for uninitialized variables
 *	- null is used to represent an intentional absence of any object value
 */

import { ResponseStatus } from "./axios.constants";
import type {
	ArticleRequestPayload,
	ArticleResponsePayload,
	AuthorRequestPayload,
	AuthorResponsePayload
} from "../services";

// Request param types

export type RequestParam = Record<string, number | string>;

// Response param types

export type ResponsePagination = {
	limit: number;
	page: number;
	total_pages: number;
	count: number;
};

// Response data types

export type SuccessResponseStatus = {
	status: ResponseStatus.SUCCESS;
};

export type POSTSuccessResponse = { message: string } & SuccessResponseStatus;
export type POSTResponse = POSTSuccessResponse | ErrorResponse;

export type GETSuccessResponse<T extends ResponsePayload> = { data: T } & SuccessResponseStatus;
export type GETResponse<T extends ResponsePayload> = GETSuccessResponse<T> | ErrorResponse;

export type GETManySuccessResponse<T extends ResponsePayload[]> = {
	data: T;
	pagination: ResponsePagination;
} & SuccessResponseStatus;
export type GETManyResponse<T extends ResponsePayload[]> = GETManySuccessResponse<T> | ErrorResponse;

export type PATCHSuccessResponse<T extends ResponsePayload> = GETSuccessResponse<T>;
export type PATCHResponse<T extends ResponsePayload> = GETResponse<T>;

export type DELETESuccessResponse = POSTSuccessResponse;
export type DELETEResponse = POSTResponse;

export type SuccessResponse<T extends PayloadType<ResponsePayload>> = {
	status: ResponseStatus.SUCCESS;
	message?: string;
	data?: T;
	pagination?: ResponsePagination;
};

export type ErrorResponse = {
	status: ResponseStatus.ERROR;
	message: string;
	errors?: { message: string; field: string }[];
};

// Payload types

export type PayloadType<D extends ResponsePayload | RequestPayload> = D | D[];

export type ResponsePayload = ArticleResponsePayload | AuthorResponsePayload;
export type RequestPayload = ArticleRequestPayload | AuthorRequestPayload;
