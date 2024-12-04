// prettier-ignore
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";

import { ContentBlock } from "@/payload/blocks/content";
import { CtaBlock } from "@/payload/blocks/cta";
import { MediaBlock } from "@/payload/blocks/media";
import { slugField } from "@/payload/custom-fields/slug";
import { dateField } from "@/payload/fields/date";
import { titleField } from "@/payload/fields/title";

const pagePublishedAt = dateField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-pagePublishedAt"),
  admin: {
    position: "sidebar",
  },
  name: "publishedAt",
});

const pageTitle = titleField();
const pageSlug = slugField();

export const pagesFields: CollectionConfig["fields"] = [
  pagePublishedAt,
  pageTitle,

  ...pageSlug,

  {
    type: "tabs",
    tabs: [
      {
        label: "Content",
        fields: [
          {
            localized: true,
            required: true,
            blocks: [ContentBlock, MediaBlock, CtaBlock],
            name: "layout",
            type: "blocks",
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
];
