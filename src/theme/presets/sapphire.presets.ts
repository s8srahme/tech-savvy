import { PaletteMode, ThemeOptions } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

import { composeTheme, getDefaultTheme, getSystemFontStack } from "../theme.helpers";
import type { ColorTheme } from "../theme.types";

const initialThemeOptions: ThemeOptions = {
	typography: {
		fontFamily: getSystemFontStack(["Fauna One"]), // Changing it will impact all default variants
		fontWeightLight: 400,
		fontWeightMedium: 400,

		// Each variant can have a different font
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
				main: blue[500],
				dark: blue[600]
			}
		}),
		secondary: defaultTheme[mode].palette.augmentColor({
			color: {
				main: purple[500]
			}
		})
	}
});

export const sapphireTheme: ColorTheme = {
	dark: composeTheme(defaultTheme.dark, getDependentThemeOptions("dark")),
	light: composeTheme(defaultTheme.light, getDependentThemeOptions("light"))
};
