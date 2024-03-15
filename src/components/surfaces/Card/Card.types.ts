import { CardProps as MuiCardProps } from "@mui/material";

import { AvatarSize } from "@/components/data-display";
import { RelativeURL, URLMapping } from "@/utils/types";

export type CardProps = MuiCardProps & {
	id: string;
	alt: string;
	image?: URL;
	text?: string;
	urlMapping?: URLMapping<"relative", RelativeURL>;
	author: User;
	publishedOn: Date;
	loading?: boolean | undefined;
};
export type CardHeaderSubtitle = { text: string; id: string };
export type CardHeaderProps = {
	src?: string;
	fullName: string;
	size?: AvatarSize;
	loading?: boolean | undefined;
	subtitles?: CardHeaderSubtitle[];
};
export type CardSubheaderProps = {
	loading?: boolean | undefined;
	subtitles: CardHeaderSubtitle[];
};

export type StyledCardProps = MuiCardProps;
