import type { CollectionConfig } from "payload";

// This config controls what's populated by default when a page is referenced
// https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
// Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pagess'>
export const pagesDefaultPopulate: CollectionConfig["defaultPopulate"] = {
  title: true,
  slug: true,
};
