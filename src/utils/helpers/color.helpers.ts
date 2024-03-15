/**
 * B I T W I S E  O P E R A T I O N S
 *
 * JavaScript bitwise operators convert their operands to 32-bit signed integers (i.e. binary numbers of 32-bit width)
 * in two's complement format, where:
 * 	- Most significant (leftmost) bit is called the sign bit. The sign bit is always 0 for positive integers and 1
 * 		for negative integers.
 * 	- Remaining 31 bits besides the sign bit are used to represent the integer. Therefore, the maximum 32-bit integer
 * 		that can be represented is 2^31 - 1 (which is 2147483647) while the minimum integer is -2^31 (which is
 * 		-2147483648).
 * 	- For integers that fall outside the 32-bit signed integer range, the most significant bits are discarded until
 * 		the integer falls within range.
 * 	- After the bitwise operation is performed, the results are converted back to 64 bits floating point numbers.
 *
 * The 32-bit sequence representations of some important numbers:
 *					  0 => 00000000000000000000000000000000
 *					 -1 => 11111111111111111111111111111111
 *   2147483647 => 01111111111111111111111111111111
 *  -2147483648 => 10000000000000000000000000000000
 *
 * Bitwise operators include:
 * 	- AND operator (&) sets each bit to 1 if both bits are 1
 * 	- OR operator (|) sets each bit to 1 if one of two bits is 1
 * 	- XOR operator (^) sets each bit to 1 if only one of two bits is 1
 * 	- NOT operator (~) inverts all the bits
 * 	- Zero-fill left shift operator (<<) shifts left by pushing zeros in from the right and let the leftmost bits
 * 		fall off
 * 	- Signed right shift operator (>>) shifts right by pushing copies of the leftmost bit in from the left and let the
 * 		rightmost bits fall off
 * 	- Zero-fill right shift operator (>>>) shifts right by pushing zeros in from the left and let the rightmost bits
 * 		fall off
 *
 *
 * H E X A D E C I M A L  C O L O R
 *
 * Hexadecimal color values (hex codes) are used for describing the hexadecimal color syntax of an RGB color using its
 * primary color components (red, green, blue) written as hexadecimal numbers (optionally with alpha component to
 * indicate its transparency). It is typically specified with six-value syntax #RRGGBB, where RR (red), GG (green) and
 * BB (blue) are case-insensitive hexadecimal integers between 00 and ff (255), specifying the intensity of the color.
 *
 *
 * R G B A  C O L O R
 *
 * RGBA color values are an extension of RGB color values (which expresses a color according to its red, green and blue
 * components, each carrying intensity as an integer between 0 and 255, or as a percentage value between 0% and 100%)
 * along with an alpha component which represents the color's transparency as a number between 0.0 (fully transparent)
 * and 1.0 (fully opaque), or as a percentage value between 0% and 100%.
 */

export const textToHexadecimalColor = (text: string) => {
	let color = "#";
	let hash = 0;
	let iterationCount;

	/* eslint-disable no-bitwise */
	for (iterationCount = 0; iterationCount < text.length; iterationCount += 1) {
		hash = text.charCodeAt(iterationCount) + ((hash << 5) - hash);
	}
	for (iterationCount = 0; iterationCount < 3; iterationCount += 1) {
		/**
		 * Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter X, i.e. 0x
		 * or 0X.
		 */
		const value = (hash >> (iterationCount * 8)) & 0xff;
		/**
		 * Number.toString() returns a string representing the specified number value. Optional radix param is an
		 * integer in the range 2 through 36 specifying the base to use for representing the number value (defaults to
		 * 10).
		 */
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
};

export const fullNameToInitials = (fullName: string) => {
	/**
	 * NOTE: Initials refer to the first letter of each name in an individual's full name. Only first two names are
	 * 			 processed here.
	 */
	const names = fullName.split(" ");
	const firstNameInitial = names[0].length ? names[0][0] : "";
	const lastNameInitial = names.length > 1 && names[1].length ? names[1][0] : "";
	return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
};
