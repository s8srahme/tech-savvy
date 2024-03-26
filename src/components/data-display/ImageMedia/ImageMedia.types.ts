import { ReactEventHandler } from "react";

import { BoxProps, CardMediaProps, SkeletonProps } from "@mui/material";

import { IconSize } from "../Icon/Icon.types";

type ImageDimensionType = "height" | "width";
type ImageDimensionValue = number | string;
type ImageDimension = { type: ImageDimensionType; value: number | string };

export type ImageEventHandler = ReactEventHandler<HTMLImageElement> | undefined;
export type ImageMediaProps = Omit<CardMediaProps, "onLoad" | "onError" | "image"> & {
	overlay?: string; // CSS background property, i.e. background-color or background-image
	alt: string;
	onError?: ImageEventHandler;
	onLoad?: ImageEventHandler;
	dimension: ImageDimension;
	fallbackSize: IconSize;
	loading?: boolean;
};

type CommonStyledProps = { height?: ImageDimensionValue; width?: ImageDimensionValue };
export type StyledImageMediaSkeletonProps = SkeletonProps;
export type StyledImageMediaOverlayProps = BoxProps & { active: boolean; overlay?: string }; // CSS background property
export type StyledImageMediaProps = CardMediaProps & CommonStyledProps;
export type StyledImageMediaFallbackProps = BoxProps & CommonStyledProps;
export type StyledImageMediaContainerProps = BoxProps & CommonStyledProps;
