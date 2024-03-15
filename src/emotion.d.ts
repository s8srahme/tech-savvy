import "@emotion/react";

import { Theme as MuiTheme } from "@mui/material";

/**
 * css prop from @emotion/react package accepts a function that is called with your theme as an argument. By default,
 * props.theme is an empty object (type-safe as a default). You can define a theme type by extending the type
 * declarations (module augmentation) via your own declarations file.
 *
 * Module augmentation helps us to extend functionalities to third party libraries you may not have access to or
 * classes in other files. In order to extend a module, first you have to declare a module using the same name and
 * then you will declare an interface with the same name as the class you are trying to extend. In that interface, you
 * can include the properties and methods you want to add to the extended class.
 *
 * TypeScript will merge both the class and the interface because they can be found in the same "./*" module. Remember
 * that interfaces do not contain implementation for methods but only their declarations.
 */

declare module "@emotion/react" {
	export interface Theme extends MuiTheme {}
}
