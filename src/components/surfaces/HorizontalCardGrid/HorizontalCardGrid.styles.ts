import { SerializedStyles, Theme, css } from "@emotion/react";
import { Box, Stack, StackProps, styled } from "@mui/material";

import { StyledHorizontalCardGridScrollShadowProps } from "./HorizontalCardGrid.types";

export const StyledHorizontalCardGrid = styled(Stack)<StackProps>`
	width: 100%;
`;

export const StyledHorizontalCardGridHeader = styled(Stack)<StackProps>`
	align-items: center;
	justify-content: space-between;
`;

export const StyledHorizontalCardGridButtonContainer = styled(Stack)<StackProps>`
	align-items: center;
`;

export const StyledHorizontalCardGridCardContainer = styled(Stack)<StackProps>`
	width: 100%;
	overflow-x: hidden;
`;

/**
 * linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors
 * along a straight line (in contrast to radial gradients which have a circular or elliptical shape), such that one
 * color that fades into another (gradual blend).
 *
 * Such gradients are created by establishing an axis called the gradient line, which can go in any direction or
 * any other angle you like. Color stops are then placed along that gradient line to create a gradient effect that runs
 * between each color. Color stops are params that tell the gradient which colors (as many colors as you wish) you want
 * to render smooth transitions among and (optionally) what position along the gradient line it should be located at.
 * Pure colors (as specified) are located in the gradient line precisely at color stop positions.
 *
 * If you do not specify where the color stops go (i.e. the positions), then the first and last stops will be
 * positioned at the 0% and 100% marks respectively. Any other stops will be positioned halfway between the previous
 * stop and the next stop (unless you specify otherwise), and colors will spread evenly across the box.
 */

const showStartMixin = (theme: Theme): SerializedStyles => {
	return css`
		::before {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			z-index: 1;
			width: 15px;
			content: "";
			background-image: linear-gradient(
				to left,
				${theme.palette.overlay.scrollShadow.colorStop1},
				${theme.palette.overlay.scrollShadow.colorStop2}
			);
		}
	`;
};
const showEndMixin = (theme: Theme): SerializedStyles => {
	return css`
		::after {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			width: 15px;
			content: "";
			background-image: linear-gradient(
				to right,
				${theme.palette.overlay.scrollShadow.colorStop1},
				${theme.palette.overlay.scrollShadow.colorStop2}
			);
		}
	`;
};

export const StyledHorizontalCardGridScrollShadow = styled(Box, {
	shouldForwardProp: (prop: string) => prop !== "start" && prop !== "end"
})<StyledHorizontalCardGridScrollShadowProps>`
	position: relative;
	width: 100%;
	${({ theme, start }) => start && showStartMixin(theme)}
	${({ theme, end }) => end && showEndMixin(theme)}
`;
