/**
 * B E M  M E T H O D O L O G Y
 *
 * Block, Element and Modifier methodology (BEM) is a popular CSS naming convention which helps developers better
 * understand the relationship between HTML markup and CSS classes in a given project. In this methodology:
 * 	- Block is a top-level abstraction of a new component, which should be thought of as a parent.
 * 	- Elements (child items) can be placed inside and these are denoted by two underscores following the name of the
 * 		parent block.
 * 	- Modifiers can manipulate the block so that you can style that particular component without inflicting changes on
 * 		a completely unrelated module. This is done by appending two hyphens to the name of the Block.
 *
 * Here is an example of what writing in the BEM style might look like:
 * 	.btn {} // Block component class
 * 	.btn__price {} // Element class that depends upon the block
 * 	.btn--orange {}, .btn--big {} // Modifier classes that change the style of the block
 *
 * Markup might then look like this:
 * 	<a class="btn btn--big btn--orange">
 * 		<span class="btn__price">$9.99</span>
 * 		<span class="btn__text">Subscribe</span>
 * 	</a>
 */

import { Theme } from "@mui/material/styles";

import { SxPropsMapping } from "@/theme/theme.types";

import { AvatarWidth } from "./Avatar.constants";
import { StyledAvatarProps } from "./Avatar.types";

export const useStyles = (theme: Theme, { bgColor, size }: StyledAvatarProps): SxPropsMapping => {
	let width = AvatarWidth.SMALL;
	if (size === "large") width = AvatarWidth.LARGE;
	else if (size === "medium") width = AvatarWidth.MEDIUM;

	return {
		avatar__root: {
			width,
			height: width,
			bgcolor: bgColor,
			position: "relative"
		},
		avatar__typography: {
			bgcolor: theme.palette.overlay.default.colorStop1,
			position: "absolute",
			inset: 0,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: theme.palette.text.primary
		},
		avatar__skeleton: {
			width,
			height: width
		}
	};
};
