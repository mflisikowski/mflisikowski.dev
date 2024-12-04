import type { CollectionConfig } from "payload";

export const pagesVersions: CollectionConfig["versions"] = {
  drafts: {
    autosave: {
      interval: 100, // We set this interval for optimal live preview
    },
  },

  maxPerDoc: 5,
};
