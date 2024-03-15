import { MouseEventHandler } from "react";
import { LinkProps as RouterLinkProps } from "react-router-dom";

import { LinkProps as MuiLinkProps } from "@mui/material";

export type LinkProps = Omit<MuiLinkProps, "to"> & RouterLinkProps & { disabled?: boolean };
export type LinkClickHandler = MouseEventHandler<HTMLAnchorElement> | undefined;

export type StyledLinkProps = LinkProps;
