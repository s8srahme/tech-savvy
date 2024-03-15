/**
 * R e g E x p  T E X T  S E A R C H
 *
 * match() method of String values retrieves the result of matching the string against a regular expression. Returns an
 * array whose contents depend on:
 * 	- presence or absence of g flag: If g flag is used, all results matching the complete regular expression will be
 * 		returned but capturing groups are not included. If g flag is not used, only the first complete match and its
 * 		related capturing groups are returned, i.e. an array with some extra properties (same result as exec() method).
 * 	- null if no matches are found
 * The parser uses non-capturing group (?:) to match the text but ignores it in the final result of match().
 *
 * test() method of RegExp instances searches for a match between the regular expression and a specified string.
 * Returns true if there is a match; false otherwise. When the global flag is set, JavaScript RegExp objects store a
 * lastIndex from the previous match. Using this internally, test() can be used to iterate over multiple matches in a
 * string of text (with capture groups).
 *
 * Global search flag (g) makes the RegExp search for a pattern throughout the string, creating an array of all
 * occurrences it can find matching the given pattern. Case insensitive flag (i) ignores upper/lower case differences
 * in the RegExp search.
 *
 *
 * R E G U L A R  E X P R E S S I O N S
 *
 * You can construct a regular expression in one of two ways:
 * 	- Using a regular expression literal, which consists of a pattern enclosed between slashes. Useful when the regular
 * 		expression remains constant.
 * 	- Calling the constructor function of the RegExp object. Use the constructor function when you know the regular
 * 		expression pattern will be changing or getting it from another source.
 *
 * A character escape represents a character that may not be able to be conveniently represented in its literal
 * form, e.g. backslash and left parenthesis are syntax characters in regexes, so they require escaping unless in a
 * character class.
 *
 *
 * U R L
 *
 * A URL (short for Uniform Resource Locator) is a string that identifies the location of a resource on the web, which
 * typically consists of various components:
 * 	- protocol, e.g. http, https
 * 	- domain name, e.g. chinese.freecodecamp.org
 * 	- top-level domain, e.g. .org, .co.uk, .edu
 * 	-	second-level domain, e.g. freecodecamp
 * 	- subdomain, e.g. chinese, www
 * 	- port number, e.g. :3000, :5000, :4000
 * 	- path, e.g. e.g. /news/article/search
 * 	- query parameters, e.g. ?q=apple&category=fruits
 * 	- fragment, e.g. #vidoes
 *
 * Valid domain names are derived from a set of alphanumeric ASCII characters, such as letters (a-z, A-Z), numbers
 * (0-9) and hyphens (-). They can be any combination of such letters and numbers with up to 63 characters or 67 if you
 * count the domain extension. Domain name cannot begin nor end with a hyphen (-) and symbols other than the hyphen (-)
 * are not allowed.
 *
 *
 * U R L  O B J E C T  &  T Y P E S
 *
 * URL() constructor creates and returns a URL object referencing the URL specified using an absolute URL string, or a
 * relative URL string and a base URL string. It works by providing properties which allow you to easily read and
 * modify the components of a URL, such as hash, host, href, pathname, port, searchParams and more.
 *
 * Absolute URL is the full URL, which includes protocol, domain (subdomain, second-level domain, domain extension) and
 * path (directory, slug). It provides all the available information to locate a resource on the web.
 *
 * Relative URL does not include the entire URL structure (without base URL) but only includes path (directory, slug),
 * i.e. everything that comes after the domain.
 */

import { RootRoutePathValue } from "@/router/router.types";

import { RootURLMapping } from "../types";

export const isValidHttpURL = (urlString: string) => {
	/**
	 * TODO: Improve pattern to constrain valid domain name character length
	 */
	const pattern = new RegExp(
		"^(https?:\\/\\/)?" + // Protocol
			"(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}" + // Domain name
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // Port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // Query string
			"(\\#[-a-z\\d_]*)?$", // Fragment locator
		"i"
	);
	return pattern.test(urlString);
};

export const isValidMailtoURL = (mailtoString: string) => {
	/**
	 * NOTE: The mailto url pattern does not support:
	 * 				- multiple email addresses
	 * 				- subject line
	 * 				- CC (carbon copy) and BCC (blind carbon copy) parameters
	 * 				- body parameter
	 */
	const pattern = /^mailto:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
	return pattern.test(mailtoString);
};

export const isValidURL = <P extends RootRoutePathValue = RootRoutePathValue>(
	urlMapping: RootURLMapping<P>
): boolean => {
	if (urlMapping.type === "absolute") return isValidHttpURL(urlMapping.value.href);
	if (urlMapping.type === "mailto") return isValidMailtoURL(urlMapping.value.href);
	return true; // Prevalidated (relative URLs can only be assigned to a predefined route enum member)
};

export const getURLString = <P extends RootRoutePathValue = RootRoutePathValue>(
	urlMapping: RootURLMapping<P>
): string | RootRoutePathValue => {
	if (urlMapping.type === "absolute" || urlMapping.type === "mailto") return urlMapping.value.href;
	return urlMapping.value.pathPattern;
};
