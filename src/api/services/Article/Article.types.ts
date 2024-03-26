import { ArticleCategory } from "./Article.constants";
import type { Author } from "../Author/Author.types";

// A P I  M O D E L  T Y P E S

export type ArticleAttributes = {
	id: string;
	title: string;
	description: string;
	image?: string; // Optional properties automatically have undefined ADDED to their types
	alt: string; // TODO: Combine image URL and alt text into one object
	slug: string;
	claps: number;
	category: ArticleCategory;
	authorId?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
};

// A P I  M A P P E R  R E T U R N  T Y P E S

export type Article = Omit<ArticleAttributes, "deletedAt"> & { author: Author };

// A P I  C O N T R O L L E R  P A R A M E T E R  T Y P E S

export type CreateArticleParams = Omit<ArticleAttributes, "id" | "slug" | "createdAt" | "updatedAt" | "deletedAt">;
export type UpdateArticleParams = Partial<CreateArticleParams>;

// C L I E N T  P A Y L O A D  T Y P E S

export type ArticleResponsePayload = Article;
export type ArticleRequestPayload = CreateArticleParams;
