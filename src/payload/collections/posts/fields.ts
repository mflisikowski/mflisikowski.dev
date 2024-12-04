import type { CollectionConfig } from "payload";

import { slugField } from "@/payload/custom-fields/slug";
import { titleField } from "@/payload/custom-fields/title";
import { richTextField } from "@/payload/fields/rich-text";

const [postSlugField, postCheckboxField] = slugField();
const postTitle = titleField();

export const postsFields: CollectionConfig["fields"] = [
  postTitle,

  postSlugField,
  postCheckboxField,

  {
    relationTo: "media",
    required: true,
    name: "image",
    type: "upload",
  },
  {
    label: "Use Youtube video as header image",
    name: "useVideo",
    type: "checkbox",
  },
  {
    label: "Video URL",
    name: "videoUrl",
    type: "text",
    admin: {
      condition: (_, siblingData) => siblingData?.useVideo,
    },
  },
  richTextField({
    name: "excerpt",
  }),
  {
    name: "content",
    type: "richText",
  },
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
  {
    required: true,
    type: "date",
    name: "publishedOn",
    admin: {
      date: {
        pickerAppearance: "dayAndTime",
      },
      position: "sidebar",
    },
  },
];
