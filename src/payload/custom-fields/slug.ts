import type { CheckboxField, TextField } from "payload";
import { deepMerge } from "payload";

import { formatSlug } from "@/hooks/payload-format-slug";

export type SlugFieldOverrides = {
  checkboxOverrides?: Partial<CheckboxField>;
  slugOverrides?: Partial<TextField>;
};

type Slug = (fieldToUse?: string, overrides?: SlugFieldOverrides) => [TextField, CheckboxField];

export const slugField: Slug = (fieldToUse = "title", overrides = {}) => {
  const { checkboxOverrides = {}, slugOverrides = {} } = overrides;

  const checkBoxField = deepMerge<CheckboxField>(
    {
      admin: {
        position: "sidebar",
        hidden: true,
      },

      defaultValue: true,
      name: "slugLock",
      type: "checkbox",
    },

    checkboxOverrides,
  );

  const slugField = deepMerge<TextField>(
    {
      admin: {
        components: {
          Field: {
            clientProps: {
              checkboxFieldPath: checkBoxField.name,
              fieldToUse,
            },
            path: "@/components/(payload)/slug-field#SlugField",
          },
        },
        position: "sidebar",
      },

      hooks: {
        // Kept this in for hook or API based updates
        beforeValidate: [formatSlug(fieldToUse)],
      },

      index: true,
      label: "Slug",
      name: "slug",
      type: "text",
    },

    slugOverrides,
  );

  return [slugField, checkBoxField];
};
