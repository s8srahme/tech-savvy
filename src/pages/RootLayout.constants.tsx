import {
	BookmarksOutlined as BookmarksIcon,
	ChargingStationOutlined as ChargingStationIcon,
	CurrencyBitcoinOutlined as CurrencyBitcoinIcon,
	Email as EmailIcon,
	EvStationOutlined as EvStationIcon,
	GitHub as GitHubIcon,
	HomeOutlined as HomeIcon,
	LinkedIn as LinkedInIcon,
	LiveTvOutlined as LiveTvIcon,
	LocalFireDepartmentOutlined as LocalFireDepartmentIcon,
	PeopleAltOutlined as PeopleAltIcon,
	PsychologyOutlined as PsychologyIcon,
	Reddit as RedditIcon,
	RocketLaunchOutlined as RocketLaunchIcon,
	SettingsOutlined as SettingsIcon,
	SportsEsportsOutlined as SportsEsportsIcon,
	TerminalOutlined as TerminalIcon,
	WavingHandOutlined as WavingHandIcon,
	WorkOutlineOutlined as WorkIcon,
	X as XIcon,
	YouTube as YouTubeIcon
} from "@mui/icons-material";

import { Discord as DiscordIcon } from "@/assets/icons";
import { Icon } from "@/components/data-display";
import {
	AppBarLinkMapping,
	DrawerListMapping,
	FooterLegalAgreementLinkMapping,
	FooterSocialMediaLinkMapping
} from "@/components/navigation";
import { RoutePathDynamicSegmentMapping, RoutePathMapping } from "@/router/router.routes";

/*  R O O T  L A Y O U T  C O N F I G  V A L U E S  */

const DRAWER_HOME_LIST_MAPPINGS: DrawerListMapping = {
	label: "home",
	mappings: [
		/**
		 * You need to close the JSX tag if you want to pass instances of the component through an array. Then rendering
		 * {icon} should work just fine.
		 */
		{
			id: "home",
			text: "Home",
			icon: <Icon IconComponent={HomeIcon} size="x-small" />,
			urlMapping: { type: "relative", value: { pathPattern: RoutePathMapping.home.HOME_ROOT } }
		},
		{
			id: "recent-releases",
			text: "Recent Releases",
			icon: <Icon IconComponent={LocalFireDepartmentIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: { pathPattern: RoutePathMapping.home.HOME_RECENT_RELEASES }
			}
		},
		{
			id: "most-clapped",
			text: "Most Clapped",
			icon: <Icon IconComponent={WavingHandIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: { pathPattern: RoutePathMapping.home.HOME_MOST_CLAPPED }
			}
		},
		{
			id: "top-authors",
			text: "Top Authors",
			icon: <Icon IconComponent={PeopleAltIcon} size="x-small" />,
			urlMapping: { type: "relative", value: { pathPattern: RoutePathMapping.home.HOME_TOP_AUTHORS } }
		}
	]
};
const DRAWER_CATEGORY_LIST_MAPPINGS: DrawerListMapping = {
	label: "category",
	mappings: [
		{
			id: "software-&-apps",
			text: "Software & Apps",
			icon: <Icon IconComponent={TerminalIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					replacementId: "software-&-apps",
					pathPattern: RoutePathMapping.articles.ARTICLES_DETAIL,
					dynamicSegmentPattern: RoutePathDynamicSegmentMapping.articles.ARTICLES_DETAIL
				}
			}
		},
		{
			id: "ai",
			text: "AI",
			icon: <Icon IconComponent={PsychologyIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					replacementId: "ai",
					pathPattern: RoutePathMapping.articles.ARTICLES_DETAIL,
					dynamicSegmentPattern: RoutePathDynamicSegmentMapping.articles.ARTICLES_DETAIL
				}
			}
		},
		{
			id: "ev",
			text: "EV",
			icon: <Icon IconComponent={EvStationIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					replacementId: "ev",
					pathPattern: RoutePathMapping.articles.ARTICLES_DETAIL,
					dynamicSegmentPattern: RoutePathDynamicSegmentMapping.articles.ARTICLES_DETAIL
				}
			}
		},
		{
			id: "crypto",
			text: "Crypto",
			icon: <Icon IconComponent={CurrencyBitcoinIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					replacementId: "crypto",
					pathPattern: RoutePathMapping.articles.ARTICLES_DETAIL,
					dynamicSegmentPattern: RoutePathDynamicSegmentMapping.articles.ARTICLES_DETAIL
				}
			}
		},
		{
			id: "movies-&-shows",
			text: "Movies & Shows",
			icon: <Icon IconComponent={LiveTvIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					replacementId: "movies-&-shows",
					pathPattern: RoutePathMapping.articles.ARTICLES_DETAIL,
					dynamicSegmentPattern: RoutePathDynamicSegmentMapping.articles.ARTICLES_DETAIL
				}
			}
		},
		{
			id: "gaming",
			text: "Gaming",
			icon: <Icon IconComponent={SportsEsportsIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					replacementId: "gaming",
					pathPattern: RoutePathMapping.articles.ARTICLES_DETAIL,
					dynamicSegmentPattern: RoutePathDynamicSegmentMapping.articles.ARTICLES_DETAIL
				}
			}
		},
		{
			id: "space",
			text: "Space",
			icon: <Icon IconComponent={RocketLaunchIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					replacementId: "space",
					pathPattern: RoutePathMapping.articles.ARTICLES_DETAIL,
					dynamicSegmentPattern: RoutePathDynamicSegmentMapping.articles.ARTICLES_DETAIL
				}
			}
		},
		{
			id: "work-&-career",
			text: "Work & Career",
			icon: <Icon IconComponent={WorkIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					replacementId: "work-&-career",
					pathPattern: RoutePathMapping.articles.ARTICLES_DETAIL,
					dynamicSegmentPattern: RoutePathDynamicSegmentMapping.articles.ARTICLES_DETAIL
				}
			}
		},
		{
			id: "electronics",
			text: "Electronics",
			icon: <Icon IconComponent={ChargingStationIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					replacementId: "electronics",
					pathPattern: RoutePathMapping.articles.ARTICLES_DETAIL,
					dynamicSegmentPattern: RoutePathDynamicSegmentMapping.articles.ARTICLES_DETAIL
				}
			}
		}
	]
};
const DRAWER_ME_LIST_MAPPINGS: DrawerListMapping = {
	label: "me",
	mappings: [
		{
			id: "bookmarks",
			text: "bookmarks",
			icon: <Icon IconComponent={BookmarksIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					pathPattern: RoutePathMapping.me.ME_BOOKMARKS
				}
			}
		},
		{
			id: "settings",
			text: "settings",
			icon: <Icon IconComponent={SettingsIcon} size="x-small" />,
			urlMapping: {
				type: "relative",
				value: {
					pathPattern: RoutePathMapping.me.ME_SETTINGS
				}
			}
		}
	]
};
export const DRAWER_LIST_MAPPINGS: DrawerListMapping[] = [
	DRAWER_HOME_LIST_MAPPINGS,
	DRAWER_CATEGORY_LIST_MAPPINGS,
	DRAWER_ME_LIST_MAPPINGS
];

export const APP_BAR_LINK_MAPPINGS: AppBarLinkMapping[] = [
	{ text: "Docs", urlMapping: { type: "absolute", value: new URL("https://github.com/") } },
	{
		text: "About",
		urlMapping: {
			type: "relative",
			value: {
				pathPattern: RoutePathMapping.about.ABOUT_ROOT
			}
		}
	},
	{
		text: "Contact",
		urlMapping: {
			type: "relative",
			value: {
				pathPattern: RoutePathMapping.about.ABOUT_CONTACT
			}
		}
	},
	{
		text: "Write an article",
		urlMapping: {
			type: "relative",
			value: {
				pathPattern: RoutePathMapping.about.ABOUT_CONTACT
			}
		},
		variant: "contained"
	}
];

/**
 * You can place the component class/function (without closing the JSX tag) in an array. Then rendering <Icon /> will
 * allow you to pass props.
 */
const FOOTER_SOCIAL_MEDIA_LINK_MAPPINGS: FooterSocialMediaLinkMapping[] = [
	{
		id: "send-an-email",
		title: "Send an email",
		urlMapping: { type: "mailto", value: new URL("mailto://trickster0179@gmail.com") },
		IconComponent: EmailIcon
	},
	{
		id: "github",
		title: "GitHub",
		urlMapping: { type: "absolute", value: new URL("https://github.com/") },
		IconComponent: GitHubIcon
	},
	{
		id: "linkedin",
		title: "LinkedIn",
		urlMapping: { type: "absolute", value: new URL("https://www.linkedin.com/") },
		IconComponent: LinkedInIcon
	},
	{
		id: "x",
		title: "X",
		urlMapping: { type: "absolute", value: new URL("https://twitter.com/") },
		IconComponent: XIcon
	},
	{
		id: "reddit",
		title: "Reddit",
		urlMapping: { type: "absolute", value: new URL("https://www.reddit.com/") },
		IconComponent: RedditIcon
	},
	{
		id: "discord",
		title: "Discord",
		urlMapping: { type: "absolute", value: new URL("https://discord.com/") },
		IconComponent: DiscordIcon
	},
	{
		id: "youtube",
		title: "YouTube",
		urlMapping: { type: "absolute", value: new URL("https://www.youtube.com/") },
		IconComponent: YouTubeIcon
	}
];
const FOOTER_LEGAL_AGREEMENT_LINK_MAPPINGS: FooterLegalAgreementLinkMapping[] = [
	{
		id: "privacy-policy",
		text: "Privacy Policy",
		urlMapping: { type: "relative", value: { pathPattern: RoutePathMapping.about.ABOUT_PRIVACY_POLICY } }
	},
	{
		id: "terms-of-service",
		text: "Terms of Service",
		urlMapping: {
			type: "relative",
			value: { pathPattern: RoutePathMapping.about.ABOUT_TERMS_OF_SERVICE }
		}
	}
];
export const FooterLinkMapping = {
	FOOTER_LEGAL_AGREEMENT_LINK_MAPPINGS,
	FOOTER_SOCIAL_MEDIA_LINK_MAPPINGS
};
