// prettier-ignore
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";

// https://github.com/payloadcms/payload/pull/10115 - wait for the PR to be merged, then we can use the translation function here
// import { tl } from "@/i18n/translations";

import { pagePublishedAt } from "@/payload/custom-fields/published-at";
import { slugField } from "@/payload/custom-fields/slug";
import { titleField } from "@/payload/custom-fields/title";
import { reusableBlockField } from "@/payload/fields/block";

const [pageSlugField, pageCheckboxField] = slugField();
const pageBlocks = reusableBlockField();
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
        name: "content",
        // label: tl("custom:field-content"),
        fields: [pageBlocks],
      },
      {
        name: "meta",
        // label: tl("custom:field-seo"),
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
