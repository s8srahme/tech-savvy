import { SxProps, Theme, ThemeOptions, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { compose, mergeDeepRight } from "ramda";

import { commonThemeOptions } from "./presets/common.presets";
import { ColorTheme } from "./theme.types";

/**
 * createTheme generates a theme object based on the options received. Options argument is an incomplete theme object
 * and adds the missing parts (default values).
 *
 * If you want to just merge two themes' options (both incomplete) and create a new one based on them, you may want to
 * deep merge the two options first and then provide them as an argument to the createTheme function.
 *
 *
 * S T R I N G  O P E R A T I O N S
 *
 * split() method of String values takes a pattern, divides this string into an ordered list of substrings by searching
 * for the pattern, puts these substrings into an array and returns the array. Parameter:
 * 	- separator is the pattern describing where each split should occur (can be undefined, a string or a regular
 * 		expression). Omitting separator or passing undefined causes the method to return an array with the calling
 * 		string as a single element.
 * 	- limit is a non-negative integer specifying a limit on the number of substrings to be included in the array
 *
 * charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit value
 * of the character at the specified index. If index is out of range (i.e. not between 0 and str.length - 1), then
 * charCodeAt() returns NaN.
 */

export const getDefaultTheme = (initialThemeOptions: ThemeOptions): ColorTheme => {
	const darkColorTheme: Theme = mergeDeepRight(
		createTheme({
			palette: {
				// Setting the mode this way gives you only the default dark palette values
				mode: "dark"
			},
			...initialThemeOptions
		}),
		commonThemeOptions.dark
	) as Theme;
	const lightColorTheme: Theme = mergeDeepRight(
		createTheme({
			palette: {
				// Gives you only the default light palette values
				mode: "light"
			},
			...initialThemeOptions
		}),
		commonThemeOptions.light
	) as Theme;

	return {
		dark: darkColorTheme,
		light: lightColorTheme
	};
};

/**
 * responsiveFontSizes helper makes Typography font sizes in the theme responsive, i.e. font size changes as the width
 * crosses the different breakpoints.
 */
export const composeTheme = compose(responsiveFontSizes, createTheme);

export const getSystemFontStack = (fontStack?: string[]) => {
	// If the font name has more than one word, it must be in quotation marks
	const systemFontStack = [
		"-apple-system",
		"BlinkMacSystemFont",
		"'Segoe UI'",
		"Roboto",
		"Oxygen",
		"Ubuntu",
		"Cantarell",
		"'Fira Sans'",
		"'Droid Sans'",
		"'Helvetica Neue'",
		"sans-serif"
	];

	const preferredFontFamilyNames: string[] = [];
	fontStack?.forEach((fontFamilyName) => {
		if (fontFamilyName && fontFamilyName.split(" ").length > 1) preferredFontFamilyNames.push(`'${fontFamilyName}'`);
		else if (fontFamilyName) preferredFontFamilyNames.push(fontFamilyName);
	});

	return [...preferredFontFamilyNames, ...systemFontStack].join(", ");
};

/**
 * SxProps array type (each index can be an SxProps object or a callback) is useful when you want to partially
 * override some styles in the former index. The higher index SxProps object of the array has higher specificity. If
 * you want to receive the sx prop from one MUI component and pass it down to another, then use spread syntax in
 * array literals.
 */

export const mergeSxProps = (
	childProps: SxProps<Theme> | undefined,
	parentProps: SxProps<Theme> | undefined
): SxProps<Theme> => {
	// You cannot spread directly because SxProps type can be an array
	return [childProps, ...(Array.isArray(parentProps) ? parentProps : [parentProps])];
};
