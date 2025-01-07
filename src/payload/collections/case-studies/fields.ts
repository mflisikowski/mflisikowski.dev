import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

import { slugField } from "@/payload/custom-fields/slug";
import { richTextField } from "@/payload/fields/rich-text";
import { textField } from "@/payload/fields/text";
import { uploadField } from "@/payload/fields/upload";

const [caseStudySlugField, caseStudyCheckboxField] = slugField();

const caseStudyFeaturedImage = uploadField({
  required: true,
  name: "featuredImage",
});

const caseStudyIntroContent = richTextField({
  name: "introContent",
});

const caseStudyIndustry = textField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-case-study-industry"),
  name: "industry",
});

const caseStudyUseCase = textField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-case-study-use-case"),
  name: "useCase",
});

const caseStudyUrl = textField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-case-study-url"),
  admin: {
    position: "sidebar",
  },
  name: "url",
});

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

  caseStudyIntroContent,

  {
    type: "row",
    fields: [
      //
      caseStudyIndustry,
      caseStudyUseCase,
    ],
  },

  caseStudyFeaturedImage,
  caseStudyUrl,
];
