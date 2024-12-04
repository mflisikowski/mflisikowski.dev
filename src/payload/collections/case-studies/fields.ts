import type { CollectionConfig } from "payload";

import { slugField } from "@/payload/custom-fields/slug";
import { richTextField } from "@/payload/fields/rich-text";
import { titleField } from "@/payload/fields/title";

const caseStudyTitle = titleField();

export const caseStudiesFields: CollectionConfig["fields"] = [
  caseStudyTitle,

  richTextField({
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
