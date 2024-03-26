import { CardProps as MuiCardProps } from "@mui/material";

import { CardProps } from "../Card/Card.types";

export type CarouselSlide = CardProps;
export type CarouselProps = {
	header: { title: string };
	slides: CarouselSlide[];
	loading: boolean | undefined;
	emptyListing: { title: string; description: string };
};

export type CarouselSlideDirection = "right" | "left";
export type CarouselSlideTransition = {
	transitionIn: boolean;
	direction: CarouselSlideDirection;
	container: HTMLDivElement | null;
};
export type CarouselSlideProps = {
	transition: CarouselSlideTransition;
	slide: CarouselSlide;
};

export type StyledCarouselSlideProps = MuiCardProps;
