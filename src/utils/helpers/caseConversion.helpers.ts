import camelCase from "voca/camel_case";

/**
 * Formats a variable name into an object key.
 *
 * @param objectWithVariable An object whose only key must be of same name as that of the variable whose name is to be
 * formatted.
 * @returns A string in camel case, suitable to be used as an object key.
 */
export const makeObjectKeyFromVariableName = <T>(objectWithVariableNameKey: Record<string, T>): string => {
	return camelCase(Object.keys(objectWithVariableNameKey)[0]);
};
