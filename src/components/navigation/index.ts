/**
 * N A M E S P A C E  U S A G E
 *
 * Make an index.ts inside of every folder within components, so that it actually indexes the entire directory (i.e.
 * use it as a namespace to contain a bunch of named exports). This can be useful, such that:
 * 	- entities can be grouped under a single identifier if they are strongly related
 * 	- when you need to use one or more of the related components, you can easily import them all at once (as opposed to
 * 		making imports for each file individually)
 *
 *
 * T Y P E - O N L Y  I M P O R T  &  E X P O R T  S Y N T A X
 *
 * import type only imports declarations to be used for type annotations and declarations. It always gets fully erased
 * from TypeScript's output, so there's no remnant of it at runtime. Similarly, export type only provides an export
 * that can be used for type contexts, and is also erased from TypeScript's output.
 *
 * Cyclic dependency is not encountered if you use type-only import syntax in TypeScript (import type and import
 * typeof), which has no runtime effect.
 */

import { AppBar } from "./AppBar/AppBar";
import type { AppBarLinkMapping, AppBarProps } from "./AppBar/AppBar.types"; // Excluding styled types
import { Drawer } from "./Drawer/Drawer";
import type {
	DrawerListItemHandler,
	DrawerListItemMapping,
	DrawerListMapping,
	DrawerProps
} from "./Drawer/Drawer.types";
import { Footer } from "./Footer/Footer";
import type { FooterLegalAgreementLinkMapping, FooterSocialMediaLinkMapping } from "./Footer/Footer.types";
import { Link, MemoizedRouterLink } from "./Link/Link";
import type { LinkClickHandler, LinkProps } from "./Link/Link.types";

/*  T Y P E S  */

export type {
	AppBarLinkMapping,
	AppBarProps,
	DrawerListItemHandler,
	DrawerListItemMapping,
	DrawerListMapping,
	DrawerProps,
	FooterLegalAgreementLinkMapping,
	FooterSocialMediaLinkMapping,
	LinkClickHandler,
	LinkProps
};

/*  C O M P O N E N T S  */

export { AppBar, MemoizedRouterLink, Link, Drawer, Footer };
