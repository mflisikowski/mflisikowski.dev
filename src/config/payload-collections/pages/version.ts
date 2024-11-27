import type { PageCollectionConfig } from ".";

export const pagesVersions: PageCollectionConfig["versions"] = {
  drafts: {
    autosave: {
      interval: 100, // We set this interval for optimal live preview
    },
  },

  maxPerDoc: 50,
};
