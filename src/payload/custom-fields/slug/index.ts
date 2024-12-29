import type { CheckboxField, TextField } from "payload";

import { formatSlug } from "@/hooks/payload-format-slug";

import { tl } from "@/i18n/translations";

export type SlugFieldProps = (fieldToUse?: string) => [TextField, CheckboxField];

export const slugField: SlugFieldProps = (fieldToUse = "title") => {
  /** Checkbox field docs: https://payloadcms.com/docs/fields/checkbox */
  const checkbox: CheckboxField = {
    admin: {
      position: "sidebar",
      hidden: true,
    },

    defaultValue: true,
    name: "slugLock",
    type: "checkbox",
  };

  /** Text field docs: https://payloadcms.com/docs/fields/text */
  const input: TextField = {
    label: tl("custom:field-slug"),
    name: "slug",

    localized: true,
    required: true,
    unique: true,
    index: true,
    type: "text",

    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlug(fieldToUse)],
    },

    admin: {
      components: {
        Field: {
          clientProps: {
            checkboxFieldPath: checkbox.name,
            fieldToUse,
          },
          path: "@/payload/custom-fields/slug/component#SlugField",
        },
      },
      position: "sidebar",
    },
  };

  return [input, checkbox];
};
