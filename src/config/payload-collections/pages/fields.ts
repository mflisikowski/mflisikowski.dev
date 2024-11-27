// prettier-ignore
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";

import { slugField } from "@/components/(payload)/fields/slug";

import { ContentBlock } from "@/config/payload-blocks/content";

import type { PageCollectionConfig } from ".";

export const pagesFields: PageCollectionConfig["fields"] = [
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
            blocks: [ContentBlock],
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
            imagePath: "meta.image",
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
