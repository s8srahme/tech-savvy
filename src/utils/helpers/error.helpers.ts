/**
 * T H R O W
 *
 * throw statement throws a user-defined exception, such that execution of the current function will stop (the
 * statements after throw won't be executed) and control will be passed to the first catch block in the call stack.
 * If no catch block exists among caller functions, the program will terminate.
 *
 * throw keyword can be followed by any kind of expression (value). In practice, the exception you throw should
 * always be an Error object or an instance of an Error subclass. This is because code that catches the error may
 * expect certain properties, such as message, to be present on the caught value.
 */

export const getErrorMessage = (error: unknown): string => {
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;

	console.error(error);
	return "Unknown error";
};
