/*
 * F U N C T I O N  C O M P O N E N T  (F C)
 *
 * React.FC is:
 *	- a data type used to represent/render a React component function (a function that returns a JSX element)
 * 	- explicit about return type
 *	- gives an implicit definition of children even if not needed (i.e. if no children is passed to your FC and you put
 *		children under it, they won't render but will be typed correctly). NOTE: In recent versions, this has been
 *		removed and now you have to specify it explicitly depending on your need.
 *	- provides typechecking, i.e. ensures that correct type of properties are being passed by using an interface
 *	- supports autocomplete for static properties (i.e. value of these variables will be shared among all the objects
 *		of the class; when one of the object changes its value, that value will be the latest value available for other
 *		objects) such as displayName, propTypes and defaultProps
 *	- does not support generics
 *	- help with code clarity and maintainability
 *
 * Regular components split the UI into independent, reusable pieces (each piece in isolation, i.e. you can pass and
 * see their different states (using third-party tools) without starting a backend server or creating an account in
 * your app). They serve the same purpose as TS functions but work in isolation and return HTML.
 *
 * Pure components aim to minimize unnecessary re-rendering. They do so by performing a shallow comparison of their
 * previous and current state and props. If there are no differences, the component assumes that there is no need to
 * re-render, resulting in improved performance.
 *
 * Components come in two types:
 * 	- Class components:
 * 			- extends Component class in React to inherit its functions
 * 			- requires a render method that returns HTML
 * 			- implement certain methods that will execute during the component's lifecycle
 *			- accept props with this.props and state with this.state
 *			- can be a pure component if it extends PureComponent instead of just Component
 *			- are old way of writing components in React (still supported but might be phased out in future)
 *	- Function components:
 *			- behaves much the same way as a Class component
 *			- render the view by returning data in JSX form
 *			- allow using hooks to manage state, lifecycle, references, etc.
 *			- takes props as a function argument
 *			- can be a pure component by using React.memo
 *			-	written using less code and easier to understand (with either arrow or regular function keyword)
 */

import { memo } from "react";

import { DarkModeOutlined as DarkModeIcon, LightModeOutlined as LightModeIcon } from "@mui/icons-material";
import { Stack, Toolbar } from "@mui/material";

import { Icon } from "@/components/data-display";
import { ButtonLink, IconButton } from "@/components/inputs";
import { AboutRoutePath } from "@/router/about/about.routes";
import { getURLString, isValidURL } from "@/utils/helpers";
import { useLayout, useTheme } from "@/utils/hooks";

import { StyledAppBar } from "./AppBar.styles";
import { AppBarProps } from "./AppBar.types";

/**
 * In cases where an interactive element has no accessible name or an accessible name that is not accurate and there is
 * no content visible in the DOM that can be associated with the object to give it meaning, the aria-label attribute
 * can be used to define a string that labels the interactive element on which it is set (provides the element with
 * its accessible name).
 *
 * Material UI provides icon support in three ways:
 * 	- With Material SVG icons (via icons-material package) exported as React components (by using MUI SvgIcon component
 * 		to render the SVG path for each icon) and they each come in five different themes
 *  - With SvgIcon component as a wrapper for custom SVG icons, such that <svg> element is supported as a child (i.e.
 * 		you can copy and paste your SVG directly under SvgIcon component)
 * 	- With Icon component as a React wrapper for custom icon fonts that supports ligatures (two or more letters are
 * 		joined to form a single glyph). As a prerequisite, you must set up icon fonts for use through Google Fonts (for
 * 		example) in your project first.
 *
 * In CSS, em is a font-relative unit, in which the font size is relative to the parent element's font size, not the
 * root element's. As such they can cascade and cause unexpected results. If you have nested elements, you have to pay
 * a lot of attention to situations where nesting gets deeper. em is not just for font-size and you can also use it to
 * set the values of properties like margin, padding, width, height and line-height of an element.
 *
 * rem (stands for root em) is another relative unit in which all values are relative to font size of topmost parent
 * (the html or root element - a reference point), i.e. 1rem equals font size of the html element, which for most
 * browsers has a default value of 16px. Using rem can help ensure consistency of font size and spacing throughout your
 * UI because it allows you to use the 62.5% solution (i.e. font sizes in px are 10 times their rem values) which makes
 * calculation much easier:
 *
 * 	html { font-size: 62.5%; } // 62.5% of default value (i.e. 16px) = 10px
 * 	body { font-size: 1.4rem; } // 1.4 times its root element value (i.e. 10px) = 14px
 * 	h1 { font-size: 2.4rem; } // 24px
 *
 * px (stands for pixels) is an absolute measurement unit, such that the element's size remains constant regardless of
 * the size of the screen. So using relative units like em and rem instead are considered good practice as screens
 * come in different sizes nowadays.
 *
 * A typeface is a set of distinct glyphs that characterize a particular style of lettering, e.g. Times New Roman,
 * Helvetica, Arial, etc. are not actually fonts - they are typefaces. This may include the presence (or lack) of a
 * serif and other aesthetic embellishments. There are several classifications of typeface (generic family names):
 * 	- Serif typefaces: these are typefaces that include serifs, which are slight projections added to the ends of a
 * 		stroke, e.g. Times New Roman
 * 	- Sans-serif typefaces: these are styles without the tails at the end of a stroke, e.g. Futura
 * 	- Script typefaces: these are designed to look like cursive handwriting, e.g. Clattering
 * 	- etc.
 *
 * Fonts are different variations (like size, weight, etc.) within a typeface. Fonts within the same typeface can vary
 * from one another by:
 * 	- Size: titles and headings tend to be larger than body text. Technically, that makes them different fonts, even
 * 		when the typeface is identical, e.g. Garamond 12 pt and Garamond 16 pt are two distinct fonts
 *	- Weight: fonts can be different by virtue of their weights, even when the typeface is the same, e.g. Helvetica
 *		Neue 12 pt Light is a different font from Helvetica Neue 12 pt Bold
 *	- Letterform width: spacing differentiates between typefaces and fonts by expanding or compressing the former
 *		(creating more or less space between each letter), e.g. compressed, condensed, narrow, normal, etc. come with
 *		different widths to indicate different fonts
 *	- Italics: characters that are italicized represent different fonts
 *
 * The term container is generally used for structures that can contain more than one element, e.g. children of a flex
 * container (i.e. flex items) are laid out using the flex layout model. A wrapper is something that wraps around a
 * single object to provide more functionalities and interfaces to it, e.g. withLoading HOC takes a component
 * WrappedComponent as input and returns a new component WithLoading that adds a loading prop to the WrappedComponent.
 */

export const AppBar = memo<AppBarProps>(({ linkMappings }) => {
	const { toggleColorMode, theme } = useTheme();
	const { isDrawerOpen } = useLayout();
	return (
		<StyledAppBar position="fixed" open={isDrawerOpen}>
			<Toolbar
				sx={{
					justifyContent: "space-between",
					borderBottom: `1px solid ${theme.palette.divider}`
				}}
			>
				<Stack direction="row" spacing={1}>
					{linkMappings.map(({ variant, text, urlMapping }) => (
						<ButtonLink
							key={text}
							disabled={!isValidURL<AboutRoutePath>(urlMapping)}
							to={getURLString(urlMapping)}
							{...(variant && { variant })}
						>
							{text}
						</ButtonLink>
					))}
				</Stack>
				<Stack direction="row" spacing={1}>
					<IconButton
						sx={{ color: "text.primary" }}
						title="Toggle color mode"
						aria-label="Toggle color mode"
						onClick={toggleColorMode}
					>
						{theme.palette.mode === "dark" ? (
							<Icon size="x-small" IconComponent={LightModeIcon} />
						) : (
							<Icon size="x-small" IconComponent={DarkModeIcon} />
						)}
					</IconButton>
				</Stack>
			</Toolbar>
		</StyledAppBar>
	);
});
