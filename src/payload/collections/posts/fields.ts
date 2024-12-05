import type { CollectionConfig } from "payload";

import { slugField } from "@/payload/custom-fields/slug";
import { titleField } from "@/payload/custom-fields/title";
import { checkboxField } from "@/payload/fields/checkbox";
import { dateField } from "@/payload/fields/date";
import { richTextField } from "@/payload/fields/rich-text";
import { textField } from "@/payload/fields/text";
import { uploadField } from "@/payload/fields/upload";

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

const postImage = uploadField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-post-image"),

  required: true,
  name: "image",
});

const postTitle = titleField();

export const postsFields: CollectionConfig["fields"] = [
  postTitle,
  postImage,

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
