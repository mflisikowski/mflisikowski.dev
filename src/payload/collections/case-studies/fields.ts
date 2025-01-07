import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

import { slugField } from "@/payload/custom-fields/slug";

const [caseStudySlugField, caseStudyCheckboxField] = slugField();

export const caseStudiesFields: CollectionConfig["fields"] = [
  {
    /** Text field docs: https://payloadcms.com/docs/fields/text */
    localized: true,
    required: true,
    unique: true,
    label: tl("custom:case-study-title"),
    name: "title",
    type: "text",
  },

  caseStudySlugField,
  caseStudyCheckboxField,

  {
    /** Rich text field docs: https://payloadcms.com/docs/fields/rich-text */
    localized: true,
    required: true,
    label: tl("custom:case-study-intro-content"),
    type: "richText",
    name: "intro",
  },

  {
    type: "row",
    fields: [
      {
        /** Text field docs: https://payloadcms.com/docs/fields/text */
        localized: true,
        required: true,
        label: tl("custom:case-study-industry"),
        name: "industry",
        type: "text",
      },
      {
        /** Text field docs: https://payloadcms.com/docs/fields/text */
        localized: true,
        required: true,
        label: tl("custom:case-study-uses"),
        name: "uses",
        type: "text",
      },
    ],
  },

  {
    /** Upload field docs: https://payloadcms.com/docs/fields/upload */
    filterOptions: {
      mimeType: {
        in: ["image/jpeg", "image/webp"],
      },
    },
    relationTo: "media",
    required: true,
    unique: true,
    label: tl("custom:case-study-image"),
    type: "upload",
    name: "image",

    typescriptSchema: [() => ({ $ref: `#/definitions/media` })],
  },

  {
    /** Text field docs: https://payloadcms.com/docs/fields/text */
    label: tl("custom:case-study-url"),
    unique: true,
    type: "text",
    name: "url",
  },
];
