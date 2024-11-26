import type { CollectionConfig } from "payload";

import { authenticated } from "@/access/authenticated";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";

import { populatePublishedAt } from "@/hooks/payload-populate-published-at";
import { revalidatePage } from "@/hooks/payload-revalidate-page";

export const Pages: CollectionConfig<"pages"> = {
  slug: "pages",

  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pagess'>
  defaultPopulate: {
    title: true,
    slug: true,
  },

  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    useAsTitle: "title",
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
  ],

  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePage],
  },

  versions: {
    maxPerDoc: 50,
  },
};
