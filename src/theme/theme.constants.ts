/*
 * W E B  S A F E  F O N T S
 *
 * Web safe fonts are typefaces that come pre-installed across all browsers and devices. Creating a web safe font stack
 * gives you the best chance of having your text appear as intended.
 *
 *
 * F O N T  S T A C K
 *
 * Font stack is a list of font family names in the CSS font-family declaration, which are listed in order of
 * preference that you would like them to appear in case of a problem (e.g. font is not loading, not installed
 * properly). It allows you to control the look of the fonts on the web page even if a device does not have the
 * initial font available.
 *
 * You can think of it as listing similar backup font family names (fallbacks) in the font-family property. If the
 * first font family name does not work, the browser will try the next one, then the next one, and so on. Always end
 * the list with a generic family name (i.e. serif, sans-serif, cursive, fantasy, monospace).
 *
 *
 * S Y S T E M  F O N T  S T A C K
 *
 * Defaulting to the system font of a particular OS can boost performance because the browser does not have to download
 * any font files, it will use the one it already has (i.e. web safe fonts). The beauty of system fonts is that it
 * allows web content to integrate with the look and feel of the native OS.
 *
 * system-ui is a generic font family that lets text render with the default UI font on the platform on which system
 * is running. Chrome and Safari have shipped system-ui support, which can replace legacy browser support for
 * -apple-system and BlinkMacSystemFont.
 */

import { emeraldTheme } from "./presets/emerald.presets";
import { rubyTheme } from "./presets/ruby.presets";
import { sapphireTheme } from "./presets/sapphire.presets";
import type { ColorThemeMapping } from "./theme.types";

export enum ColorThemeKey {
	RUBY = "ruby",
	EMERALD = "emerald",
	SAPPHIRE = "sapphire"
}

export const COLOR_THEME_MAPPINGS: ColorThemeMapping = {
	[ColorThemeKey.RUBY]: rubyTheme,
	[ColorThemeKey.EMERALD]: emeraldTheme,
	[ColorThemeKey.SAPPHIRE]: sapphireTheme
};
