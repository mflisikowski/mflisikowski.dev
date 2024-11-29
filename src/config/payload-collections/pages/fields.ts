// prettier-ignore
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";

import { ContentBlock } from "@/config/payload-blocks/content";
import { CtaBlock } from "@/config/payload-blocks/cta";
import { MediaBlock } from "@/config/payload-blocks/media";
import { slugField } from "@/config/payload-fields/slug";

export const pagesFields: CollectionConfig["fields"] = [
  {
    name: "title",
    type: "text",
    required: true,
  },
  {
    type: "tabs",
    tabs: [
      {
        label: "Content",
        fields: [
          {
            name: "layout",
            type: "blocks",
            blocks: [ContentBlock, MediaBlock, CtaBlock],
            required: true,
          },
        ],
      },
      {
        name: "meta",
        label: "SEO",
        fields: [
          OverviewField({
            titlePath: "meta.title",
            descriptionPath: "meta.description",
            imagePath: "meta.image.url",
          }),

          MetaTitleField({
            hasGenerateFn: true,
          }),

          MetaImageField({
            relationTo: "media",
          }),

          MetaDescriptionField({}),
          PreviewField({
            // if the `generateUrl` function is configured
            hasGenerateFn: true,

            // field paths to match the target field for data
            titlePath: "meta.title",
            descriptionPath: "meta.description",
          }),
        ],
      },
    ],
  },
  {
    name: "publishedAt",
    type: "date",
    admin: {
      position: "sidebar",
    },
  },

  ...slugField(),
];
