import type { TFunction } from "@payloadcms/translations";
import type { CheckboxField, Config } from "payload";
import type { RichTextField } from "payload";

import type { CheckboxFieldProps } from "@/config/payload-fields/checkbox";
import { checkboxField } from "@/config/payload-fields/checkbox";
import { richTextField } from "@/config/payload-fields/rich-text";
import type { RichText } from "@/config/payload-fields/rich-text";

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
