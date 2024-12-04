import type { CollectionConfig } from "payload";

export const postsDefaultPopulate: CollectionConfig["defaultPopulate"] = {
  publishedOn: true,
  authors: true,
  image: true,
  title: true,
  slug: true,
};
