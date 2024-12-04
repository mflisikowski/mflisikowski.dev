import type { CollectionConfig } from "payload";

import { richTextField } from "@/config/payload-fields/rich-text";
import { slugField } from "@/config/payload-fields/slug";
import { titleField } from "@/config/payload-fields/title";

const postTitle = titleField();

export const postsFields: CollectionConfig["fields"] = [
  postTitle,

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

  ...slugField(),
];
