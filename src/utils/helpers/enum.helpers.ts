/**
 * extends Enum<E, K> is generic type constraint and it allows you to specify that your generic type must be assignable
 * to the type that comes after the extends k keyof will create a union type with the keys from an object type.
 *
 * typeof operator returns a string indicating the type of the operand's value. keyof keyword works differently for
 * enum than typical objects. You have to use keyof typeof to get a type that represents all enum keys as strings,
 * typeof to get a type that represents a particular enum and template string to create a string union from enum values.
 *
 * Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for
 * properties created via simple assignment or via a property initializer. They can be viewed if iterated using the
 * for...in loop or Object.keys() method. Ownership of properties is determined by whether the property belongs to the
 * object directly and not to its prototype chain.
 *
 * in operator returns true if the specified property (string or symbol) is in the specified object or its prototype
 * chain.
 *
 * for...in statement iterates over all enumerable string properties of an object and those the object inherits from
 * its prototype chain.
 *
 * Object.entries() static method returns an array of key-value pairs from a given object (using its own, enumerable
 * string-keyed properties). Each key-value pair is an array with two elements: the first element is the property key
 * (which is always a string) and the second element is the property value.
 *
 * Object.keys() static method returns an array of property names from a given object (using its own, enumerable
 * string-keyed properties).
 *
 * Object.values() static method returns an array of property values from a given object (using its own, enumerable
 * string-keyed properties).
 */

/**
 * NOTE: - Generic types E must be assignable only to enum types
 * 			 - Generic types K represent union types with all enum keys as strings
 */

export const getEnumObjectWithInitialValue = <E, K extends string, V>(
	enumObject: EnumObject<E, K>,
	initialValue: V
): Record<K, V> => {
	const enumMemberKeys = Object.keys(enumObject) as K[];
	const enumObjectWithInitialValue = enumMemberKeys.reduce(
		(accumulator, key) => {
			accumulator[key] = initialValue;
			return accumulator;
		},
		{} as Record<K, V>
	);
	return enumObjectWithInitialValue;
};

export const isValueInEnum = <E, K extends string, V extends number | string>(
	enumObject: EnumObject<E, K>,
	value: V
): boolean => Object.values(enumObject).includes(value);

export const isKeyInEnum = <E, K extends string>(enumObject: EnumObject<E, K>, key: string): boolean =>
	Object.keys(enumObject).includes(key);
