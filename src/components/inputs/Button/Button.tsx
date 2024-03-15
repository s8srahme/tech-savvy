import { FC } from "react";

import { EastOutlined as EastIcon } from "@mui/icons-material";

import { MemoizedRouterLink } from "@/components/navigation";

import { StyledButton, StyledButtonLink } from "./Button.styles";
import { ButtonLinkProps, ButtonProps } from "./Button.types";

/**
 * M U I  P A L E T T E  U S A G E
 *
 * The default MUI theme has several built-in palettes (e.g. primary, secondary, success, warning). By setting
 * color prop to primary in your Button component, you tell MUI to apply the main value from theme.palette.primary
 * object to its background color and contrastText value to its foreground (text color), which also depends on light
 * or dark variants of your theme.
 *
 *
 * I N L I N I N G  &  C A V E A T
 *
 * Using an inline function as an argument for the component prop may result in unexpected unmounting, since a new
 * component is passed every time React renders. The solution is to avoid inline functions and pass a static component
 * (memoized) to the component prop instead.
 */

export const Button: FC<ButtonProps> = ({ variant = "text", children, ...rest }) => (
	<StyledButton
		color="primary"
		variant={variant}
		size="small"
		disableRipple
		{...(variant === "contained" && { endIcon: <EastIcon /> })}
		{...rest}
	>
		{children}
	</StyledButton>
);

export const ButtonLink: FC<ButtonLinkProps> = ({ variant = "text", children, ...rest }) => (
	<StyledButtonLink
		component={MemoizedRouterLink}
		color="primary"
		variant={variant}
		size="small"
		disableRipple
		{...(variant === "contained" && { endIcon: <EastIcon /> })}
		{...rest}
	>
		{children}
	</StyledButtonLink>
);
