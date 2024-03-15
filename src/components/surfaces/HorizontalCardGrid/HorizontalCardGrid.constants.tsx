// import { RootRoutePath, RootRoutePathDynamicSegment } from "@/router/router.constants";

import { CardProps } from "../Card/Card.types";

export const CARDS: CardProps[] = [
	{
		id: "00",
		title: "How Astronomers Track Black Hole Mergers Over Cosmic Time",
		text: "Unlike NASA's Webb Space Telescope, large ground based gravitational wave detectors are never going to generate pretty pictures.",
		alt: "Gravity waves still image",
		image: new URL(
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FPQ65SLNFFlhAv5C5HhCn11YSz6U%3D%2F0x0%3A1920x1080%2F1820x1213%2Ffilters%3Afocal(807x387%3A1113x693)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F67340944%2F24_Artists_Impression_of_Colliding_Black_Holes.0.jpg&f=1&nofb=1&ipt=54af416f1bfab98c59582fac8147a32416c475bf8721ab15cd3d569041e7f8be&ipo=images"
		),
		author: {
			id: "0000",
			email: "unknown@mailservice.com",
			// avatar: new URL("https://mui.com/static/images/avatar/1.jpg"),
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Clark",
				lastName: "Kent"
			}
		},
		publishedOn: new Date(2024, 1, 0)
		// urlMapping: {
		// 	type: "relative",
		// 	value: {
		// 		pathPattern: RootRoutePath.ARTICLES_ARTICLE_DETAIL,
		// 		dynamicSegmentPattern: RootRoutePathDynamicSegment.ARTICLES_ARTICLE_DETAIL,
		// 		replacementId: "/sony-ps5-update-dual-sense-controller"
		// 	}
		// }
	},
	{
		id: "01",
		title: "Sony's new PS5 with a removable disc drive launches in November",
		text: "Sony officially announced a new PS5 model with a detachable disc drive and 1TB of internal storage. Often referred to as the PS5 Slim, this new model is slightly slimmer and shorter than the existing one but will crucially replace both the PS5 and PS5 Digital Edition.",
		alt: "Sony's new PS5 Model",
		image: new URL(
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.xcite.com%2Fmedia%2Fwysiwyg%2Fbanners-kw-xvii%2Fplaystation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.jpg&f=1&nofb=1&ipt=5a90e605bfcea2db63917e5c8e1c54495d0e51a9f8b60e6110ab2e3cc15b1be9&ipo=images"
		),
		author: {
			id: "0001",
			email: "unknown@mailservice.com",
			// avatar: new URL("https://mui.com/static/images/avatar/1.jpg"),
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Peter",
				lastName: "Parker"
			}
		},
		publishedOn: new Date(2024, 2, 13)
	},
	{
		id: "02",
		title: "The Bill that could get TikTok banned in the U.S.",
		text: "The House voted to advance a bill that could get TikTok banned in the U.S. on Wednesday.",
		alt: "US Senate to vote on Tik Tok ban",
		image: new URL(
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage-prod.iol.co.za%2F16x9%2F800%2FAll-eyes-are-on-the-US-Senate-as-they-decide-on-the-fate-of-Tik-Tok-in-America-after-its-House-of-Representatives-approved-a-bill-on-that-would-force-the-media-giant-to-sever-ties-with-its-Chinese-parent-company-or-be-banned-in-the-United-States-Picture-Patrick-T-Fallon-AFP%3Fsource%3Dhttps%3A%2F%2Fxlibris.public.prod.oc.inl.infomaker.io%3A8443%2Fopencontent%2Fobjects%2Fd3785747-2faa-5e5f-8bb5-9c7c3934ac3c%26operation%3DCROP%26offset%3D0x283%26resize%3D5392x3033&f=1&nofb=1&ipt=97604a55eba94d50902e74121e84c89687fdc39e85708d04a0f0200d028fc8db&ipo=images"
		),
		author: {
			id: "0002",
			email: "unknown@mailservice.com",
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Wally",
				lastName: "West"
			}
		},
		publishedOn: new Date(2024, 2, 13)
	},
	{
		id: "03",
		title: "Deadpool 3 trailer welcomes Wolverine in Super Bowl 2024 spot",
		text: "The film, officially titled Deadpool & Wolverine, reunites Ryan Reynolds and Hugh Jackman in their Marvel characters for the highly anticipated R-rated outing.",
		alt: "Deadpool & Wolverine",
		image: new URL(
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.uhdpaper.com%2Fwallpaper%2Fdeadpool-3-wolverine-yellow-suit-hugh-jackman-170%401%40l-pc-4k.jpg&f=1&nofb=1&ipt=90267a89c4abff982373b93e36fb58c128b94347fab119036792232849352710&ipo=images"
		),
		author: {
			id: "0003",
			email: "unknown@mailservice.com",
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Wade",
				lastName: "Wilson"
			}
		},
		publishedOn: new Date(2024, 2, 13)
	},
	{
		id: "04",
		title: "Prince of Persia: The Lost Crown is part metroidvania, part soulslike, and all fun",
		text: "Days into 2024 and we have already got a strong contender for Game of the Year. Yes, Prince of Persia: The Lost Crown is that good. You wil want to get back to playing as quickly as possible, so I will keep this brief.",
		alt: "The Lost Crown game",
		image: new URL(
			"https://duet-cdn.vox-cdn.com/thumbor/0x0:1920x1080/750x750/filters:focal(960x540:961x541):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25225299/pop2.png"
		),
		author: {
			id: "0004",
			email: "unknown@mailservice.com",
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: { firstName: "Matt", lastName: "Murdock" }
		},
		publishedOn: new Date(2024, 2, 13)
	},
	{
		id: "05",
		title: "Loki S2 finale recap - a glorious purpose at the end of time",
		text: "Loki's Season 2 finale showcases the character's growth and his willingness to make the impossible choice to save all existence.",
		alt: "Tom Hiddleston as Loki in S2 finale",
		image: new URL(
			"https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/loki-tom-hiddleston-season-2.jpg?q=50&fit=crop&w=1500&dpr=1.5"
		),
		author: {
			id: "0005",
			email: "unknown@mailservice.com",
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Loki",
				lastName: "Laufeyson"
			}
		},
		publishedOn: new Date(2024, 2, 14)
	},
	{
		id: "06",
		title: "Akira Toriyama, the legendary Dragon Ball franchise creator, dies at 68",
		text: "Akira Toriyama, the creator of the Dragon Ball franchise and character designer for video games like Chrono Trigger and Dragon Quest, has died at the age of 68.",
		alt: "Akira Toriyama",
		image: new URL(
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.suggest.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fakira-toriyama-dragon-ball-creator-dies-at-68.jpg%3Ffit%3D800%252C533&f=1&nofb=1&ipt=0b89262d1f24fbafb0070f18dfd909de80133d80ce93abb4926ff6d716652e54&ipo=images"
		),
		author: {
			id: "0006",
			email: "unknown@mailservice.com",
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Miles",
				lastName: "Morales"
			}
		},
		publishedOn: new Date(2024, 2, 13)
	},
	{
		id: "07",
		title: "Nvidia is launching a new must-have AI chip - as customers still scramble for its last one",
		text: "The new class-leading H200 has more memory capacity and bandwidth, speeding up its work with generative AI and LLMs.",
		alt: "Nvidia's HGX H200",
		image: new URL(
			"https://duet-cdn.vox-cdn.com/thumbor/0x0:1920x1080/1080x720/filters:focal(960x540:961x541):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25080736/nvidia_hgx_h200.jpg"
		),
		author: {
			id: "0007",
			email: "unknown@mailservice.com",
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: { firstName: "Eddie", lastName: "Brock" }
		},
		publishedOn: new Date(2024, 2, 13)
	},
	{
		id: "08",
		title: "Amazon unveils plans for eye-catching Helix tower at new $2.5B headquarters",
		text: "An outdoor amphitheater, public plazas for farmers' markets and a 350-foot-tall tower inspired by a double helix, are among the latest design proposals for Amazon's new headquarters.",
		alt: "Amazon HQ2 Helix tower design",
		image: new URL(
			"https://media.cnn.com/api/v1/images/stellar/prod/210202025041-embargoed-02-amazon-hq2-design-helix.jpg?q=w_1160,c_fill/f_webp"
		),
		author: {
			id: "0008",
			email: "unknown@mailservice.com",
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Mark",
				lastName: "Grayson"
			}
		},
		publishedOn: new Date(2024, 2, 13)
	}
];

// The array below is initialized with an array-like object carrying undefined on each position (value of _)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const CARDS: CardProps[] = Array.from({ length: 10 }, (_, index) => ({ ...props, id: index.toString() }));
