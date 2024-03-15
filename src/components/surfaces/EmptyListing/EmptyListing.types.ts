import { SvgIcon } from "@mui/material";

import { RelativeURL, URLMapping } from "@/utils/types";

export type EmptyListingProps = {
	title: string;
	description: string;
	IconComponent: typeof SvgIcon;
	buttonProps?: {
		urlMapping: URLMapping<"relative", RelativeURL>;
		label: string;
	};
	height: number;
};
