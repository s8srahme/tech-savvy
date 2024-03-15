/**
 * L A Z Y  L O A D I N G
 *
 * Lazy loading is a technique for waiting to load certain parts of a webpage (especially images) until they are
 * needed. Instead of loading everything all at once (aka eager loading), the browser does not request certain
 * resources until the user interacts in such a way that the resources are needed (e.g. wait to load the image until
 * the user scrolls close to it). When implemented properly, lazy loading can speed up page load times.
 *
 *
 * C O D E  S P L I T T I N G
 *
 * JavaScript, CSS and HTML can be split into smaller chunks. This enables sending the minimal code required to
 * provide value upfront, improving page-load times. The rest can be loaded on demand.
 */

import { FC, useRef, useState } from "react";

import { BrokenImage as BrokenImageIcon, ImageOutlined as ImageIcon } from "@mui/icons-material";

import { ViewState } from "@/utils/constants";

import {
	StyledImageMedia,
	StyledImageMediaContainer,
	StyledImageMediaFallback,
	StyledImageMediaOverlay,
	StyledImageMediaSkeleton
} from "./ImageMedia.styles";
import { ImageEventHandler, ImageMediaProps } from "./ImageMedia.types";
import { Icon } from "../Icon/Icon";

export const ImageMedia: FC<ImageMediaProps> = ({ dimension, fallbackSize = "large", overlay, src = "", ...rest }) => {
	const imageRef = useRef<HTMLImageElement>(null);
	const [imageViewState, setImageViewState] = useState<ViewState>(ViewState.LOADING);
	const dimensionProp = { [dimension.type]: dimension.value };

	const handleImageLoad: ImageEventHandler = () => {
		const imageElement = imageRef.current;
		/**
		 * Image element's complete attribute returns true if the image has either finished loading or failed to load.
		 * Since you want only the case where the image has successfully loaded, you need to check the nauturalHeight
		 * attribute as well. NaturalHeight must return the intrinsic height of the image (in pixels) if the image is
		 * available, or else 0.
		 */
		if (imageElement)
			setImageViewState(imageElement.complete && imageElement.naturalWidth !== 0 ? ViewState.DATA : ViewState.EMPTY);
	};
	const handleImageError: ImageEventHandler = () => {
		/**
		 * If an error occurs while loading or rendering an image, onError event handler will get called. This can
		 * happen in several situations, including:
		 * 	- src attribute (image URL) is empty string or null
		 * 	- src URL is same as the URL of the page the user is currently on
		 * 	- image is corrupted in some way that prevents it from being loaded
		 * 	- image's metadata is corrupted in such a way that it is impossible to retrieve its dimensions and no
		 * 		dimensions were specified in the <img> element's attributes
		 * 	- image is in a format not supported by the user agent
		 */
		if (!src) setImageViewState(ViewState.EMPTY);
		else setImageViewState(ViewState.ERROR);
	};
	const renderImageOverlay = () => {
		switch (imageViewState) {
			case ViewState.LOADING:
				return <StyledImageMediaSkeleton variant="rectangular" animation="wave" />;
			case ViewState.ERROR:
				return (
					<StyledImageMediaFallback {...dimensionProp}>
						<Icon IconComponent={BrokenImageIcon} size={fallbackSize} />
					</StyledImageMediaFallback>
				);
			case ViewState.EMPTY:
				return (
					<StyledImageMediaFallback {...dimensionProp}>
						<Icon IconComponent={ImageIcon} size={fallbackSize} />
					</StyledImageMediaFallback>
				);
			case ViewState.DATA:
			default:
				return null;
		}
	};

	return (
		<StyledImageMediaContainer {...dimensionProp}>
			<StyledImageMediaOverlay active={imageViewState !== ViewState.DATA} overlay={overlay}>
				{renderImageOverlay()}
			</StyledImageMediaOverlay>
			<StyledImageMedia
				component="img"
				onError={handleImageError}
				onLoad={handleImageLoad}
				ref={imageRef}
				src={src}
				{...dimensionProp}
				{...rest}
			/>
		</StyledImageMediaContainer>
	);
};
