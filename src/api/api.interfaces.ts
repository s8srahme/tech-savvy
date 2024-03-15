/**
 * Interface gives the structure (with properties and methods) that an object must adhere to. Alternately, it defines a
 * public contract that can be implemented by a class.
 */

import { AxiosResponse } from "axios";

// Create a generic interface with all possible methods needed to interact with APIs. T and D refer to response and
// request body (payload) types.

export interface IDataService<T extends ResponsePayload, D> {
	// You cannot use protected or private access modifier for interface fields, which are more of an implementation
	// detail
	readonly endpointPath: string;

	// GET methods
	readonly retrieveOne: (id: string) => Promise<AxiosResponse<GETResponse<T>, never>>;
	// readonly keyword prevents class members from being changed after its initial definition (i.e. either
	// at its declaration or in the constructor). With never type, you can exclude some undesired types.
	readonly retrieveMany: (params: RequestParam) => Promise<AxiosResponse<GETManyResponse<T[]>, never>>;

	// POST methods
	readonly createOne: (data: D) => Promise<AxiosResponse<POSTResponse, D>>;

	// PATCH methods
	readonly updateOne: (id: string, data: D) => Promise<AxiosResponse<PATCHResponse<T>, D>>;

	// DELETE methods
	readonly deleteOne: (id: string) => Promise<AxiosResponse<DELETEResponse, never>>;
	readonly deleteAll?: (ids: string[]) => Promise<AxiosResponse<DELETEResponse, string[]>>;
}

// export interface IAuthService {
// 	readonly endpointPath: string;
// 	readonly login: (email: string, password: string) => Promise<User>;
// 	readonly refreshToken: () => Promise<User>;
// 	readonly logout: () => Promise<void>;
// 	readonly isLoggedIn: () => boolean;
// 	readonly getExpiration: () => string;
// }
