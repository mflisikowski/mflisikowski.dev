import type { CollectionConfig } from "payload";

export const caseStudiesDefaultPopulate: CollectionConfig["defaultPopulate"] = {
  title: true,
  slug: true,
  url: true,
};
