/**
 * H T M L  A T T R I B U T E S
 *
 * aria-disabled attribute, when set to true, indicates that the element upon which it is set and all of its
 * focusable descendants are meant to be in the disabled state (not meant to be editable or otherwise operable).
 *
 * tabindex attribute allows developers to make HTML elements focusable or prevent them from being
 * sequentially focusable (usually with the Tab key, hence the name) and determine their relative ordering for
 * sequential focus navigation. It accepts an integer as a value:
 * 	- a negative value (usually -1) means that the element is not reachable via sequential keyboard navigation
 * 	- 0 means that the element should be focusable in sequential keyboard navigation, but after any positive tabindex
 * 		values
 * 	- a positive value means the element should be focusable in sequential keyboard navigation, with its order defined
 * 		by the value of the number
 *
 *
 * C A V E A T  W I T H  R E F S
 *
 * When using within a custom component as children or for the component prop, some MUI components need access to the
 * DOM node by using ref and ref forwarding (via React.forwardRef).
 *
 *
 * E V E N T  H A N D L E R S
 *
 * Event handler functions are triggered in response to interactions like input clicking, hovering, focusing,
 * etc. They can take an event parameter (an object containing information about the event occured, whose type depends
 * on the type of event being handled). React uses a SyntheticEvent wrapper instead of the native Event interface.
 * SyntheticEvent closely emulates the standard browser event but provides more consistent behavior for different web
 * browsers.
 *
 * preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly
 * handled, its default action should not be taken as it normally would be.
 */

import { FC, forwardRef, memo } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

import { StyledLink } from "./Link.styles";
import { LinkClickHandler, LinkProps } from "./Link.types";

export const MemoizedRouterLink = memo(
	forwardRef<HTMLAnchorElement, RouterLinkProps>((linkProps, ref) => <RouterLink ref={ref} {...linkProps} />)
);

export const Link: FC<LinkProps> = ({ disabled, children, ...rest }) => {
	const handleLinkClick: LinkClickHandler = (event) => {
		event.preventDefault();
	};
	return (
		<StyledLink
			component={MemoizedRouterLink}
			variant="body2"
			underline="hover"
			{...(disabled && { disabled, onClick: handleLinkClick, "aria-disabled": true, tabIndex: -1 })}
			{...rest}
		>
			{children}
		</StyledLink>
	);
};
