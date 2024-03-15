/**
 * You need to use module augmentation for custom colors. To add a custom color to the palette, you must add it to
 * the Palette and PaletteOptions interfaces:
 */

import { Palette as MuiPalette, PaletteOptions as MuiPaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface PaletteOverlayColorStop {
		colorStop1: string;
		colorStop2?: string;
		colorStop3?: string;
	}
	interface PaletteOverlay {
		default: PaletteOverlayColorStop;
		scrollShadow: PaletteOverlayColorStop;
		image: PaletteOverlayColorStop;
	}

	// These are the extra keys you will add to your theme palette
	export interface Palette extends MuiPalette {
		overlay: PaletteOverlay;
	}
	// You need to supply the extra keys to PaletteOptions interface too, as it is used while supplying theme to the
	// context
	export interface PaletteOptions extends MuiPaletteOptions {
		overlay?: PaletteOverlay;
	}
}
