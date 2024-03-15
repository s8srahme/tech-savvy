/**
 * J S X  T R A N S F O R M
 *
 * Browsers do not understand JSX out of the box, so most React users rely on a compiler like Babel or TypeScript to
 * transform JSX code into regular JavaScript. Many preconfigured toolkits like Create React App include a JSX
 * transform under the hood.
 *
 * The old JSX transform turned JSX into React.createElement(...) calls, i.e. React was needed to be in scope if you
 * used JSX. React 17 release offers a new, rewritten version of the JSX transform, which introduces new entry points
 * to the React package that are intended to only be used by compilers like Babel and TypeScript. Instead of
 * transforming JSX to React.createElement, the new JSX transform automatically imports special functions from those
 * new entry points in the React package and calls them.
 *
 * This allows you to use JSX without importing React (i.e. does not require React to be in scope). You would still
 * need to import React in order to use Hooks or other exports that React provides. It is also recommended to:
 * 	- remove all unused React imports as a result of the new JSX transform upgrade
 * 	- change all existing namespace imports (i.e. import * as React) and default React imports (i.e import React) to
 * 		destructured named imports (i.e. import { useState })
 *
 * @see {@link https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform}
 * for further information.
 *
 *
 * S E C U R I T Y
 *
 * When you set target to _blank with Links, it is recommended to always set rel attribute to noopener and/or
 * noreferrer while linking to third party content, such that:
 * 	- noopener prevents the new page from being able to access the window.opener property and ensures it runs in a
 * 		separate process. Without this, the target page can potentially redirect your page to a malicious URL.
 * 	- noreferrer has the same effect, but also prevents the Referer header from being sent to the new page (removing
 * 		the referrer header will affect analytics though)
 *
 *
 * C O P Y R I G H T  M E S S A G E
 *
 * There are a few stylistic rules to display a copyright message on your website:
 * 	- use Copyright or ©, but you need not use both
 * 	- there is no period between the date and the organization/person who claims the copyright
 * 	- if your website contains material that was created in previous years, you may want to opt to use a date range in
 *		the copyright notice
 *	- e.g. Copyright 2005-2021 SiteCare, LLC
 *
 *
 * D A T E  O B J E C T
 *
 * Date() constructor returns a Date object representing current date and time (as of the time of instantiation) when
 * no parameters are provided. Parameters for the Date() constructor include:
 * 	- timestamp number: an integer value representing the timestamp, which is the number of milliseconds since midnight
 * 	  at the beginning of January 1, 1970, UTC (aka the epoch)
 * 	- date string: a string value representing a date, which comes in different formats:
 * 			- date time string format: YYYY-MM-DDTHH:mm:ss.sssZ (standardized and will work reliably). See
 * 				[date time string format]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format}
 * 				for caveats on using different formats.
 * 			- short date format: MM/DD/YYYY
 * 			- long date format: MMM DD YYYY or DD MMM YYYY or MMMM DD, YYYY HH:mm:ss (may not work in all runtimes)
 * 	- date object: an existing Date object to copy from, with the same date and time
 * 	- individual date and time components: year, month, day, hour, minute, second and millisecond parameters. Any
 * 		missing fields are given the lowest possible value (1 for day and 0 for every other component).
 *
 *
 * U T C
 *
 * UTC (Universal Time Coordinated) is the primary time standard globally used to regulate clocks and time. It
 * establishes a reference for the current time, forming the basis for civil time and time zones. UTC facilitates
 * international communication, navigation, scientific research, and commerce. Time zones around the world are
 * expressed using positive or negative offsets from UTC (as in the list of time zones by UTC offset). UTC is the same
 * as GMT (Greenwich Mean Time). When setting or getting a date, without specifying the time zone, JavaScript will use
 * the browser's time zone.
 */

import { memo } from "react";

import { Box, Stack, Typography } from "@mui/material";
import { format } from "date-fns";

import { Icon } from "@/components/data-display";
import { IconButtonLink } from "@/components/inputs";
import { CardTypographyDivider } from "@/components/surfaces";
import { AboutRoutePath } from "@/router/about/about.routes";
import { getURLString, isValidURL } from "@/utils/helpers";

import { StyledFooter } from "./Footer.styles";
import { FooterProps } from "./Footer.types";
import { Link } from "../Link/Link";

export const Footer = memo<FooterProps>(({ linkMapping }) => {
	const currentYear = format(new Date(), "yyyy");
	return (
		<StyledFooter direction={{ xs: "column", md: "row" }}>
			<Stack
				direction="row"
				spacing={1}
				sx={{
					mb: {
						xs: 3,
						md: 0
					},
					order: {
						xs: 1,
						md: 3
					}
				}}
			>
				{linkMapping.FOOTER_SOCIAL_MEDIA_LINK_MAPPINGS.map(({ id, title, IconComponent, urlMapping }) => (
					<IconButtonLink
						sx={{ color: "primary.dark" }}
						key={id}
						title={title}
						aria-label={title}
						disabled={!isValidURL(urlMapping)}
						to={getURLString(urlMapping)}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon IconComponent={IconComponent} size="x-small" />
					</IconButtonLink>
				))}
			</Stack>
			<Stack
				direction="row"
				spacing={1.5}
				sx={{
					mb: {
						xs: 1,
						md: 0
					},
					order: 2,
					flexGrow: 1
				}}
				divider={<CardTypographyDivider />}
			>
				<Box />
				{linkMapping.FOOTER_LEGAL_AGREEMENT_LINK_MAPPINGS.map(({ id, text, urlMapping }) => (
					<Link key={id} disabled={!isValidURL<AboutRoutePath>(urlMapping)} to={getURLString(urlMapping)}>
						{text}
					</Link>
				))}
			</Stack>
			<Stack
				sx={{
					order: {
						xs: 3,
						md: 1
					}
				}}
			>
				<Typography variant="body2">Copyright {currentYear} Techsavvy</Typography>
			</Stack>
		</StyledFooter>
	);
});
