import type { TextField } from "payload";
import { deepMerge } from "payload";

export type TextFieldFieldProps = (overrides?: Partial<TextField>) => TextField;

export const textField: TextFieldFieldProps = (overrides = {}) =>
  deepMerge<TextField>(
    {
      // @ts-expect-error - TFunction type is not automatically merged with the default translations
      label: ({ t }) => t("custom-text"),

      localized: true,
      name: "text",
      type: "text",
    },
    overrides,
  );
