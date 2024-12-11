import type { SelectField } from "payload";
import { deepMerge } from "payload";

import { tl } from "@/i18n/translations";

export type SelectFieldProps = (overrides?: Partial<SelectField>) => SelectField;

export const selectField: SelectFieldProps = (overrides = {}) =>
  deepMerge<SelectField>(
    {
      localized: true,
      label: tl("custom:select-field"),
      name: "select",
      type: "select",
      options: [],
    },
    overrides,
  );
