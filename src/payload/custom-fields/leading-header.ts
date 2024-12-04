import type { CheckboxField } from "payload";
import type { RichTextField } from "payload";

import type { CheckboxFieldProps } from "@/payload/fields/checkbox";
import { checkboxField } from "@/payload/fields/checkbox";
import { richTextField } from "@/payload/fields/rich-text";
import type { RichText } from "@/payload/fields/rich-text";

export const leadingHeaderCheckboxField: CheckboxFieldProps = (overrides = {}): CheckboxField => {
  const checkbox = checkboxField({
    // https://payloadcms.com/docs/configuration/i18n#custom-translations
    // @ts-expect-error - TFunction type is not automatically merged with the default translations
    label: ({ t }) => t("custom-checkboxLeadingHeader"),
    name: "checkboxLeadingHeader",
    ...overrides,
  });

  return checkbox;
};

export const leadingHeaderRichTextField: RichText = (overrides = {}): RichTextField => {
  return richTextField({
    admin: {
      condition: (_, siblingData) => siblingData.checkboxLeadingHeader,
    },
    name: "leadingHeader",

    ...overrides,
  });
};
