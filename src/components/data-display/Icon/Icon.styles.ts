/**
 * S X  P R O P
 *
 * sx prop is a shortcut for defining custom styles that has access to the theme. You can specify any valid CSS using
 * this prop, as well as many theme-aware properties that are unique to MUI System. Not all of the values (used with
 * theme-aware properties) are valid CSS properties because some sx keys are meant to be mapped to specific properties
 * of the theme.
 *
 *
 * C A L L B A C K  V A L U E S
 *
 * Each property in the sx prop can receive a function callback as a value. This is useful when you want to use the
 * theme param for calculating a value. Alternatively, sx prop can also receive a callback when you need to get theme
 * values as param.
 *
 *
 * S I Z I N G
 *
 * Sizing properties (such as width, height, minHeight, maxHeight, minWidth and maxWidth) use a custom transform
 * function for the given value. If the value is between (0, 1], it is converted to percent; otherwise, it is directly
 * set on the CSS property:
 *
 * Width 1/4 (Equivalent to 25%)
 * Width 1 (100%)
 * Width 300 (Numbers are converted to pixel values)
 * Width '75%' (String values are used as raw CSS)
 *
 *
 * S P A C I N G  &  G R I D  P R O P E R T I E S
 *
 * Spacing properties (margin and padding) as well as CSS Grid properties (gap) multiply the values they receive by the
 * theme.spacing value (default value is 8px). Gutters are spacings between rows and columns that can be created in CSS
 * Grid layout using column-gap, row-gap or gap properties.
 */

import { SxProps } from "@mui/material/styles";

import { IconWidth } from "./Icon.constants";
import type { IconSize } from "./Icon.types";

export const useStyles = (size: IconSize): SxProps => {
	const styles = {
		"icon__root--x-small": {
			height: IconWidth.X_SMALL,
			width: IconWidth.X_SMALL
		},
		"icon__root--small": {
			height: IconWidth.SMALL,
			width: IconWidth.SMALL
		},
		"icon__root--medium": {
			height: IconWidth.MEDIUM,
			width: IconWidth.MEDIUM
		},
		"icon__root--large": {
			height: IconWidth.LARGE,
			width: IconWidth.LARGE
		},
		"icon__root--x-large": {
			height: IconWidth.X_LARGE,
			width: IconWidth.X_LARGE
		}
	};
	return styles[`icon__root--${size}`];
};
