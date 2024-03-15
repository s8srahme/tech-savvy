/**
 * R E A C T  H O O K S
 *
 * useEffect Hook lets you run some code after rendering so that you can synchronize your component with some system
 * outside of React (external system) for handling side effects (e.g. fetching data, working with subscriptions,
 * interacting with DOM). Some components need to stay connected to the network, browser APIs or a third-party
 * library, while they are displayed on the page. These systems are not controlled by React, so they are called
 * external. This hook runs asynchronously after the browser repaints the screen.
 *
 * You need to pass two arguments to useEffect Hook:
 * 	- a setup function with setup code that connects to that system (could return a cleanup function with cleanup
 * 		code that disconnects from that system)
 * 	- a list of dependencies including every value from your component used inside of those functions
 *
 * React calls your setup and cleanup functions whenever it is necessary, which may happen multiple times:
 * 	- when your component is added to the page (mounts)
 * 	- after every re-render of your component where the dependencies have changed:
 * 		- first, your cleanup code runs with the old props and state
 * 		- then, your setup code runs with the new props and state
 * 	- after your component is removed from the page (unmounts)
 *
 * useLayoutEffect Hook is a variation of useEffect Hook that runs synchronously before the browser repaints the
 * screen. It was designed to handle side effects that require immediate DOM layout updates. It is highly encouraged in
 * specific use cases, such as when measuring DOM elements or transitioning elements.
 *
 *
 * E V E N T  L I S T E N E R S
 *
 * React gives you tools to safely add and remove an event listener (supported by event targets, such as element,
 * document and window) when a component mounts and unmounts from the Document Object Model (DOM), giving you control
 * over events while preventing memory leaks from improperly removed listeners.
 *
 * addEventListener() method of an event target sets up a function that will be called whenever the specified event
 * is delivered to the target. It works by adding a callback function or an object that implements a handleEvent()
 * function to the list of event listeners for the specified event type on the event target on which it is called. If
 * the function or object is already in the list of event listeners for this target, then it is not added a second
 * time.
 *
 * removeEventListener() method of an event target removes a previously registered event listener from that target. The
 * event listener to be removed is identified using a combination of the event type, the event listener function itself
 * and various optional options that may affect the matching process. Calling it with arguments that do not identify
 * any currently registered event listener on the event target has no effect.
 */

import { useEffect, useState } from "react";

export const useElementSize = (element: HTMLElement | null) => {
	const [elementSize, setElementSize] = useState([0, 0]);

	const handleElementResize = () => {
		if (element) setElementSize([element.offsetWidth, element.offsetHeight]);
	};

	// Equivalent to componentDidMount
	useEffect(() => {
		handleElementResize();
		/**
		 * Resize events are only fired on the window object. Only handlers registered on the window object will receive
		 * resize events.
		 */
		if (element) window.addEventListener("resize", handleElementResize);
		// Equivalent to componentWillUnmount
		return () => {
			// Remove event listeners when the component unmounts
			if (element) window.removeEventListener("resize", handleElementResize);
		};
	}, [element]);

	return elementSize;
};
