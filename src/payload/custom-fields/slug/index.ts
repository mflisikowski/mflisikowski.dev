import type { CheckboxField, TextField } from "payload";

import { formatSlug } from "@/hooks/payload-format-slug";

import { tl } from "@/i18n/translations";

import { checkboxField } from "@/payload/fields/checkbox";
import { textField } from "@/payload/fields/text";

type SlugFieldProps = (fieldToUse?: string) => [TextField, CheckboxField];

export const slugField: SlugFieldProps = (fieldToUse = "title") => {
  const checkbox = checkboxField({
    admin: {
      position: "sidebar",
      hidden: true,
    },

    defaultValue: true,
    name: "slugLock",
  });

  const input = textField({
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
    label: tl("custom:slug"),
    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlug(fieldToUse)],
    },
    name: "slug",
    index: true,
  });

  return [input, checkbox];
};
