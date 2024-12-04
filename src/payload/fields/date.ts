import type { DateField } from "payload";
import { deepMerge } from "payload";

export type DateFieldProps = (overrides?: Partial<DateField>) => DateField;

export const dateField: DateFieldProps = (overrides = {}) =>
  deepMerge<DateField>(
    {
      // @ts-expect-error - TFunction type is not automatically merged with the default translations
      label: ({ t }) => t("custom-date"),

      localized: true,
      required: true,
      name: "date",
      type: "date",
    },
    overrides,
  );
