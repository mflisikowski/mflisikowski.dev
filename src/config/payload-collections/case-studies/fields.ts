import type { CollectionConfig } from "payload";

import { richText } from "@/config/payload-fields/rich-text";
import { slugField } from "@/config/payload-fields/slug";

export const caseStudiesFields: CollectionConfig["fields"] = [
  {
    required: true,
    name: "title",
    type: "text",
  },
  richText({
    name: "introContent",
  }),
  {
    type: "row",
    fields: [
      {
        name: "industry",
        type: "text",
      },
      {
        name: "useCase",
        type: "text",
      },
    ],
  },
  {
    relationTo: "media",
    required: true,
    name: "featuredImage",
    type: "upload",
  },
  {
    label: "URL",
    name: "url",
    type: "text",
    admin: {
      position: "sidebar",
    },
  },

  ...slugField(),
];
