/**
 * useContext is a React Hook that lets you read and subscribe to context from your component, by returning the context
 * value passed to the closest SomeContext.Provider above the calling component in the tree (not affected by providers
 * returned from the same component). If there is no such provider, then the returned value will be the defaultValue
 * you have passed to createContext for that context.
 *
 * React automatically re-renders components that read a particular context if it changes, i.e. returned value is
 * always up-to-date. Skipping re-renders with memo does not prevent the children receiving fresh context values.
 *
 * It does not matter how many layers of components there are between the provider and the calling component. When a
 * component anywhere inside of <Context.Provider> calls useContext, it will receive the corresponding context value by
 * searching upwards and does not consider providers in the component from which you are calling useContext.
 */

import { FC, PropsWithChildren, createContext, useCallback, useMemo } from "react";

// import { useNavigate } from "react-router-dom";

import { Author } from "@/api/services";

import { useLocalStorage } from "../hooks";

export interface AuthContextState {
	user: Author | null;
	login: (data: Author) => void;
	logout: () => void;
}

// Specifying a fallback default value
// const initialAuthState: AuthContextState = {
// 	user: null,
// 	login: (data: User) => {},
// 	logout: () => {}
// };

export const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	// To update context, combine it with state. Declare a state variable in the parent component and pass the current
	// state down as the context value to the provider.

	const [currentUser, setCurrentUser] = useLocalStorage<Author | null>("user", null);
	// const navigate = useNavigate();

	// Authenticate user
	const login = useCallback(
		// async (response: User) =>
		() => {
			// storeCredentials(response.credentials);
			// setCurrentUser(response.user);
			// navigate("/profile");
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[]
	);

	// Sign out logged-in user
	const logout = useCallback(() => {
		setCurrentUser(null);
		// navigate("/", { replace: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/**
	 * Context value is a TS object with three properties, two of which are functions. Whenever the app re-renders
	 * (e.g. on a route update), this will be a different object pointing at a different function, so React will also
	 * have to re-render all components deep in the tree that call useContext(AuthContext).
	 *
	 * In smaller apps, this is not a problem. However, there is no need to re-render them if the underlying data (i.e.
	 * currentUser) has not changed. To help React take advantage of that fact, you may wrap the functions with
	 * useCallback and wrap the object creation into useMemo (for performance optimization).
	 */

	const contextValue: AuthContextState = useMemo(
		() => ({
			user: currentUser,
			login,
			logout
		}),
		[currentUser, login, logout]
	);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
