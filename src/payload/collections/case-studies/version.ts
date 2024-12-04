import type { CollectionConfig } from "payload";

export const caseStudiesVersions: CollectionConfig["versions"] = {
  drafts: {
    autosave: {
      interval: 100, // We set this interval for optimal live preview
    },
  },

  maxPerDoc: 5,
};
