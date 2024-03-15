/**
 * Among basic types in TypeScript:
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

// Request param types

type RequestParam = Record<string, number | string>;

// Response param types

enum ResponseStatus {
	SUCCESS = "success",
	ERROR = "error"
}
type ResponsePagination = {
	limit: number;
	page: number;
	total_pages: number;
	count: number;
};

// Response data types

type SuccessResponseStatus = {
	status: ResponseStatus.SUCCESS;
};

type POSTSuccessResponse = { message: string } & SuccessResponseStatus;
type POSTResponse = POSTSuccessResponse | ErrorResponse;

type GETSuccessResponse<T extends ResponsePayload> = { data: T } & SuccessResponseStatus;
type GETResponse<T extends ResponsePayload> = GETSuccessResponse<T> | ErrorResponse;

type GETManySuccessResponse<T extends ResponsePayload[]> = {
	data: T;
	pagination: ResponsePagination;
} & SuccessResponseStatus;
type GETManyResponse<T extends ResponsePayload[]> = GETManySuccessResponse<T> | ErrorResponse;

type PATCHSuccessResponse<T extends ResponsePayload> = GETSuccessResponse<T>;
type PATCHResponse<T extends ResponsePayload> = GETResponse<T>;

type DELETESuccessResponse = POSTSuccessResponse;
type DELETEResponse = POSTResponse;

type SuccessResponse<T extends PayloadType<ResponsePayload>> = {
	status: ResponseStatus.SUCCESS;
	message?: string;
	data?: T;
	pagination?: ResponsePagination;
};

type ErrorResponse = {
	status: ResponseStatus.ERROR;
	message: string;
	errors?: { message: string; field: string }[];
};

// Payload types

type PayloadType<D extends ResponsePayload | RequestPayload> = D | D[];

type ResponsePayload = UserResponsePayload;
type RequestPayload = UserRequestPayload;
