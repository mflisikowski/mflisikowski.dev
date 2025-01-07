import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

import { slugField } from "@/payload/custom-fields/slug";
import { checkboxField } from "@/payload/fields/checkbox";
import { dateField } from "@/payload/fields/date";
import { richTextField } from "@/payload/fields/rich-text";
import { textField } from "@/payload/fields/text";

const [postSlugField, postCheckboxField] = slugField();

const postUseVideoCheckbox = checkboxField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-post-use-video"),

  name: "useVideo",
});

const postPublishedOnDate = dateField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-post-published-on"),

  admin: {
    date: {
      pickerAppearance: "dayAndTime",
    },
    position: "sidebar",
  },

  required: true,
  name: "publishedOn",
});

const postContent = richTextField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-post-content"),

  required: true,
  name: "content",
});

const postExcerpt = richTextField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-post-excerpt"),

  required: true,
  name: "excerpt",
});

const postVideoUrl = textField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-post-video-url"),

  admin: {
    condition: (_, siblingData) => siblingData?.useVideo,
  },

  name: "videoUrl",
});

export const postsFields: CollectionConfig["fields"] = [
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

  postSlugField,
  postCheckboxField,

  postUseVideoCheckbox,
  postVideoUrl,

  postExcerpt,
  postContent,

  {
    filterOptions: ({ id }) => {
      return {
        id: {
          not_in: [id],
        },
      };
    },
    relationTo: "posts",
    hasMany: true,
    type: "relationship",
    name: "relatedPosts",
  },
  {
    relationTo: "users",
    required: true,
    hasMany: true,
    type: "relationship",
    name: "authors",
    admin: {
      position: "sidebar",
    },
  },

  postPublishedOnDate,
];
