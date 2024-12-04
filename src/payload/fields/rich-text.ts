import type { FeatureProviderServer } from "@payloadcms/richtext-lexical";
import type { RichTextField } from "payload";
import { deepMerge } from "payload";

export type RichText = (
  overrides?: Partial<RichTextField>,
  additionalFeatures?: FeatureProviderServer[],
) => RichTextField;

export const richTextField: RichText = (overrides = {}) =>
  deepMerge<RichTextField>(
    {
      // @ts-expect-error - TFunction type is not automatically merged with the default translations
      label: ({ t }) => t("custom-rich-text"),

      localized: true,
      required: true,
      name: "richText",
      type: "richText",
    },
    overrides,
  );
