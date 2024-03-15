import { PaletteMode, ThemeOptions } from "@mui/material";
import { purple, red } from "@mui/material/colors";

import { composeTheme, getDefaultTheme, getSystemFontStack } from "../theme.helpers";
import type { ColorTheme } from "../theme.types";

/**
 * N A M E S P A C E
 *
 * Namespace is a context/scope for identifiers (i.e. names of types, functions, variables, etc.) to prevent collisions
 * between them. The same variable name might be required in a program in different contexts. Using namespaces will
 * isolate these contexts such that the same identifier can only be used in different namespaces and an identifier must
 * uniquely identify an entity within the same context.
 */

const initialThemeOptions: ThemeOptions = {
	typography: {
		fontFamily: getSystemFontStack(["Josefin Sans"]),
		h1: {
			lineHeight: 1.2,
			fontWeight: 500
		},
		h2: {
			fontWeight: 500
		},
		h3: {
			lineHeight: 1.132,
			fontWeight: 500
		},
		h4: {
			lineHeight: 1.167,
			fontWeight: 500
		},
		h5: {
			lineHeight: 1.2,
			fontWeight: 500
		},
		h6: {
			lineHeight: 1.235
		}
	}
};
const defaultTheme: ColorTheme = getDefaultTheme(initialThemeOptions);
const getDependentThemeOptions = (mode: PaletteMode): ThemeOptions => ({
	palette: {
		primary: defaultTheme[mode].palette.augmentColor({
			color: {
				main: red[500],
				dark: red[600]
			}
		}),
		secondary: defaultTheme[mode].palette.augmentColor({
			color: {
				main: purple[500]
			}
		})
	}
});

export const rubyTheme: ColorTheme = {
	dark: composeTheme(defaultTheme.dark, getDependentThemeOptions("dark")),
	light: composeTheme(defaultTheme.light, getDependentThemeOptions("light"))
};
