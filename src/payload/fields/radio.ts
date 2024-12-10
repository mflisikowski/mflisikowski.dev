import type { RadioField } from "payload";
import { deepMerge } from "payload";

import { tl } from "@/i18n/translations";

export type RadioFieldProps = (overrides?: Partial<RadioField>) => RadioField;

export const radioField: RadioFieldProps = (overrides = {}) =>
  deepMerge<RadioField>(
    {
      label: tl("custom:radio-field"),

      name: "radio",
      type: "radio",
      options: [],
    },
    overrides,
  );
