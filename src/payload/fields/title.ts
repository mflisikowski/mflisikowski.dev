import type { TextField } from "payload";

export const titleField = (overrides = {}): TextField => {
  return {
    localized: true,
    required: true,
    name: "title",
    type: "text",

    // @ts-expect-error - TFunction type is not automatically merged with the default translations
    label: ({ t }) => t("custom-title"),

    ...overrides,
  };
};
