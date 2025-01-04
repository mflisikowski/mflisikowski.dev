// prettier-ignore
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

import { fields as heroFields } from "@/payload/collections/pages/fields-hero";
import { contentBlockField } from "@/payload/custom-fields/content-block";
import { pagePublishedAt } from "@/payload/custom-fields/published-at";
import { slugField } from "@/payload/custom-fields/slug";

const [pageSlugField, pageCheckboxField] = slugField("pageTitle");

export const pagesFields: CollectionConfig["fields"] = [
  pagePublishedAt,

  {
    /** Text field docs: https://payloadcms.com/docs/fields/text */
    label: tl("custom:page-title"),
    name: "pageTitle",

    localized: true,
    required: true,
    unique: true,
    type: "text",

    admin: {
      // TODO: Check if this is now possible in the new version of payload
      // placeholder: tl("custom:page-title"),
    },
  },

  pageSlugField,
  pageCheckboxField,

  {
    type: "tabs",
    tabs: [
      {
        fields: [
          {
            fields: heroFields,
            type: "group",
            name: "hero",
          },
        ],
        label: tl("custom:collection-hero"),
      },
      {
        fields: [contentBlockField()],
        label: tl("custom:collection-content"),
      },
      {
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
        label: tl("custom:collection-seo"),
        name: "meta",
      },
    ],
  },
];
