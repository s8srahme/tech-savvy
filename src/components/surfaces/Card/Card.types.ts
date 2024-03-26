import { CardProps as MuiCardProps } from "@mui/material";

import type { Article } from "@/api/services";
import type { AvatarSize } from "@/components/data-display";
import type { RelativeURL, URLMapping } from "@/utils/types";

/* eslint-disable prettier/prettier */
export type CardProps = Partial<
	MuiCardProps & Article & { urlMapping?: URLMapping<"relative", RelativeURL>; loading?: boolean }
>;
/* eslint-enable prettier/prettier */
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
