/**
 * A higher-order component is a function that takes a base component as argument and returns a new component with
 * added (enhanced) functionality. They allow developers to reuse code logic in their projects. In a functional HOC,
 * you can use Hooks for state and side effects.
 *
 * Provider is a HOC provided by react-redux, which will wrap your Redux store in. It will allow you to access the
 * state within store from anywhere inside your application.
 */

import { FC, PropsWithChildren } from "react";

import { Provider } from "react-redux";

import { store } from "store";

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
