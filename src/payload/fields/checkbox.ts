import type { CheckboxField } from "payload";
import { deepMerge } from "payload";

export type CheckboxFieldProps = (overrides?: Partial<CheckboxField>) => CheckboxField;

export const checkboxField: CheckboxFieldProps = (overrides = {}) =>
  deepMerge<CheckboxField>(
    {
      // @ts-expect-error - TFunction type is not automatically merged with the default translations
      label: ({ t }) => t("custom-checkbox"),

      localized: true,
      name: "checkbox",
      type: "checkbox",
    },
    overrides,
  );
