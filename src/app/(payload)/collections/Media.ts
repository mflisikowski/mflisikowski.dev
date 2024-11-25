import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
// prettier-ignore
import { FixedToolbarFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",

  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },

  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    }
  ],
};
