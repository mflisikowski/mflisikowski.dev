// prettier-ignore
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";

import { ContentBlock } from "@/payload/blocks/content";
import { CtaBlock } from "@/payload/blocks/cta";
import { MediaBlock } from "@/payload/blocks/media";
import { pagePublishedAt } from "@/payload/custom-fields/published-at";
import { slugField } from "@/payload/custom-fields/slug";
import { titleField } from "@/payload/custom-fields/title";
import { reusableBlockField } from "@/payload/fields/block";

const [pageSlugField, pageCheckboxField] = slugField();
const pageBlocks = reusableBlockField({ name: "layout" });
const pageTitle = titleField();

export const pagesFields: CollectionConfig["fields"] = [
  pagePublishedAt,
  pageTitle,

  pageSlugField,
  pageCheckboxField,

  {
    type: "tabs",
    tabs: [
      {
        label: "Content",
        fields: [pageBlocks],
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
