import { MouseEventHandler } from "react";
import { LinkProps } from "react-router-dom";

import { ButtonProps as MuiButtonProps } from "@mui/material";

export type ButtonVariant = "text" | "outlined" | "contained";
export type ButtonProps = MuiButtonProps;
export type ButtonLinkProps = MuiButtonProps & Omit<LinkProps, "onClick">;
export type ButtonClickHandler = MouseEventHandler<HTMLButtonElement> | undefined;
