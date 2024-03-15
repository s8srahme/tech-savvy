/**
 * R E A C T  H O O K S
 *
 * Memoization is an optimization technique used to speed up computer programs by storing the results of expensive
 * function calls to pure functions and returning the cached result when the same inputs occur again.
 *
 * useCallback is a React Hook that lets you cache a function definition between re-renders until its dependencies
 * change, i.e. the returned function (a memoized callback) does not get recreated on a new memory reference every time
 * the component re-renders (unless one of the variables inside dependency array changes), while a normal function
 * inside a component does. By default, when a component re-renders, everything gets recreated including the function
 * references and React re-renders all of its children recursively. You could supplement this Hook with React.memo to
 * skip re-rendering of your child components by passing cached functions as props (ensuring referential equality
 * between renders).
 *
 * useMemo is a React Hook that lets you cache (memoize) the result of a calculation between re-renders until its
 * dependencies change. It is used just like useCallback, except to memoize non-function, referenced values such as
 * objects and arrays for the same reasons. With this Hook powered by React.memo, child components could skip
 * re-rendering if all of its props are the same as on the last render.
 *
 * React.memo lets you skip re-rendering a component when its props are unchanged by giving a memoized version of that
 * component. Your component will still re-render if its own state changes or if a context that it is using changes.
 * React.memo function will perform a shallow comparison of props, which uses the === operator to compare the previous
 * prop to the current prop. As a result, the component will still re-render when a prop is an object or a function. In
 * such cases, you can provide a custom comparison function (as a second argument to memo) which React will use to
 * compare the old and new props instead of using shallow equality.
 *
 *
 * C S S - I N - J S  T O O L S
 *
 * JSS is a CSS tool which allows you to use JavaScript to describe styles in a way that very much resembles JavaScript
 * object literal format (created by makeStyles utility).
 *
 * Emotion (default style library used in MUI) is another library designed for writing css styles with JavaScript,
 * which supports both string and object styles. There are two methods of using Emotion with React:
 * 	- css prop support:
 * 		- similar to the style prop but also has support for auto vendor-prefixing, nested selectors and media queries
 *		- accepts a function that is called with your theme as an argument allowing developers easy access to common and
 *			customizable values
 *		- you can compose styles together by interpolating value returned from css in another style block. String
 *			interpolation is the process of evaluating a string literal containing one or more placeholders, yielding a
 *			result in which the placeholders are replaced with their corresponding values (via template string literals
 *			in JS).
 *	- styled components API:
 *		- creates React components that have styles attached to them
 *		- very similar to css prop, except you call it with an html tag or React component and then pass:
 *			 - either a template literal for string styles
 *			 - or a regular function call for object styles
 *		- any interpolations or arguments that are functions in styled are called with
 *			props, which allows you to change the styles of a component based on the props
 *
 *
 * M U I  S T Y L E  P R O V I D E R S
 *
 * ThemeProvider lets you inject a fixed set of styles via theme object (created via createTheme function) so that you
 * can apply them uniformly to multiple components nested inside the ThemeProvider.
 *
 * ---
 *
 * To add global baseline styles (CSS override) for some of the HTML elements, use the GlobalStyles component. If you
 * are already using the CssBaseline component for setting baseline styles, you can also use that to add these global
 * styles as overrides.
 *
 * CssBaseline component helps to kickstart an elegant, consistent and simple baseline styles to build upon (via global
 * reset). It is very similar to normalize.css (a collection of HTML element and attribute style-normalizations). If
 * using a global reset might not be an option, it is possible to apply the baseline only to the children by using the
 * ScopedCssBaseline component (i.e. scoping on children).
 *
 * ---
 *
 * Color scheme API is for switching between light and dark modes of native components using color-scheme CSS property.
 * It can be enabled with enableColorScheme prop on CssBaseline component.
 *
 * ---
 *
 * MUI v5 has moved to a new styling API, i.e. replacement of JSS for Emotion (or styled-components as an alternative)
 * as a default styling solution. You may still continue to use JSS for adding overrides for the components (e.g.
 * makeStyles/withStyles with classes) even after migrating to v5.
 *
 * By default, most CSS-in-JS solutions (e.g. JSS, emotion) inject their styles at the bottom of the HTML <head>. As a
 * result, MUI styles might gain more specificity than any other style sheets. If you run into such a situation where
 * the default styles are simply too persistent or could not be overridden, then consider changing CSS injection order
 * using StyledEngineProvider. This will set MUI styling to be injected earlier in the load cycle and therefore default
 * styles will have less specificity than custom styles injected later. This could also eliminate the need for
 * !important rule, which overrides all previous styling rules for a specific property on an element.
 *
 *
 * S P E C I F I C I T Y
 *
 * Specificity is the algorithm used by browsers to determine which rule from competing CSS declarations (i.e. from two
 * or more CSS rules that point to the same element) gets applied to an element, which in turn, determines the property
 * value to apply to the element. To do so, it calculates the weight of a CSS selector, such that the CSS selector with
 * highest specificity priority (weight) value will win and its style declaration will be applied to the corresponding
 * HTML element. CSS selector weight categories are listed here in the order of decreasing specificity:
 * 	- Inline styles (always given the highest priority)
 * 	- IDs
 * 	- Classes, pseudo-classes and attribute selectors
 * 	- Elements and pseudo-elements
 *
 * Other important specificity rules include:
 * 	- !important keyword overrides ordering, specificity and inline styles.
 * 	- If the same rule is written twice, then the latest rule wins.
 * 	- Inheritance has the lowest priority among styling methods. If a child has a rule that is specific to it, then the
 * 		inherited value will be ignored (even though the inherited value may have an !important keyword).
 * 	- Both embedded and external style sheets follow ordering rules, where styles that are defined at the bottom will
 * 		have higher priority.
 * 	- Irrespective if your rule is at the top or bottom, specificity still has higher priority than ordering rules
 * 		and will be applied.
 *
 *
 * M E D I A  Q U E R Y
 *
 * CSS media query gives you a way to apply CSS only when the browser and device environment matches a rule that you
 * specify. Media queries are a key part of responsive web design, as they allow you to create different layouts
 * depending on the size of the viewport. They can also be used to detect other things about the environment your site
 * is running on, e.g. whether the user is using a touchscreen rather than a mouse. It consists of:
 * 	- a media type, which tells the browser what kind of media this code is for, e.g. print (if the page is printed) or
 * 		screen (when the page is loaded in a browser)
 * 	- a media expression, which is a test that must be passed for the contained CSS to be applied
 * 	- a set of CSS rules that will be applied if the test passes and the media type is correct
 *
 * useMediaQuery Hook listens for matches to any valid CSS media query and allows the rendering of components based on
 * whether the query matches or not. It accepts a media query string to the first argument of the hook.
 */

import { FC, PropsWithChildren, createContext, useCallback, useMemo } from "react";

import { CssBaseline, GlobalStyles, ThemeProvider as MuiThemeProvider, Theme, useMediaQuery } from "@mui/material";

import { COLOR_THEME_MAPPINGS, ColorThemeKey, ThemeConfig } from "@/theme";
import { useLocalStorage } from "@/utils/hooks";

export interface ThemeContextState {
	toggleColorMode: () => void;
	changeColorTheme: (key: ColorThemeKey) => void;
	config: ThemeConfig;
	theme: Theme;
}

const DEFAULT_CONFIG: ThemeConfig = {
	theme: ColorThemeKey.RUBY,
	mode: "dark"
};
// Specifying a fallback default value
const initialThemeState: ThemeContextState = {
	toggleColorMode: () => {},
	changeColorTheme: () => {},
	config: DEFAULT_CONFIG,
	theme: COLOR_THEME_MAPPINGS[ColorThemeKey.RUBY].dark
};

export const ThemeContext = createContext<ThemeContextState>(initialThemeState);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	/**
	 * Take user theme preference using prefers-color-scheme CSS media query, which is used to detect if a user has a
	 * preference for light or dark mode set through their operating system (either systemwide or for a single user
	 * agent)
	 */
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); // Matches dark mode or not?
	const [config, setConfig] = useLocalStorage<ThemeConfig>("config", {
		...DEFAULT_CONFIG,
		mode: prefersDarkMode ? "dark" : "light"
	});
	// Create theme object by picking the corresponding theme from theme mappings, based on config theme and mode values
	const theme = useMemo(() => COLOR_THEME_MAPPINGS[config.theme][config.mode], [config]);

	const toggleColorMode = useCallback(() => {
		setConfig({ ...config, mode: config.mode === "light" ? "dark" : "light" });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [config]);

	const changeColorTheme = useCallback(
		(key: ColorThemeKey) => {
			setConfig({ ...config, theme: key });
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[config]
	);

	const contextValue: ThemeContextState = useMemo(
		() => ({
			toggleColorMode,
			changeColorTheme,
			config,
			theme
		}),
		[changeColorTheme, theme, toggleColorMode, config]
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline enableColorScheme />
				<GlobalStyles styles={{}} />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};
