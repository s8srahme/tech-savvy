import { apiConfig } from "@/api/api.config";
import { IDataService } from "@/api/api.interfaces";
import { API } from "@/api/axios/axios.helpers";
import { RequestParam } from "@/api/axios/axios.types";

import type { ArticleRequestPayload, ArticleResponsePayload } from "./Article.types";

class ArticleService implements IDataService<ArticleResponsePayload, ArticleRequestPayload> {
	constructor(readonly endpointPath: string) {}

	readonly retrieveOne = (id: string) => API.get<ArticleResponsePayload>(`${this.endpointPath}/${id}`);

	readonly retrieveMany = (params: RequestParam) =>
		API.getMany<ArticleResponsePayload[]>(this.endpointPath, { params });

	readonly createOne = (data: ArticleRequestPayload) => API.post<ArticleRequestPayload>(this.endpointPath, data);

	readonly updateOne = (id: string, data: ArticleRequestPayload) =>
		API.patch<ArticleResponsePayload, ArticleRequestPayload>(`${this.endpointPath}/${id}`, data);

	readonly deleteOne = (id: string) => API.delete<never>(`${this.endpointPath}/${id}`);

	readonly deleteAll = (ids: string[]) => API.delete<string[]>(this.endpointPath, { data: ids });
}

export const articleService = new ArticleService(apiConfig.endpointPath.ARTICLES);
