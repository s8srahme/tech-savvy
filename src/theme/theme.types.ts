import { PaletteMode, SxProps, Theme, ThemeOptions } from "@mui/material";

import { ColorThemeKey } from "./theme.constants";

/*  T H E M E  C O N F I G  T Y P E S  */

export type ThemeConfig = {
	theme: ColorThemeKey;
	mode: PaletteMode;
};

/*  C O L O R  T H E M E  T Y P E S  */

export type ColorTheme = Record<PaletteMode, Theme>;
export type ColorThemeOptions = Record<PaletteMode, ThemeOptions>;
export type ColorThemeMapping = Record<ColorThemeKey, ColorTheme>;

/*  S T Y L E  P R O P S  T Y P E S  */

export type SxPropsMapping = Record<string, SxProps<Theme> | undefined>;
