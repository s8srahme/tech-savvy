import { FC, memo, useMemo, useRef, useState } from "react";

import { ReportOutlined as ReportIcon } from "@mui/icons-material";
import { CardActionArea, Slide as MuiSlide } from "@mui/material";

import { ImageMedia, Typography } from "@/components/data-display";
import { ButtonClickHandler } from "@/components/inputs";
import { getTimeElapsed } from "@/utils/helpers";
import { useElementSize, useTheme } from "@/utils/hooks";
// import { RoutePathMapping } from "@/router/router.routes";

import {
	StyledCardContent,
	StyledCardContentContainer,
	StyledCarousel,
	StyledCarouselSlide,
	StyledCarouselSlideContainer
} from "./Carousel.styles";
import { CarouselProps, CarouselSlideDirection, CarouselSlideProps, CarouselSlideTransition } from "./Carousel.types";
import { CardHeader } from "../Card/Card";
import { CARD_WIDTH } from "../Card/Card.constants";
import { EmptyListing } from "../EmptyListing/EmptyListing";
import { HorizontalCardGridHeader } from "../HorizontalCardGrid/HorizontalCardGrid";
import { HorizontalCardGridHeaderButtonProps } from "../HorizontalCardGrid/HorizontalCardGrid.types";

const CarouselSlide = memo<CarouselSlideProps>(
	({
		transition: { transitionIn, direction, container },
		slide: { title, alt, image, author, createdAt, loading }
	}) => {
		// const navigate = useNavigate();
		const { theme } = useTheme();
		const [containerWidth] = useElementSize(container);

		const fullName = `${author?.name.firstName} ${author?.name.lastName}`;
		const { difference, unit } = getTimeElapsed(createdAt as Date);
		const timeElapsed = `${unit !== "now" ? `${difference} ${unit}${difference !== 1 ? "s" : ""} ago` : "Just now"}`;
		const overlay = `linear-gradient(to right, ${theme.palette.overlay.image.colorStop1}, ${theme.palette.overlay.image.colorStop2} 85%, ${theme.palette.overlay.image.colorStop3})`;

		const handleCardActionAreaClick: ButtonClickHandler = () => {
			// const routePath = replaceDynamicSegmentPattern(urlMapping);
			// navigate(routePath);
		};

		return (
			<MuiSlide in={transitionIn} direction={direction} container={container}>
				<StyledCarouselSlide
					variant="outlined"
					sx={{ minWidth: containerWidth || "auto", display: transitionIn ? "flex" : "none" }}
				>
					<CardActionArea onClick={handleCardActionAreaClick}>
						<ImageMedia
							loading={loading}
							fallbackSize="large"
							src={image}
							overlay={overlay}
							dimension={{ type: "height", value: CARD_WIDTH * 1.25 }}
							alt={alt || ""}
						/>
						<StyledCardContentContainer>
							<StyledCardContent>
								<Typography sx={{ mb: 1.5 }} variant="h4" loading={loading} noWrap lineClamp={3}>
									{title}
								</Typography>
								<CardHeader
									loading={loading}
									src={author?.avatar}
									fullName={fullName}
									subtitles={[
										{ id: "0", text: "5 min read" },
										{ id: "1", text: timeElapsed }
									]}
								/>
							</StyledCardContent>
						</StyledCardContentContainer>
					</CardActionArea>
				</StyledCarouselSlide>
			</MuiSlide>
		);
	}
);

export const Carousel: FC<CarouselProps> = ({ slides, header, emptyListing }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slideDirection, setSlideDirection] = useState<CarouselSlideDirection>("left");
	const containerRef = useRef<HTMLDivElement>(null);

	const handleNextSlideClick: ButtonClickHandler = () => {
		setSlideDirection("left");
		setCurrentSlide((prevSlide) => prevSlide + 1);
	};
	const handlePreviousSlideClick: ButtonClickHandler = () => {
		setSlideDirection("right");
		setCurrentSlide((prevSlide) => prevSlide - 1);
	};

	const buttonProps: HorizontalCardGridHeaderButtonProps = useMemo(
		() => ({
			left: { onClick: handlePreviousSlideClick, disabled: currentSlide === 0 },
			right: {
				onClick: handleNextSlideClick,
				disabled: slides.length === 0 ? true : currentSlide === slides.length - 1
			}
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[currentSlide, slides]
	);

	return (
		<StyledCarousel spacing={3}>
			<HorizontalCardGridHeader title={header.title} buttonProps={buttonProps} />
			<StyledCarouselSlideContainer direction="row" ref={containerRef}>
				{slides?.length ? (
					slides.map((slide, index) => {
						const transitionProps: CarouselSlideTransition = {
							transitionIn: currentSlide === index,
							direction: slideDirection,
							container: containerRef.current
						};
						return <CarouselSlide key={slide.id} transition={transitionProps} slide={slide} />;
					})
				) : (
					<EmptyListing
						title={emptyListing.title}
						description={emptyListing.description}
						IconComponent={ReportIcon}
						// buttonProps={{
						// 	label: "Go back",
						// 	urlMapping: { type: "relative", value: { pathPattern: RoutePathMapping.home.HOME_ROOT } }
						// }}
						height={CARD_WIDTH * 1.25}
					/>
				)}
			</StyledCarouselSlideContainer>
		</StyledCarousel>
	);
};
