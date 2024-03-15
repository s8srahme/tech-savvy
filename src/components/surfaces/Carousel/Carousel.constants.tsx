// import { RootRoutePath, RootRoutePathDynamicSegment } from "@/router/router.constants";

import { CardProps } from "../Card/Card.types";

export const CAROUSEL_CARDS: CardProps[] = [
	{
		id: "00",
		title: "The Making of Mount Rushmore",
		text: "Mount Rushmore is a national memorial centered on a colossal sculpture carved into the granite face of Mount Rushmore in the Black Hills near Keystone, South Dakota, United States. Sculptor Gutzon Borglum designed the sculpture, called Shrine of Democracy, and oversaw the project's execution from 1927 to 1941 with the help of his son, Lincoln Borglum. The sculpture features the 60-foot-tall (18 m) heads of four United States presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln,[5] chosen to represent the nation's birth, growth, development and preservation respectively.",
		alt: "Mount Rushmore",
		image: new URL(
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FMount_Rushmore_detail_view_(100MP).jpg%2F1200px-Mount_Rushmore_detail_view_(100MP).jpg&f=1&nofb=1&ipt=ad10b8b164e8f0f8a41c7909e16eb48dfd54e0095fa297e4b941c98d85cf73eb&ipo=images"
		),
		author: {
			id: "0000",
			email: "unknown@mailservice.com",
			avatar: new URL(
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VdA7TqECQTz7r2jJPHNiKwHaGL%26pid%3DApi&f=1&ipt=3fd3970a2f0f44b24787300d56aa7303723d7501c939a1d99fbb1f01355af1e0&ipo=images"
			),
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Clark",
				lastName: "Kent"
			}
		},
		publishedOn: new Date(2024, 2, 10, 20, 56, 0)
		// urlMapping: {
		// 	type: "relative",
		// 	value: {
		// 		pathPattern: RootRoutePath.ARTICLES_ARTICLE_DETAIL,
		// 		dynamicSegmentPattern: RootRoutePathDynamicSegment.ARTICLES_ARTICLE_DETAIL,
		// 		replacementId: "/lizard"
		// 	}
		// }
	},
	{
		id: "01",
		title: "5 ways Amazon is positively impacting small towns across the US",
		text: "Amazon is one of the top investors in the U.S. economy, and since 2010, they have contributed more than $880 billion to the national gross domestic product (GDP). The investments they make help expand local economies by supporting the creation of direct jobs at Amazon and indirect jobs in fields like construction, health care, retail, and professional services.",
		alt: "Man in green & blue",
		image: new URL(
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.prod.www.spiegel.de%2Fimages%2F7c3a360f-0001-0004-0000-000001022337_w1528_r2.017145738779627_fpx54.51_fpy49.98.jpg&f=1&nofb=1&ipt=4f1fcad4826073ef64c1ed997d5cf031acaa9d0285703e7df60c132e0cb6d1f8&ipo=images"
		),
		author: {
			id: "0001",
			email: "unknown@mailservice.com",
			avatar: new URL(
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e35cwaz2MCzdr4qFvBS8kAHaHU%26pid%3DApi&f=1&ipt=fcae1a92825776608af8b529cee20b0a2d4c62ab87adffe30116086d789dfa4b&ipo=images"
			),
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Peter",
				lastName: "Parker"
			}
		},
		publishedOn: new Date(2024, 7, 24, 18, 51, 0)
	},
	{
		id: "02",
		title: "Amazon named among the world's most admired companies for the eighth year in a row by Fortune magazine",
		text: "Fortune announced its 2024 list of the World's Most Admired companies, and this year Amazon ranked third—its eighth consecutive year in the top three. The annual ranking is determined by a survey of top executives and analysts, and companies are evaluated based on nine criteria, including the quality of their management, innovation in products and services, and commitments to social responsibility.",
		alt: "Collage of various aspects of amazonian life including seattle office project kuiper hq2 building digit the robot and a dog in the office",
		image: new URL(
			"https://assets.aboutamazon.com/dims4/default/dd3b32a/2147483647/strip/true/crop/1999x1125+0+0/resize/1860x1047!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Feb%2F8b%2F7243c44d4275ba812bce7e354a72%2Fabout-amazon-hero-012924-amazonnamedamongfoortunemagmostadmiredcompanies-2000x1125-standardhero-aboutamazon-v1.jpg"
		),
		author: {
			id: "0002",
			email: "unknown@mailservice.com",
			avatar: new URL(
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mW6siXQlVlGJXBFr48UOQgHaHR%26pid%3DApi&f=1&ipt=1f501cc25998eabe254beaf5bd878bc094040130f680f5874f3cb6ad937cade0&ipo=images"
			),
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Aang",
				lastName: ""
			}
		},
		publishedOn: new Date(2024, 1, 0, 0, 0, 0)
	},
	{
		id: "03",
		title: "Oppenheimer wins best picture Oscar, along with triumphs for Christopher Nolan and Cillian Murphy",
		text: "The 96th Academy Awards have come and gone, and Oppenheimer came out on top, winning best picture and six other Oscars.",
		alt: "Christopher Nolan recreating Oppenheimer with Cillian Murphy",
		image: new URL(
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femeatribune.com%2Fwp-content%2Fuploads%2F2024%2F03%2Foppenheimer-fact-v-fiction-what-the-movie-got-right-and-wrong-according-to-a-nuclear-historian.jpg&f=1&nofb=1&ipt=8714087e4452c4592b3528f8d4f4fefb1074112567df602d2fb7ac05c9dcab1f&ipo=images"
		),
		author: {
			id: "0003",
			email: "unknown@mailservice.com",
			avatar: new URL(
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7f%2Fe6%2F61%2F7fe661a7d73c9ff8ca468856048cfaeb.png&f=1&nofb=1&ipt=98e99bc067cc7797725b8b30ba4b632740b0273838f0fbf257cd0f93c671a212&ipo=images"
			),
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Steve",
				lastName: "Rogers"
			}
		},
		publishedOn: new Date(2024, 1, 0, 0, 0, 0)
	},
	{
		id: "04",
		title: "Jeff Bezos' Blue Origin targets 2025 for first moon landing",
		text: "Blue Origin is targeting 2025 for its first uncrewed moon landing. The reveal came via John Couluris, the Senior Vice President for Lunar Permanence at Blue Origin.",
		alt: "Jeff Bezos blue origin space",
		image: new URL("https://bgr.com/wp-content/uploads/2021/07/MEGA761236_003.jpg?resize=1020%2C574&quality=82"),
		author: {
			id: "0004",
			email: "unknown@mailservice.com",
			avatar: new URL(
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc8%2F62%2Fa2%2Fc862a22a8495957492503097a5997d84.jpg&f=1&nofb=1&ipt=9238b2de5425979c90950696331801375b354ec62122c140248ede7cb2983843&ipo=images"
			),
			birthDate: new Date(2000, 1, 1),
			registeredOn: new Date(2020, 12, 1),
			roles: ["admin"],
			permissions: ["create", "update"],
			name: {
				firstName: "Barry",
				lastName: "Allen"
			}
		},
		publishedOn: new Date(2024, 1, 0, 0, 0, 0)
	}
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const CAROUSEL_CARDS: CardProps[] = Array.from(Array(10), (_, index) => ({
// 	...props,
// 	id: index.toString()
// }));
