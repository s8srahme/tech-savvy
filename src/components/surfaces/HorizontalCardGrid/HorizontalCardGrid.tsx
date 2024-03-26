/**
 * S C R O L L  P O S I T I O N
 *
 * Document interface represents any web page loaded in the browser and serves as an entry point into the web page's
 * content, aka DOM tree. Document.documentElement returns the Element that is the root element of the document (e.g.
 * <html> element for HTML documents) and the root element contains a NodeList of the direct children such as <head>
 * and <body>. The top left corner of an element is (0, 0); the scrollLeft and scrollTop are relative to that
 * coordinate.
 *
 * Element.scrollLeft property gets or sets the number of pixels that an element's content is scrolled from its left
 * edge. It can be specified as any integer value. However:
 * 	- if the element cannot be scrolled (e.g., it has no overflow), scrollLeft is set to 0
 * 	- if specified as a value less than 0, scrollLeft is set to 0
 * 	- if specified as a value greater than the maximum that the content can be scrolled, scrollLeft is set to maximum
 *
 * Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically (from
 * its top edge), i.e. the distance from the element's top to its topmost visible content (reached after scrolling).
 * When an element's content does not generate a vertical scrollbar, then its scrollTop value is 0. It can be set to
 * any integer value, with certain caveats:
 * 	- if the element cannot be scrolled (e.g. it has no overflow), scrollTop is 0
 * 	- scrollTop does not respond to negative values; instead, it sets itself back to 0
 * 	- if set to a value greater than the maximum available for the element, scrollTop settles itself to the maximum
 * 		value
 *
 * When scrollTop is used on the root element (i.e. <html> element), Window.scrollY is returned. scrollY (alias
 * pageYOffset) property of the Window interface returns the number of pixels that the document is currently scrolled
 * vertically from the origin, i.e. Y coordinate of the top edge of the current viewport. If the document is not
 * scrolled at all up or down, then scrollY is 0. Similarly, you can get the number of pixels the document is scrolled
 * horizontally from the origin using scrollX property.
 *
 *
 * V I E W P O R T
 *
 * In web browser terms, viewport refers to the part of the document you are viewing which is currently visible in its
 * window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not
 * visible until scrolled into view.
 *
 *
 * E L E M E N T  D I M E N S I O N S
 *
 * Element.offsetWidth property returns the layout width (in pixels) of an element as an integer, including any
 * borders, padding and vertical scrollbars (if rendered). It does not include width of pseudo-elements such as
 * ::before or ::after. If the element is hidden, then 0 is returned. Element.offsetHeight property returns the
 * height of an element in the similar way.
 *
 * Element.clientWidth property is zero for inline elements and elements with no CSS; otherwise, it is the inner width
 * of an element in pixels, which includes padding but excludes borders, margins and vertical scrollbars (if present).
 * When clientWidth is used on the root element (i.e. <html> element via Document.documentElement) or on <body>, the
 * viewport's width (excluding any scrollbar) is returned. Similarly, Element.clientHeight property gives the inner
 * height of an element in pixels.
 *
 * Element.scrollWidth property is the width of an element's content, including content not visible on the screen due
 * to overflow. Its value is equal to the minimum width the element would require in order to fit all the content in
 * the viewport without using a horizontal scrollbar. which includes the element's padding, but not its border, margin
 * or vertical scrollbar (if present). It can also include the width of pseudo-elements such as ::before or ::after.
 * Similarly, Element.scrollHeight property is the height of an element's content, including content not visible on
 * the screen due to overflow.
 *
 * Window.innerWidth property returns interior width of the window in pixels (i.e. width of the window's layout
 * viewport), which includes width of the vertical scroll bar (if present). Similarly, interior height of the window
 * can be obtained using Window.innerHeight property.
 *
 *
 * S C H E D U L I N G  F U N C T I O N  C A L L
 *
 * To execute a function not right now but at a certain time later (scheduling a call), there are global methods for it:
 * 	- setTimeout() method sets a timer which executes a function once the timer expires. If delay time (in milliseconds)
 * 	  is omitted, a value of 0 is used to execute immediately (i.e. next event cycle).
 * 	- setInterval() method (offered on global scope) repeatedly calls a function with a fixed time delay between each
 * 		call. It returns an interval ID which uniquely identifies the timer created, so you can remove it later by
 * 		calling clearInterval().
 *
 * These methods are not a part of JavaScript specification but they are supported by most environments (e.g. browsers,
 * Node). When you pass them a regular function, it is invoked with the wrong this value because code executed by these
 * methods run in a separate execution context than the function from which it was called. Meaning, this keyword for
 * the called function is set to the window (or global) object, not the this value for the function that called
 * setTimeout/setInterval methods. A common way to solve the problem is to use a wrapper function (can be an arrow
 * function with lexical this) or bind() that sets this to the required value.
 *
 * They are also asynchronous functions, meaning that the timer function will not pause execution of other functions
 * in the functions stack. You cannot use them to create a pause before the next function in the function stack fires.
 * To create a progression in which one function only fires after the completion of another function, use Promises.
 */

import { FC, useEffect, useMemo, useRef } from "react";

import { EastOutlined as EastIcon, ReportOutlined as ReportIcon, WestOutlined as WestIcon } from "@mui/icons-material";
import { Typography } from "@mui/material";

import { Icon } from "@/components/data-display";
import { ButtonClickHandler, IconButton } from "@/components/inputs";
import { useElementHorizontalScroll } from "@/utils/hooks";
import { HorizontalScrollDirection } from "@/utils/types";

import {
	StyledHorizontalCardGrid,
	StyledHorizontalCardGridButtonContainer,
	StyledHorizontalCardGridCardContainer,
	StyledHorizontalCardGridHeader,
	StyledHorizontalCardGridScrollShadow
} from "./HorizontalCardGrid.styles";
import {
	HorizontalCardGridHeaderButtonProps,
	HorizontalCardGridHeaderProps,
	HorizontalCardGridProps
} from "./HorizontalCardGrid.types";
import { Card } from "../Card/Card";
import { CARD_WIDTH } from "../Card/Card.constants";
import { EmptyListing } from "../EmptyListing/EmptyListing";

export const HorizontalCardGridHeader: FC<HorizontalCardGridHeaderProps> = ({
	title,
	buttonProps: { left, right }
}) => {
	return (
		<StyledHorizontalCardGridHeader direction="row">
			<Typography variant="h6">{title}</Typography>
			<StyledHorizontalCardGridButtonContainer spacing={1} direction="row">
				<IconButton title="Previous" aria-label="Previous" onClick={left.onClick} disabled={left.disabled}>
					<Icon IconComponent={WestIcon} size="x-small" />
				</IconButton>
				<IconButton title="Next" aria-label="Next" onClick={right.onClick} disabled={right.disabled}>
					<Icon IconComponent={EastIcon} size="x-small" />
				</IconButton>
			</StyledHorizontalCardGridButtonContainer>
		</StyledHorizontalCardGridHeader>
	);
};

export const HorizontalCardGrid: FC<HorizontalCardGridProps> = ({ cards, header, emptyListing }) => {
	// V A R I A B L E S

	const containerRef = useRef<HTMLDivElement>(null);
	const { canBeScrolled, hasReachedEdge, disableScroll, enableScroll } = useElementHorizontalScroll(
		containerRef.current
	);
	let scrollIntervalId: NodeJS.Timeout;

	// C U S T O M  M E T H O D S

	const handleHorizontalScroll = (direction: HorizontalScrollDirection) => {
		if (containerRef.current) {
			disableScroll();

			const { current } = containerRef;
			const totalDistanceToScroll = current.clientWidth;
			const steps = 10;
			const distancePerStep = totalDistanceToScroll / steps;
			const scrollSpeed = 50; // Delay in milliseconds
			let distanceScrolled = 0;

			scrollIntervalId = setInterval(() => {
				current.scrollLeft += distancePerStep * (direction === "right" ? 1 : -1);
				distanceScrolled += distancePerStep;

				if (distanceScrolled >= totalDistanceToScroll) {
					enableScroll();
					clearInterval(scrollIntervalId);
				}
			}, scrollSpeed);
		}
	};
	const handleNextButtonClick: ButtonClickHandler = () => {
		handleHorizontalScroll("right");
	};
	const handlePreviousButtonClick: ButtonClickHandler = () => {
		handleHorizontalScroll("left");
	};

	// H O O K S

	useEffect(() => {
		// Cancel interval when the component unmounts
		return () => {
			clearInterval(scrollIntervalId);
		};
	}, []);

	// C H I L D R E N  P R O P S

	const buttonProps: HorizontalCardGridHeaderButtonProps = useMemo(
		() => ({
			left: { onClick: handlePreviousButtonClick, disabled: !canBeScrolled.left },
			right: { onClick: handleNextButtonClick, disabled: cards.length === 0 ? true : !canBeScrolled.right }
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[canBeScrolled, cards]
	);

	// R E N D E R  M E T H O D

	return (
		<StyledHorizontalCardGrid spacing={3}>
			<HorizontalCardGridHeader title={header.title} buttonProps={buttonProps} />
			{cards.length ? (
				<StyledHorizontalCardGridScrollShadow start={!hasReachedEdge.left} end={!hasReachedEdge.right}>
					<StyledHorizontalCardGridCardContainer spacing={3} direction="row" ref={containerRef}>
						{cards.map((card) => (
							<Card key={card.id} {...card} />
						))}
					</StyledHorizontalCardGridCardContainer>
				</StyledHorizontalCardGridScrollShadow>
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
		</StyledHorizontalCardGrid>
	);
};
