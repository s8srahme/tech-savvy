import { AxiosRequestConfig, AxiosResponse } from "axios";

import { instance } from "./axios.instance";

export const API = {
	post: <D extends RequestPayload>(url: string, data: D) =>
		instance.post<POSTResponse, AxiosResponse<POSTResponse, D>, D>(url, data),
	get: <T extends ResponsePayload>(url: string) =>
		instance.get<GETResponse<T>, AxiosResponse<GETResponse<T>, never>, never>(url),
	getMany: <T extends ResponsePayload[]>(url: string, config?: AxiosRequestConfig<never>) =>
		instance.get<GETManyResponse<T>, AxiosResponse<GETManyResponse<T>, never>, never>(url, config),
	patch: <T extends ResponsePayload, D extends RequestPayload>(url: string, data: D) =>
		instance.patch<PATCHResponse<T>, AxiosResponse<PATCHResponse<T>, D>, D>(url, data),
	delete: <D extends string[]>(url: string, config?: AxiosRequestConfig<D>) =>
		instance.get<DELETEResponse, AxiosResponse<DELETEResponse, D>, D>(url, config)
};
