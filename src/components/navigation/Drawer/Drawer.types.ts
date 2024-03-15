import { MouseEventHandler } from "react";

import {
	BoxProps,
	ListItemButtonProps,
	ListItemIconProps,
	ListItemTextProps,
	DrawerProps as MuiDrawerProps
} from "@mui/material";

import { ImageMediaProps } from "@/components/data-display";
import { RelativeURL, URLMapping } from "@/utils/types";

// Common prop types

type CommonProps = {
	open: boolean;
};

// UI component prop types (to be used by corresponding files and exported by the local index.ts file)

export type DrawerProps = MuiDrawerProps & { listMappings: DrawerListMapping[] };
export type DrawerListItemHandler = MouseEventHandler<HTMLDivElement> | undefined;
export type DrawerListItemMapping = {
	id: string;
	text: string;
	icon: JSX.Element;
	urlMapping: URLMapping<"relative", RelativeURL>;
};
export type DrawerListMapping = { label: string; mappings: DrawerListItemMapping[] };

// Styled component prop types (to be imported by the corresponding *.styles.ts file only)

export type StyledDrawerProps = MuiDrawerProps & CommonProps;
export type StyledListItemButtonProps = ListItemButtonProps & CommonProps;
export type StyledListItemTextProps = ListItemTextProps & CommonProps;
export type StyledListItemIconProps = ListItemIconProps & CommonProps;
export type StyledImageProps = ImageMediaProps & CommonProps;
export type StyledDrawerHeaderProps = BoxProps & Partial<CommonProps> & { spacer?: boolean };
