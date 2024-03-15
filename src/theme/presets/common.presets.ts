import { ColorThemeOptions } from "../theme.types";

export const commonThemeOptions: ColorThemeOptions = {
	dark: {
		palette: {
			// Common dark colors go here
			overlay: {
				default: {
					colorStop1: "rgba(0, 0, 0, 0.2)"
				},
				scrollShadow: {
					colorStop1: "rgb(0, 0, 0, 0)", // black is displayed when all color parameters are set to 0
					colorStop2: "rgb(255, 255, 255, 0.2)" // white is displayed when all color parameters are set to 255
				},
				image: {
					colorStop1: "rgba(0, 0, 0, 0.9)",
					colorStop2: "transparent",
					colorStop3: "transparent"
				}
			}
		}
	},
	light: {
		palette: {
			// Common light colors go here
			overlay: {
				default: {
					colorStop1: "rgba(255, 255, 255, 0.3)"
				},
				scrollShadow: {
					colorStop1: "rgb(255, 255, 255, 0)",
					colorStop2: "rgb(0, 0, 0, .25)"
				},
				image: {
					colorStop1: "rgba(255, 255, 255, 0.9)",
					colorStop2: "transparent",
					colorStop3: "transparent"
				}
			}
		}
	}
};
