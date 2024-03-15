/**
 * Rendering means that React is calling your component, which is a function. The JSX you return from that function is
 * like a snapshot of the UI in time. Its props, event handlers and local variables were all calculated using its state
 * at the time of the render.
 *
 * Unlike a photograph or a movie frame, the UI snapshot you return is interactive. It includes logic like event
 * handlers that specify what happens in response to inputs. React updates the screen to match this snapshot and
 * connects the event handlers. As a result, pressing a button (for example) will trigger an event handler from your
 * JSX.
 *
 * When React re-renders a component:
 *  - React calls your function again
 *  - your function returns a new JSX snapshot
 *  - React then updates the screen to match the snapshot your function returned
 *
 * As a component's memory, state is not like a regular variable that disappears after your function returns. State
 * actually lives in React itself - outside of your function. When React calls your component, it gives you a snapshot
 * of the state for that particular render, i.e. your component returns a snapshot of the UI with a fresh set of props
 * and event handlers in its JSX, all calculated using the state values from that render.
 *
 * A state variable's value never changes within a render, even if its event handler's code is asynchronous. Its value
 * was fixed when React took the snapshot of the UI by calling your component. Setting state only changes it for the
 * next render.
 */

import { FC } from "react";

interface AuthContainerProps {}

export const AuthContainer: FC<AuthContainerProps> = () => {
	return null;
};
