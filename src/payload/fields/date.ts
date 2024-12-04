import type { DateField } from "payload";

export type DateFieldProps = (overrides?: Partial<DateField>) => DateField;

export const dateField: DateFieldProps = (overrides = {}): DateField => {
  return {
    localized: true,
    required: true,
    name: "date",
    type: "date",

    // @ts-expect-error - TFunction type is not automatically merged with the default translations
    label: ({ t }) => t("custom-date"),

    ...overrides,
  };
};
