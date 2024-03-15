import { StyledOptions } from "@emotion/styled";
import { AppBar, styled } from "@mui/material";

import { StyledAppBarProps } from "./AppBar.types";
import { DrawerWidth } from "../Drawer/Drawer.constants";

/**
 * styled is as a replacement for emotion's styled utility, whose arguments are as follows:
 * 	- Component: the component that will be wrapped
 * 	- options (optional):
 *    	- options.shouldForwardProp: configures which props should be forwarded to DOM (for filtering out props that
 *				are invalid html attributes)
 *	- styles: a styles object or a function returning a styles object. The function receives the theme and
 *		component's props in an object which is its single argument.
 *
 * theme.transitions.create helper allow you to create custom CSS transitions, so you can customize the durations,
 *	easings and delay for one or a list of CSS properties.
 */

const options: StyledOptions = { shouldForwardProp: (prop: string) => prop !== "open" };

// You can specify the props type to styled utility immediately before the call with template literal for string styles
// or regular function for object styles
export const StyledAppBar = styled(AppBar, options)<StyledAppBarProps>`
	z-index: ${({ theme }) => theme.zIndex.drawer + 1};
	width: ${({ open }) => `calc(100% - ${open ? DrawerWidth.EXPAND : DrawerWidth.COLLAPSE}px)`};
	margin-left: ${({ open }) => (open ? DrawerWidth.EXPAND : DrawerWidth.COLLAPSE)};
	background-color: ${({ theme }) => theme.palette.background.paper};
	background-image: none;
	box-shadow: none;
	transition: ${({ theme, open }) =>
		theme.transitions.create(["width", "margin"], {
			duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
		})};
`;

// margin-right: 5, // Same as theme.spacing(5) = 5 * default scaling factor (i.e. 8px) = 40px
// Object styles can also be used with styled utility. To do so, you write css properties in camelCase instead of
// writing them in kebab-case.
// export const StyledIconButton = styled(IconButton, options)<StyledIconButtonProps>(
// 	{
// 		margin: theme.spacing(0, 2),
// 		borderRadius: 2
// 	},
// 	({ open }) => ({
// 		...(open && { display: "none" })
// 	})
// );
