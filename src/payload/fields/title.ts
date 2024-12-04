import type { TextField } from "payload";
import { deepMerge } from "payload";

export const titleField = (overrides = {}) =>
  deepMerge<TextField>(
    {
      // @ts-expect-error - TFunction type is not automatically merged with the default translations
      label: ({ t }) => t("custom-title"),

      localized: true,
      required: true,
      name: "title",
      type: "text",
    },
    overrides,
  );
