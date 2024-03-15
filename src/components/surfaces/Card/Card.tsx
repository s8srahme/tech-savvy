import { FC } from "react";
// import { useNavigate } from "react-router-dom";

import { CardActionArea, CardContent, CardHeader as MuiCardHeader, Stack } from "@mui/material";

import { Avatar, ImageMedia, Typography } from "@/components/data-display";
import { ButtonClickHandler } from "@/components/inputs";
// import { replaceDynamicSegmentPattern } from "@/router/router.helpers";

import { getTimeElapsed } from "@/utils/helpers";
import { useTheme } from "@/utils/hooks";

import { CARD_WIDTH } from "./Card.constants";
import { StyledCard, StyledCardTypographyDivider } from "./Card.styles";
import { CardHeaderProps, CardProps, CardSubheaderProps } from "./Card.types";

export const CardTypographyDivider: FC = () => (
	<StyledCardTypographyDivider variant="body2">•</StyledCardTypographyDivider>
);

export const CardSubheader: FC<CardSubheaderProps> = ({ subtitles, loading }) => (
	<Stack direction="row" spacing={1} divider={<CardTypographyDivider />}>
		{subtitles.map(({ text, id }) => (
			<Typography
				color="text.secondary"
				variant="body2"
				loading={loading}
				key={id}
				sx={{ ".MuiSkeleton-text": { width: 80 } }}
			>
				{text}
			</Typography>
		))}
	</Stack>
);

export const CardHeader: FC<CardHeaderProps> = ({ subtitles = [], src, loading, fullName, size = "large" }) => {
	const title = (
		<Typography variant="body2" loading={loading} sx={{ ".MuiSkeleton-text": { width: 200 } }}>
			{fullName}
		</Typography>
	);
	const avatar = <Avatar size={size} src={src} fullName={fullName} loading={loading} />;

	return (
		<MuiCardHeader
			sx={{
				p: 0,
				"& .MuiCardHeader-avatar": { mr: size === "small" ? 1 : 2 }
			}}
			avatar={avatar}
			title={title}
			{...(size === "large" && { subheader: <CardSubheader subtitles={subtitles} loading={loading} /> })}
		/>
	);
};

export const Card: FC<CardProps> = ({ title, loading, author, alt, image, publishedOn }) => {
	// const navigate = useNavigate();
	const { theme } = useTheme();

	const fullName = `${author.name.firstName} ${author.name.lastName}`;
	const { difference, unit } = getTimeElapsed(publishedOn);
	const timeElapsed = `${unit !== "now" ? `${difference} ${unit}${difference !== 1 ? "s" : ""} ago` : "Just now"}`;
	const overlay = `linear-gradient(to top, ${theme.palette.overlay.image.colorStop1}, ${theme.palette.overlay.image.colorStop2} 25%, ${theme.palette.overlay.image.colorStop3})`;

	const handleCardActionAreaClick: ButtonClickHandler = () => {
		// const routePath = replaceDynamicSegmentPattern(urlMapping);
		// navigate(routePath);
	};

	return (
		<StyledCard variant="outlined">
			<CardActionArea onClick={handleCardActionAreaClick}>
				<ImageMedia
					fallbackSize="large"
					src={image?.href}
					overlay={overlay}
					dimension={{ type: "height", value: CARD_WIDTH * 1.25 }}
					alt={alt}
				/>
				<CardContent>
					<CardHeader loading={loading} size="small" src={author.avatar?.href} fullName={fullName} />
					<Typography sx={{ my: 1.5, minHeight: 85 }} lineClamp={3} loading={loading} noWrap variant="h5">
						{title}
					</Typography>
					<CardSubheader
						subtitles={[
							{ id: "0", text: "5 min read" },
							{ id: "1", text: timeElapsed }
						]}
						loading={loading}
					/>
					{/* <Typography variant="body1" color="text.secondary">
						{text}
					</Typography> */}
				</CardContent>
			</CardActionArea>
		</StyledCard>
	);
};
