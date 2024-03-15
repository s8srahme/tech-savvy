// import { RootRoutePath, RootRoutePathDynamicSegment } from "@/router/router.constants";

import { CardProps } from "../Card/Card.types";

const props: CardProps = {
	id: "0",
	title: "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
	text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
	alt: "Lizard",
	image: new URL("https://images.hdqwalls.com/wallpapers/waterfall-rocks-4k-ch.jpg"),
	author: {
		id: "0",
		email: "dummy@mail.com",
		avatar: new URL("https://mui.com/static/images/avatar/1.jpg"),
		birthDate: new Date(2000, 1, 1),
		registeredOn: new Date(2020, 12, 1),
		roles: ["admin"],
		permissions: ["create", "update"],
		name: {
			firstName: "Kent",
			lastName: "Dodds"
		}
	},
	publishedOn: new Date(2022, 10, 15)
	// urlMapping: {
	// 	type: "relative",
	// 	value: {
	// 		pathPattern: RootRoutePath.ARTICLES_ARTICLE_DETAIL,
	// 		dynamicSegmentPattern: RootRoutePathDynamicSegment.ARTICLES_ARTICLE_DETAIL,
	// 		replacementId: "/lizard"
	// 	}
	// }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CARDS: CardProps[] = Array.from({ length: 10 }, (_, index) => ({ ...props, id: index.toString() }));
