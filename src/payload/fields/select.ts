import type { SelectField } from "payload";

export type SelectFieldProps = (
  overrides?: Partial<SelectField & { hasMany?: false }>,
) => SelectField;

export const selectField: SelectFieldProps = (overrides = {}): SelectField => {
  return {
    name: "select",
    type: "select",

    options: [],

    // @ts-expect-error - TFunction type is not automatically merged with the default translations
    label: ({ t }) => t("custom-select"),

    ...overrides,
  };
};
