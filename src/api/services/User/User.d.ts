/**
 * .d.ts files are declaration files that contain only type information. These files do not produce .js outputs; they
 * are only used for typechecking. If you have a JavaScript file and you want to add type information to it, you can
 * also do that through a declaration file (i.e. incorporate types in an existing JS project). It is like splitting a
 * .ts file (which declares an ES module) between two files: a .js file (containing the runtime implementation of the
 * module, without any type information) and a .d.ts file (containing the type information about the module, without
 * any runtime implementation).
 *
 * Commonly, if you write a TypeScript library you generate the JavaScript file and the declaration file (which
 * contains only type information about a module's exports, without any implementation or runtime code) and package
 * those rather than the original TypeScript, so that the library can be consumed from JavaScript and TypeScript
 * applications. Then from your TypeScript code you get the benefit of static type checking while still using a pure
 * JS library.
 *
 * .d.ts files have the ability to declare type information for the global scope (available everywhere in your
 * program without needing any exports/imports inside the .ts files). As long as such a .d.ts file is included in
 * compilation (usually there can only be a single .d.ts file in one project), their declarations will be universally
 * available. It is also possible to tweak the compiler settings so that all interface/type declaration files are
 * imported into every .ts file under src directory (pre-configured in create-react-app), making types in declaration
 * subfiles also behave as global types.
 *
 * For collections of types, you can alternatively put them in .ts files as explicit imports are a great way to
 * organize code. However, this could result in cyclic dependencies which occur when two or more modules reference each
 * other (A -> B -> A). While circular dependencies may not directly result in bugs (i.e. Node.js does support circular
 * require/import statements between modules). they will almost always have unintended consequences such as messy code,
 * slow TypeScript type-checking and frequent dev-server JavaScript heap out of memory crashes. Cyclic dependencies are
 * usually an indication of bad code design and they should be refactored/removed if at all possible.
 *
 * Type aliases allow defining types with a custom name (i.e. an alias) and can be used for primitives (e.g. number,
 * string) or more complex types (e.g. objects, arrays). All interface features are available in types or have
 * equivalents, except for declaration merging.
 */

type UserPermission = "create" | "update" | "delete" | "analyze";
type UserRole = "admin" | "editor" | "author";
type User = {
	id: string;
	name: {
		lastName: string;
		firstName: string;
	};
	email: string;
	avatar?: URL;
	birthDate: Date;
	registeredOn: Date;
	roles: UserRole[];
	permissions: UserPermission[];
};

type UserResponsePayload = User;
// By passing a union to the second argument to Exclude utility type, you can remove multiple members at once
type UserRequestPayload = Exclude<User, "id" | "registeredAt">;
