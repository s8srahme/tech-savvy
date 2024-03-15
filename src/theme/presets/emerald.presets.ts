import { PaletteMode, ThemeOptions } from "@mui/material";
import { green, purple } from "@mui/material/colors";

import { composeTheme, getDefaultTheme, getSystemFontStack } from "../theme.helpers";
import type { ColorTheme } from "../theme.types";

/**
 * M U I  T H E M E
 *
 * Theme object specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity
 * of ink elements and much more. It lets you apply a consistent tone to your app and customize all design aspects of
 * your project in order to meet the specific needs of your business/brand.
 *
 *
 * M U I  T H E M E  P A L E T T E
 *
 * Palette object (one of the theme configuration variables) contains the default set of values (tokens) for colors
 * used in interface elements to suit your brand. It comes with two palette modes: light (the default) and dark.
 *
 * Palette exposes the following default palette colors (accessible under theme.palette.*):
 *	- primary: for primary interface elements
 *	- secondary: for secondary interface elements
 *	- error: for elements that the user should be made aware of
 *	- warning: for potentially dangerous actions or important messages
 *	- info: for highlighting neutral information
 *	- success: for indicating successful completion of an action that user triggered
 *
 * Palette colors are represented by four tokens:
 *	- main: main shade of the color (applies to its background)
 *	- light: lighter shade of main
 *	- dark: darker shade of main
 *	- contrastText: text color, intended to contrast with main (applies to its foreground)
 *
 * To add custom palette colors, you must either provide the tokens manually or generate them using augmentColor
 * utility. The latter requires creating the theme in two steps and providing the main token on which the others will
 * be based on (i.e. contrastText, light and dark tokens are calculated automatically).
 *
 *
 * M U I  T H E M E  C O M P O S I T I O N
 *
 * When the value for one theme options is dependent on another theme options, you should compose the theme in two
 * steps. First, you define the basic design options and then you will use these design options to compose other
 * options (by utilizing the second argument in createTheme function).
 */

const initialThemeOptions: ThemeOptions = {
	typography: {
		fontFamily: getSystemFontStack(["Exo 2"]),
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

// Default theme customization goes here as the augmentColor function relies on it
const defaultTheme: ColorTheme = getDefaultTheme(initialThemeOptions);
const getDependentThemeOptions = (mode: PaletteMode): ThemeOptions => ({
	palette: {
		// Custom colors go here
		primary: defaultTheme[mode].palette.augmentColor({
			color: {
				main: green[500],
				dark: green[600]
				// light: will be calculated from palette.primary.main,
				// contrastText: will be calculated to contrast with palette.primary.main
			}
		}),
		secondary: defaultTheme[mode].palette.augmentColor({
			color: {
				main: purple[500]
				// light: will be calculated from palette.secondary.main,
				// dark: will be calculated from palette.secondary.main,
				// contrastText: will be calculated to contrast with palette.secondary.main
			}
		})
	}
});

export const emeraldTheme: ColorTheme = {
	dark: composeTheme(defaultTheme.dark, getDependentThemeOptions("dark")),
	light: composeTheme(defaultTheme.light, getDependentThemeOptions("light"))
};
