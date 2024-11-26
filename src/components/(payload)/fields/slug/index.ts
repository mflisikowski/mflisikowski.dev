import type { CheckboxField, TextField } from "payload";

import { formatSlug } from "@/hooks/payload-format-slug";

interface Overrides {
  checkboxOverrides?: Partial<CheckboxField>;
  slugOverrides?: Partial<TextField>;
}

interface Slug {
  (fieldToUse?: string, overrides?: Overrides): [TextField, CheckboxField];
}

export const slugField: Slug = (fieldToUse = "title", overrides = {}) => {
  const { slugOverrides, checkboxOverrides } = overrides;

  const checkBoxField: CheckboxField = {
    name: "slugLock",
    type: "checkbox",
    defaultValue: true,
    admin: {
      hidden: true,
      position: "sidebar",
    },
    ...checkboxOverrides,
  };

  // @ts-expect-error - Payload's TextField type is incompatible with Partial<TextField>
  const slugField: TextField = {
    label: "Slug",
    name: "slug",
    type: "text",
    index: true,

    ...(slugOverrides || {}),

    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlug(fieldToUse)],
    },

    admin: {
      position: "sidebar",

      ...(slugOverrides?.admin || {}),

      components: {
        Field: {
          path: "@/components/(payload)/fields/slug/slug-field-component#SlugFieldComponent",
          clientProps: {
            fieldToUse,
            checkboxFieldPath: checkBoxField.name,
          },
        },
      },
    },
  };

  return [slugField, checkBoxField];
};
