import { Theme } from "@emotion/react";

import { SxPropsMapping } from "@/theme/theme.types";

import { StyledTypographyProps } from "./Typography.types";

// If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
//    *
//    * Note that text overflow can only happen with block or inline-block level elements
//    * (the element needs to have a width in order to overflow).

export const useStyles = (
	theme: Theme,
	{ variant = "body1", lineClamp, noWrap }: StyledTypographyProps
): SxPropsMapping => {
	return {
		typography__skeleton: {
			fontSize: theme.typography[variant].fontSize,
			transform: "scale(1, 0.75)"
		},
		/* eslint-disable prettier/prettier */
		typography__root: noWrap
			? {
					width: 1,
					overflow: "hidden",
					textOverflow: "ellipsis",
					display: "-webkit-box",
					WebkitLineClamp: lineClamp,
					WebkitBoxOrient: "vertical"
				}
			: undefined
		/* eslint-enable prettier/prettier */
	};
};
