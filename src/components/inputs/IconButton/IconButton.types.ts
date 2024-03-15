import { LinkProps } from "react-router-dom";

import { IconButtonProps as MuiIconButtonProps } from "@mui/material";

type CommonProps = {
	title: string;
};

export type IconButtonProps = Omit<MuiIconButtonProps, "title"> & CommonProps;
export type IconButtonLinkProps = Omit<MuiIconButtonProps, "title"> & CommonProps & Omit<LinkProps, "onClick">;

export type StyledIconButtonProps = MuiIconButtonProps;
export type StyledIconButtonLinkProps = Omit<LinkProps, "onClick"> & MuiIconButtonProps;
