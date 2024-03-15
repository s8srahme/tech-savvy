import { SerializedStyles, css } from "@emotion/react";
import { IconButton as MuiIconButton, Theme, styled } from "@mui/material";

import { StyledIconButtonLinkProps, StyledIconButtonProps } from "./IconButton.types";

/**
 * c s s  F U N C T I O N
 *
 * css function accepts styles using both object (or array of objects to merge multiple sets of styles together) and
 * template literal syntax. The theme object is passed as a function param (implicitly) only to the css prop. You can
 * create dynamic styles that are based on param and use them later (composing dynamic styles).
 */

const iconButtonMixin = (theme: Theme): SerializedStyles => css`
	width: 34px;
	height: 34px;
	border: 1px solid ${theme.palette.divider};
	border-radius: ${3 * theme.shape.borderRadius}px;

	&:hover {
		background-color: rgb(33 150 243 / 8%);
	}
`;

// Theme object is passed to styled() as a prop, so object destructuring is used
export const StyledIconButton = styled(MuiIconButton)<StyledIconButtonProps>`
	${({ theme }) => iconButtonMixin(theme)}
`;

export const StyledIconButtonLink = styled(MuiIconButton)<StyledIconButtonLinkProps>`
	${({ theme }) => iconButtonMixin(theme)}
`;
