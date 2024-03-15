import { SerializedStyles, css } from "@emotion/react";
import { Button as MuiButton, Theme, styled } from "@mui/material";

import { ButtonLinkProps, ButtonProps, ButtonVariant } from "./Button.types";

/**
 * C S S  S E L E C T O R S
 *
 * CSS selectors are used to find (or select) the HTML elements you want to style:
 * 	- Simple selectors (select elements based on name, id, class)
 *  - Combinator selectors (select elements based on a specific relationship between them)
 *  - Pseudo-class selectors (select elements based on a certain state)
 *  - Pseudo-elements selectors (select and style a part of an element)
 *  - Attribute selectors (select elements based on an attribute or attribute value)
 */

const buttonMixin = (theme: Theme, variant: ButtonVariant): SerializedStyles => css`
	min-width: auto;
	padding: ${theme.spacing(0.5, 1)};
	font-size: ${theme.typography.button.fontSize};
	text-transform: none;
	border: 1px solid transparent;
	border-radius: ${3 * theme.shape.borderRadius}px;

	&:hover {
		border-color: ${theme.palette.divider};
	}

	${variant === "contained" &&
	`
		padding: ${theme.spacing(0.5, 1)};
		box-shadow: none;
		background-color: ${theme.palette.primary.dark};
		color: ${theme.palette.common.white};
		&:hover {
			box-shadow: none;
			background-color: ${theme.palette.primary.main};
			border-color: transparent;
		}
  `}
`;

export const StyledButton = styled(MuiButton)<ButtonProps>`
	${({ theme, variant }) => buttonMixin(theme, variant as ButtonVariant)}
`;

export const StyledButtonLink = styled(MuiButton)<ButtonLinkProps>`
	${({ theme, variant }) => buttonMixin(theme, variant as ButtonVariant)}
`;
