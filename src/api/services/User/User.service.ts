/**
 * Technically, function declaration establishes the names and characteristics of a function but does not allocate
 * storage for it. Function definition specifies the body for a function, associates an identifier with the function
 * and allocates storage for it.
 *
 * For functions in TS:
 * 	- you have to use the function keyword and specify a name for the function. You can use a declared function before
 * 		the line it was initialized (hoisting).
 *	- to make a function expression, you can use the function keyword without a name (which makes it an anonymous
 *		function) and assign it to a variable (to be used later). When you call the variable, it will execute the
 *		logic of the function expression assigned to it. Expressed functions cannot be used before their initialization
 *		(declared variables are hoisted with a default initialization of undefined).
 * 	- IIFEs are functions that are immediately invoked after creation, since you do not intend to use the function later
 * 	- arrow functions cannot be declared and they can only be expressed
 * 	- you can pass a function declaration or expression (anonymous function) when using callback functions
 *
 * Node.js already exports in-built modules which include fs, path and http to name a few. You can also create your own
 * modules. Node.js treats each file in a Node project as a separate module that can export values and functions from
 * the file. Modules help developers adhere to the DRY (Don't Repeat Yourself) principle in programming. They help to
 * break down complex logic into small, reusable and manageable chunks. A module's code is loaded and initialized only
 * once when it is first imported. After that, the exact same module handle is returned from subsequent attempts to
 * import it.
 *
 * There exists a global module object in each file and that module object has an exports property (an empty object),
 * which you can use to export functions and values from current module/file (to be used by other files).
 */

import { apiConfig } from "@/api/api.config";
import { IDataService } from "@/api/api.interfaces";
import { API } from "@/api/axios/axios.helpers";

// Create a data service with methods needed to interact with User API (via CRUD requests) using the axios base
// instance
class UserService implements IDataService<UserResponsePayload, UserRequestPayload> {
	// Define a class member in the constructor
	constructor(readonly endpointPath: string) {}

	// When creating class methods, you should avoid the this value being bound to something else other than the class
	// instance. To do that, use arrow functions as direct values of class methods.
	readonly retrieveOne = (id: string) => API.get<UserResponsePayload>(`${this.endpointPath}/${id}`);

	// Perform filter, paginate, sort, search, etc. Second parameter to axios.get() is options, where Axios will
	// serialize options.params and add it to the query string, e.g. { params: { answer: 42 } } is equivalent to
	// ?answer=42.
	readonly retrieveMany = (params: RequestParam) =>
		API.getMany<UserResponsePayload[]>(this.endpointPath, {
			params
		});

	readonly createOne = (data: UserRequestPayload) => API.post<UserRequestPayload>(this.endpointPath, data);

	readonly updateOne = (id: string, data: UserRequestPayload) =>
		API.patch<UserResponsePayload, UserRequestPayload>(`${this.endpointPath}/${id}`, data);

	readonly deleteOne = (id: string) => API.delete<never>(`${this.endpointPath}/${id}`);

	readonly deleteAll = (ids: string[]) => API.delete<string[]>(this.endpointPath, { data: ids });
}

// Same object is returned if the module has already been imported from the same path
export const userService = new UserService(apiConfig.endpointPath.AUTHORS);
