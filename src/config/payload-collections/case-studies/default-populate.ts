import type { CollectionConfig } from "payload";

export const caseStudiesDefaultPopulate: CollectionConfig["defaultPopulate"] = {
  featuredImage: true,
  title: true,
  slug: true,
  url: true,
};
