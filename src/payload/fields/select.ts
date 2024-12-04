import type { SelectField } from "payload";
import { deepMerge } from "payload";

export type SelectFieldProps = (
  overrides?: Partial<SelectField & { hasMany?: false }>,
) => SelectField;

export const selectField: SelectFieldProps = (overrides = {}) =>
  deepMerge<SelectField>(
    {
      // @ts-expect-error - TFunction type is not automatically merged with the default translations
      label: ({ t }) => t("custom-select"),

      name: "select",
      type: "select",
      options: [],
    },
    overrides,
  );
