import { StyledOptions } from "@emotion/styled";
import {
	Box,
	BoxProps,
	CSSObject,
	Drawer,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Theme,
	styled
} from "@mui/material";

import { ImageMedia } from "@/components/data-display";

import { DrawerWidth } from "./Drawer.constants";
import {
	StyledDrawerHeaderProps,
	StyledDrawerProps,
	StyledImageProps,
	StyledListItemButtonProps,
	StyledListItemIconProps,
	StyledListItemTextProps
} from "./Drawer.types";

const options: StyledOptions = { shouldForwardProp: (prop: string) => prop !== "open" };

/**
 * Mixin directive holds CSS code (one or more declarations, with each declaration including a CSS property name and
 * value) that is to be reused.
 */

const openedMixin = (theme: Theme): CSSObject => ({
	width: DrawerWidth.EXPAND,
	transition: theme.transitions.create("width", {
		duration: theme.transitions.duration.enteringScreen
	})
});

const closedMixin = (theme: Theme): CSSObject => ({
	width: DrawerWidth.COLLAPSE,
	transition: theme.transitions.create("width", {
		duration: theme.transitions.duration.leavingScreen
	})
});

export const StyledImageMedia = styled(
	ImageMedia,
	options
)<StyledImageProps>(({ open, theme }) => ({
	opacity: open ? 1 : 0,
	transition: theme.transitions.create(["opacity"], {
		duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
	})
}));

export const StyledListContainer = styled(Box)<BoxProps>(() => ({
	overflowY: "scroll",
	overflowX: "hidden"
}));

export const StyledListItemText = styled(
	ListItemText,
	options
)<StyledListItemTextProps>(({ open, theme }) => ({
	textTransform: "capitalize",
	opacity: open ? 1 : 0,
	transition: theme.transitions.create(["opacity"], {
		duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
	})
}));

export const StyledListItemIcon = styled(
	ListItemIcon,
	options
)<StyledListItemIconProps>(({ open, theme }) => ({
	minWidth: 0,
	marginRight: open ? theme.spacing(2.5) : 0,
	color: theme.palette.text.primary,
	transition: theme.transitions.create(["margin-right"], {
		duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
	})
}));

export const StyledListItemButton = styled(
	ListItemButton,
	options
)<StyledListItemButtonProps>(({ open, theme }) => ({
	padding: theme.spacing(0, 2.5),
	borderRadius: theme.shape.borderRadius * 2,
	border: "1px solid transparent",
	justifyContent: open ? "flex-start" : "center",
	"&:hover": {
		borderColor: theme.palette.divider
	}
}));

export const StyledDrawer = styled(
	Drawer,
	options
)<StyledDrawerProps>(({ theme, open }) => ({
	width: DrawerWidth.EXPAND,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme)
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme)
	})
}));

/**
 * spacer prop is for adding a minimum height to an element. It is useful when you use the AppBar with a content
 * section below, and you want to add a spacer at the top of your content so it does not disappear under the AppBar.
 */
export const StyledDrawerHeader = styled(Box, {
	shouldForwardProp: (prop: string) => prop !== "open" && prop !== "spacer"
})<StyledDrawerHeaderProps>(({ theme, open, spacer }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: theme.spacing(0, 2),
	width: "100%",
	...theme.mixins.toolbar,
	...(!spacer && { borderBottom: `1px solid ${theme.palette.divider}` }),
	...(!open && {
		justifyContent: "center",
		padding: 0
	})
}));
