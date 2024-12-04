import type { CollectionConfig } from "payload";

import { richTextField } from "@/config/payload-fields/rich-text";
import { slugField } from "@/config/payload-fields/slug";
import { titleField } from "@/config/payload-fields/title";

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
