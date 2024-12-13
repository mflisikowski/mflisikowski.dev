import type { CheckboxField } from "payload";
import { deepMerge } from "payload";

export type CheckboxFieldProps = (overrides?: Partial<CheckboxField>) => CheckboxField;

export const checkboxField: CheckboxFieldProps = (overrides = {}) =>
  deepMerge<CheckboxField>(
    {
      localized: true,
      name: "checkbox",
      type: "checkbox",
    },
    overrides,
  );
