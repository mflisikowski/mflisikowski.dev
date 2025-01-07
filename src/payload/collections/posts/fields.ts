import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

import { slugField } from "@/payload/custom-fields/slug";

const [postSlugField, postCheckboxField] = slugField();

export const postsFields: CollectionConfig["fields"] = [
  postSlugField,
  postCheckboxField,
  {
    /** Date field docs: https://payloadcms.com/docs/fields/date */
    required: true,
    admin: {
      position: "sidebar",
      date: {
        pickerAppearance: "dayAndTime",
      },
    },
    label: tl("custom:post-published-at"),
    name: "publishedAt",
    type: "date",
  },
  {
    /** Text field docs: https://payloadcms.com/docs/fields/text */
    localized: true,
    required: true,
    unique: true,
    label: tl("custom:post-title"),
    name: "title",
    type: "text",
  },
  {
    /** Upload field docs: https://payloadcms.com/docs/fields/upload */
    filterOptions: {
      mimeType: {
        in: ["image/jpeg", "image/jpg", "image/webp"],
      },
    },
    relationTo: "media",
    required: true,
    label: tl("custom:post-image"),
    type: "upload",
    name: "image",

    typescriptSchema: [() => ({ $ref: `#/definitions/media` })],
  },
  {
    /** Rich text field docs: https://payloadcms.com/docs/fields/rich-text */
    localized: true,
    required: true,
    label: tl("custom:post-excerpt"),
    type: "richText",
    name: "excerpt",
  },
  {
    /** Rich text field docs: https://payloadcms.com/docs/fields/rich-text */
    localized: true,
    required: true,
    label: tl("custom:post-content"),
    type: "richText",
    name: "content",
  },
  {
    /** Relationship field docs: https://payloadcms.com/docs/fields/relationship */
    filterOptions: ({ id }) => ({ id: { not_in: [id] } }),
    relationTo: "posts",
    hasMany: true,
    type: "relationship",
    name: "relatedPosts",
  },
  {
    /** Relationship field docs: https://payloadcms.com/docs/fields/relationship */
    relationTo: "users",
    required: true,
    hasMany: true,
    type: "relationship",
    name: "authors",
    admin: {
      position: "sidebar",
    },
  },
];
