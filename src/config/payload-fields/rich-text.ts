import type { FeatureProviderServer } from "@payloadcms/richtext-lexical";
import type { RichTextField } from "payload";

export type RichText = (
  overrides?: Partial<RichTextField>,
  additionalFeatures?: FeatureProviderServer[],
) => RichTextField;

export const richTextField: RichText = (overrides = {}): RichTextField => {
  return {
    localized: true,
    required: true,

    name: "richText",
    type: "richText",

    label: {
      pl: "Edytor tekstu",
      en: "Rich-Text editor",
    },

    ...overrides,
  };
};
