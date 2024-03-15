/**
 * Client-side rendering (CSR) allows generating HTML components on the browser side, such that JavaScript code is
 * executed within the browser that manipulates HTML DOM to build HTML nodes.
 *
 * When a browser requests a webpage, the initial server request returns a minimal HTML file that serves as the
 * application container aka single page app (SPA), and the link to the JavaScript bundle that runs in the browser and
 * generates the web page HTML DOM on client-side. Additionally, clicking a navigation link within the app manipulates
 * the HTML DOM client-side to create the DOM of the requested navigation, instead of requesting the HTML from the
 * server (typically handled by a router module, e.g. react-router-dom).
 *
 * Advantages of CSR:
 * 	- Extremely fast and responsive after initial load: After the initial load, all the HTML for the website is
 * 		generated on the client-side by JavaScript and without any round trips to the server to get the HTML. Any
 *		real-time data fetches can be handled by client-side JavaScript code, making external API calls.
 *
 * Disadvantages of CSR:
 *  - Long initial loading time: Browser must wait for the entire JavaScript bundle to be downloaded and executed on
 * 		the client-side before the initial render. During this time the user has to stare at a blank web page.
 * 		Code-splitting or lazy-loading strategies can be used to reduce the amount of assets that the browser needs to
 * 		download for the initial page render, and this can greatly improve time to interactive (TTI) for apps with large
 * 		bundles.
 * 	- Negative impact on SEO and page ranking: Since CSR web pages are mostly empty and only contain links to the
 * 		JavaScript code that generates the HTML, web crawlers may view them as empty pages. If the JS bundle is large,
 * 		it may show a loading page and the web crawler may not correctly read the page, thus be unable to index it.
 * 	- Blank page if browser JavaScript is disabled: If the user has disabled JavaScript on their browser, the
 * 		JavaScript bundle will never be run on the client-side and so the HTML will never be generated (i.e. the webpage
 * 		will never be rendered). Eventually the user will never see the website and just continue to see a blank page.
 *
 * JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in JavaScript. Browsers do not
 * understand JSX but preconfigured toolkits like Create React App include a JSX transform tool under the hood that
 * converts the JSX code into valid JavaScript code, which can be interpreted by browsers.
 */

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { reportWebVitals } from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { RootProvider } from "./utils/providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<RootProvider />
	</StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
