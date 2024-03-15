import { Box, BoxProps, Card, CardContent, CardContentProps, Stack, StackProps, styled } from "@mui/material";

import { StyledCarouselSlideProps } from "./Carousel.types";

export const StyledCarousel = styled(Stack)<StackProps>`
	width: 100%;
`;

export const StyledCarouselSlideContainer = styled(Stack)<StackProps>`
	width: 100%;
	overflow: hidden;
`;

export const StyledCarouselSlide = styled(Card)<StyledCarouselSlideProps>`
	border-radius: ${({ theme }) => `${2 * theme.shape.borderRadius}px`};
`;

export const StyledCardContentContainer = styled(Box)<BoxProps>`
	position: absolute;
	inset: 0;
	display: flex;
	align-items: flex-end;
`;

export const StyledCardContent = styled(CardContent)<CardContentProps>`
	width: 60%;
	padding: ${({ theme }) => theme.spacing(3)};
	padding-right: 0;
	padding-bottom: ${({ theme }) => theme.spacing(3)};
`;
