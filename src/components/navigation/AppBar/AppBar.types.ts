import { AppBarProps as MuiAppBarProps } from "@mui/material";

import type { ButtonVariant } from "@/components/inputs";
import { AboutRoutePath } from "@/router/about/about.routes";
import type { RootURLMapping } from "@/utils/types";

export type AppBarProps = MuiAppBarProps & { linkMappings: AppBarLinkMapping[] };
export type AppBarLinkMapping = {
	variant?: ButtonVariant;
	text: string;
	urlMapping: RootURLMapping<AboutRoutePath>;
};

export type StyledAppBarProps = MuiAppBarProps & { open: boolean };
