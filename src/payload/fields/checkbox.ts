import type { CheckboxField } from "payload";

export type CheckboxFieldProps = (overrides?: Partial<CheckboxField>) => CheckboxField;

export const checkboxField: CheckboxFieldProps = (overrides = {}): CheckboxField => {
  return {
    localized: true,
    name: "checkbox",
    type: "checkbox",

    // @ts-expect-error - TFunction type is not automatically merged with the default translations
    label: ({ t }) => t("custom-checkbox"),

    ...overrides,
  };
};
