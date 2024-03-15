export type ClientErrorStatusValue = 400 | 404;
export type ClientErrorStatus = { value: ClientErrorStatusValue; text: string };
export type ClientErrorMessage = {
	title: string;
	subtitle: string;
	description: string;
};
export type ClientErrorResponse = {
	status: ClientErrorStatus;
	message: ClientErrorMessage;
};

export type Page404Props = {
	status: ClientErrorStatusValue;
};
