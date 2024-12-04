import type { CollectionConfig } from "payload";

import { slugField } from "@/payload/custom-fields/slug";
import { titleField } from "@/payload/custom-fields/title";
import { richTextField } from "@/payload/fields/rich-text";

const [caseStudySlugField, caseStudyCheckboxField] = slugField();
const caseStudyTitle = titleField();

export const caseStudiesFields: CollectionConfig["fields"] = [
  caseStudyTitle,

  caseStudySlugField,
  caseStudyCheckboxField,

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
];
