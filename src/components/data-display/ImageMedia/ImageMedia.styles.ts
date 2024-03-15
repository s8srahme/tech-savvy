import styled, { StyledOptions } from "@emotion/styled";
import { Box, CardMedia } from "@mui/material";

import { Skeleton } from "@/components/feedback";

import {
	StyledImageMediaContainerProps,
	StyledImageMediaFallbackProps,
	StyledImageMediaOverlayProps,
	StyledImageMediaProps,
	StyledImageMediaSkeletonProps
} from "./ImageMedia.types";

// Configure which props should be forwarded on DOM
const options: StyledOptions = {
	shouldForwardProp: (prop) => prop !== "height" && prop !== "width"
};

export const StyledImageMediaContainer = styled(
	Box,
	options
)<StyledImageMediaContainerProps>(({ height, width }) => ({
	width: width || "inherit",
	height: height || "inherit",
	position: "relative"
}));

export const StyledImageMediaOverlay = styled(Box, {
	shouldForwardProp: (prop) => prop !== "active" && prop !== "overlay"
})<StyledImageMediaOverlayProps>(({ theme, active, overlay }) => {
	let background = "transparent";
	if (active) background = theme.palette.background.paper;
	else if (overlay) background = overlay;

	return {
		background,
		transition: theme.transitions.create(["background"], {
			duration: active ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
		}),
		position: "absolute",
		// Expand the element to take parent's full width and height
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	};
});

export const StyledImageMedia = styled(
	CardMedia,
	options
)<StyledImageMediaProps>(({ height, width }) => ({
	width: width || "inherit",
	height: height || "inherit",
	objectFit: "cover", // Image preserves its aspect ratio and fills the given dimension (clipped to fit)
	objectPosition: "50% 30%"
}));

export const StyledImageMediaSkeleton = styled(Skeleton)<StyledImageMediaSkeletonProps>({
	width: "100%",
	height: "100%"
});

export const StyledImageMediaFallback = styled(
	Box,
	options
)<StyledImageMediaFallbackProps>(({ height, width, theme }) => ({
	backgroundColor: theme.palette.divider,
	width: width ? "100%" : "auto",
	height: height ? "100%" : "auto",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));
