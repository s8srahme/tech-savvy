import { memo } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

import {
	DragHandleRounded as DragHandleIcon,
	EastOutlined as EastIcon,
	WestOutlined as WestIcon
} from "@mui/icons-material";
import { Divider, List, ListItem } from "@mui/material";

import { darkModeLogo, lightModeLogo } from "@/assets/images";
import { Icon } from "@/components/data-display";
import { ButtonClickHandler, IconButton } from "@/components/inputs";
import { replaceDynamicSegmentPattern } from "@/router/router.helpers";
import { useLayout, useTheme } from "@/utils/hooks";
import { RelativeURL, URLMapping } from "@/utils/types";

import { DrawerWidth } from "./Drawer.constants";
import {
	StyledDrawer,
	StyledDrawerHeader,
	StyledImageMedia,
	StyledListContainer,
	StyledListItemButton,
	StyledListItemIcon,
	StyledListItemText
} from "./Drawer.styles";
import { DrawerListItemHandler, DrawerProps } from "./Drawer.types";

/**
 * useLocation hook returns the current location object (an entry in the history stack), which contains information 
 * about the current URL path (pathname, search string and hash values), as well as possibly some arbitrary state and a
 * key.

 * matchPath utility matches a route path pattern on some/whole portion of a URL pathname and returns information about
 * the match. This is useful whenever you need to manually run the router's matching algorithm to determine if a route 
 * path matches or not. It returns null if the pattern does not match the given pathname.
 * 
 * Path pattern options looks like:
 * 	- path: a string to match against a URL pathname (may contain :id style segments to indicate placeholders for 
 * 		dynamic parameters or end with /* to indicate matching the rest of the URL pathname)
 *  - caseSensitive: should be true if the static portions of the path should be matched in the same case
 *  - end: should be true if this pattern should match the entire URL pathname
 * 
 * Match return value (path match object) contains information about how the path pattern argument matched on a URL
 * pathname:
 * 	- params: names and values of dynamic parameters in the URL
 *  - pathname: portion of the URL pathname that was matched
 *  - pathnameBase: portion of the URL pathname that was matched before child routes
 *  - pattern: path pattern that was used to match
 * 
 * useMatch hook uses this function internally to match a route path relative to the current location, i.e. returns a
 * path match object if the given pattern matches the current URL or null. This is useful for components that need to 
 * know active state.
 * 
 * You can use the index as a key if your React component list satisfies certain conditions:
 *  - items in your list do not have a unique ID (if items do have a unique ID, always go with that)
 *  - list is a static list and will not change, e.g. you are never adding items to the list or removing items from it
 * 	- list will never be reordered or filtered, e.g. sorting based on a column value or filtering based on user inputs
 * 
 * replace method of String values returns a new string with one, some or all matches of a pattern replaced by a 
 * replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for 
 * each match. If pattern is a string, only the first occurrence (matched substring) will be replaced. If the pattern 
 * is an empty string, the replacement is prepended to the start of the string. To perform a global search and 
 * replace, use a regular expression with the g flag.
 * 
 * Every value in JavaScript can be translated into a boolean, i.e. true or false. Values that translate to true are 
 * truthy (e.g. true, {}, "false") and values that translate to false are falsy (e.g. false, undefined, null, empty 
 * string, zero, NaN). There are two ways to make that translation:
 * 	- double bang/negation: When you do !!value, the second logical NOT operator (!) translates truthy values to false
 * 		and falsy values to true (converts any data type to boolean, but gives inverted value). Then the first (!) 
 * 		operator flips that returned value (undoing the inversion).
 * 	- global Boolean function: When Boolean(value) is called as a function (without new), it coerces (effectively 
 * 		forced) the parameter to a boolean primitive. The term coercion is used when a variable of one type is 
 * 		automatically changed by the compiler to another type. If done correctly, it does not affect the value of the 
 * 		variable, only how it is represented.
 * 
 * The conversions above are described internally by the abstract operation ToBoolean which converts its argument to 
 * a value of type Boolean. In certain operations such as if/else statements, JavaScript will automatically convert a
 * value into true or false by using these truthy/falsy rules (type coercion).
 */

export const Drawer = memo<DrawerProps>(({ listMappings }) => {
	const { isDrawerOpen, setIsDrawerOpen } = useLayout();
	const { theme, config: themeConfig } = useTheme();
	const navigate = useNavigate();
	const location = useLocation();
	// const params = useParams();

	const handleDrawerButtonClick: ButtonClickHandler = () => setIsDrawerOpen(!isDrawerOpen);
	const getListItemClickHandler = (urlMapping: URLMapping<"relative", RelativeURL>): DrawerListItemHandler => {
		const routePath = replaceDynamicSegmentPattern(urlMapping);
		const handleListItemClick: DrawerListItemHandler = () => navigate(routePath);
		return handleListItemClick;
	};
	const isListItemActive = (urlMapping: URLMapping<"relative", RelativeURL>) => {
		const routePath = replaceDynamicSegmentPattern(urlMapping);
		return Boolean(matchPath({ path: `${routePath}/*` }, location.pathname));
	};

	/**
	 * theme.direction gives text direction, i.e. right-to-left (RTL) to support languages such as Arabic, Persian,
	 * Hebrew or left-to-right (LTR) for others
	 */

	return (
		<StyledDrawer variant="permanent" open={isDrawerOpen}>
			<StyledDrawerHeader open={isDrawerOpen}>
				{isDrawerOpen ? (
					<>
						<StyledImageMedia
							dimension={{ type: "width", value: DrawerWidth.EXPAND * 0.5 }}
							src={themeConfig.mode === "dark" ? darkModeLogo : lightModeLogo}
							alt={`${themeConfig.mode} mode logo`}
							open={isDrawerOpen}
							fallbackSize="x-small"
						/>
						<IconButton
							sx={{ color: "text.primary" }}
							title="Close drawer"
							aria-label="Close drawer"
							onClick={handleDrawerButtonClick}
						>
							{theme.direction === "rtl" ? (
								<Icon IconComponent={EastIcon} size="x-small" />
							) : (
								<Icon IconComponent={WestIcon} size="x-small" />
							)}
						</IconButton>
					</>
				) : (
					<IconButton
						sx={{ color: "text.primary" }}
						title="Open drawer"
						aria-label="Open drawer"
						onClick={handleDrawerButtonClick}
					>
						<Icon IconComponent={DragHandleIcon} size="x-small" />
					</IconButton>
				)}
			</StyledDrawerHeader>
			<StyledListContainer>
				{listMappings.map(({ label, mappings }) => (
					<List key={label} sx={{ mx: 2, "&:first-of-type": { mt: 3 } }} disablePadding>
						{mappings.map(({ urlMapping, text, icon }) => {
							const active = isListItemActive(urlMapping);
							return (
								<ListItem key={text} disablePadding>
									<StyledListItemButton
										selected={active}
										onClick={getListItemClickHandler(urlMapping)}
										disableRipple
										open={isDrawerOpen}
									>
										<StyledListItemIcon
											open={isDrawerOpen}
											sx={{
												...(active && {
													color: "primary.light"
												})
											}}
										>
											{icon}
										</StyledListItemIcon>
										<StyledListItemText
											sx={{
												...(active && {
													color: "primary.light"
												})
											}}
											primary={text}
											open={isDrawerOpen}
										/>
									</StyledListItemButton>
								</ListItem>
							);
						})}
						<Divider sx={{ my: 3, borderBottomWidth: 3 }} />
					</List>
				))}
			</StyledListContainer>
		</StyledDrawer>
	);
});
