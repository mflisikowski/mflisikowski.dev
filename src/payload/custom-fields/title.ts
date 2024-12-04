import type { TextFieldFieldProps } from "@/payload/fields/text";
import { textField } from "@/payload/fields/text";

export const titleField: TextFieldFieldProps = (overrides = {}) =>
  textField({
    // @ts-expect-error - TFunction type is not automatically merged with the default translations
    label: ({ t }) => t("custom-title"),

    required: true,
    name: "title",

    ...overrides,
  });
