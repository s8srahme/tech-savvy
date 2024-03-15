/**
 * Hooks are functions that let you hook into React state, lifecycle methods and context only from functional
 * components or from custom Hooks. Hooks do not work inside classes or regular TS functions. React provides a few
 * built-in Hooks and you can also create your own Hooks to reuse stateful behavior between different components.
 *
 * useState is a Hook to create, update and manipulate some local state (preserved between re-renders) inside
 * functional components. The initialState argument (which is ignored after the initial render) can be a value of any
 * type or an initializer function (which should be pure, should take no arguments and should return a value of any
 * type). React will call your initializer function when initializing the component and store its return value as the
 * initial state (computation here also happens only once and ignored on the next renders).
 *
 * States are variables that hold data which your component depends on and may change over time. Whenever these
 * variables change, React updates the UI by re-rendering the component (along with all its subsequent child components
 * regardless of whether their props have changed or not) in the DOM with the current value of the state variables.
 */

/**
 * Web Storage API provides two storage mechanisms by which browsers can store key/value pairs in a much more intuitive
 * fashion than using cookies, where:
 *	- sessionStorage stores data only for a session, i.e. data is stored for a specific domain until the browser (or
 *		tab) is closed
 *	- localStorage does the same thing but persists even when the browser is closed and reopened. It stores data with
 * 		no expiration date and gets cleared only through JavaScript or clearing the browser cache. Data stored in the
 * 		localStorage object from a particular domain can be accessed by any page on that domain.
 *		NOTE: When the last private tab is closed, data stored in the localStorage object of a site opened in a private
 *		tab or incognito mode is cleared.
 *
 * These mechanisms are available via Window.sessionStorage and Window.localStorage properties, i.e. Window object
 * implements WindowLocalStorage and WindowSessionStorage objects, which the localStorage and sessionStorage properties
 * hang off. Invoking one of these will create an instance of the Storage object, through which data items can be set,
 * retrieved and removed.
 *
 * HTTP cookies are text files that a website's server creates and sends to new users who visit the site. When you
 * connect, the server generates the information that is saved in a cookie. This information is labeled with an ID that
 * is unique to you and your computer, therefore used to identify a user. They save data such as authentication and
 * shopping cart information to help personalize a user's experience. Cookies are sent to the server using HTTP headers
 * from the browser, whereas localStorage and sessionStorageare are only accessed by the application as client-side
 * data storage.
 */

import { useState } from "react";

// Create a generic function that accepts the generic type parameter T (which is used in the argument and return types)
// and returns a tuple (which is a typed array with fixed number of elements whose types are known, but need not be the
// same)

export const useLocalStorage = <T>(keyName: string, initialValue: T): [T, (value: T) => void, () => void] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		// NOTE: Get the current value from local storage associated with the given key or initialValue if the given key
		// does not exist
		try {
			const item = window.localStorage.getItem(keyName);
			return item !== null ? (JSON.parse(item) as T) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	// Create handler function for storing value in local storage
	const setValue = (value: T) => {
		try {
			// Calling set function many times does not update the state variable in the already running code. You may
			// pass an updater function to set function instead of the next state directly. It takes the pending state
			// (prevState) and calculates the next state from it. React puts only updater functions in a queue and calls
			// them in order during the next renders.
			setStoredValue(value);
			window.localStorage.setItem(keyName, JSON.stringify(value));
		} catch (error) {
			// FIXME: Keeping this single lined won't scale
			console.log(error);
		}
	};

	const removeValue = () => {
		try {
			window.localStorage.removeItem(keyName);
		} catch (error) {
			console.log(error);
		}
	};

	return [storedValue, setValue, removeValue];
};
