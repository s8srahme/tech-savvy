import { FC } from "react";

import { Tooltip } from "@mui/material";

import { MemoizedRouterLink } from "@/components/navigation/Link/Link";

import { StyledIconButton, StyledIconButtonLink } from "./IconButton.styles";
import { IconButtonLinkProps, IconButtonProps } from "./IconButton.types";

export const IconButtonLink: FC<IconButtonLinkProps> = ({ title, children, ...rest }) => {
	return (
		<Tooltip title={title}>
			<StyledIconButtonLink component={MemoizedRouterLink} disableRipple size="small" {...rest}>
				{children}
			</StyledIconButtonLink>
		</Tooltip>
	);
};

export const IconButton: FC<IconButtonProps> = ({ title, children, ...rest }) => {
	return (
		<Tooltip title={title}>
			<StyledIconButton disableRipple size="small" {...rest}>
				{children}
			</StyledIconButton>
		</Tooltip>
	);
};
