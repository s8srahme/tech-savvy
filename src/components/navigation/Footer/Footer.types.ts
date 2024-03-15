import { SvgIcon } from "@mui/material";

import { AboutRoutePath, AboutRoutePathDynamicSegment } from "@/router/about/about.routes";
import type { RootURLMapping } from "@/utils/types";

export type FooterProps = {
	linkMapping: {
		FOOTER_LEGAL_AGREEMENT_LINK_MAPPINGS: FooterLegalAgreementLinkMapping[];
		FOOTER_SOCIAL_MEDIA_LINK_MAPPINGS: FooterSocialMediaLinkMapping[];
	};
};
export type FooterLegalAgreementLinkMapping = {
	id: string;
	text: string;
	urlMapping: RootURLMapping<AboutRoutePath, AboutRoutePathDynamicSegment>;
};
export type FooterSocialMediaLinkMapping = {
	id: string;
	title: string;
	urlMapping: RootURLMapping;
	IconComponent: typeof SvgIcon;
};
