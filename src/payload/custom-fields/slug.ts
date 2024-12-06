import type { CheckboxField, TextField } from "payload";
import { deepMerge } from "payload";

import { formatSlug } from "@/hooks/payload-format-slug";

import { isAdminFieldLevel } from "@/payload/access/is-admin";
import { checkboxField } from "@/payload/fields/checkbox";
import { textField } from "@/payload/fields/text";

export type SlugFieldOverrides = {
  checkboxOverrides?: Partial<CheckboxField>;
  slugOverrides?: Partial<TextField>;
};

type SlugFieldProps = (
  fieldToUse?: string,
  overrides?: SlugFieldOverrides,
) => [TextField, CheckboxField];

export const slugField: SlugFieldProps = (fieldToUse = "title", overrides = {}) => {
  const checkbox = checkboxField(
    deepMerge<CheckboxField>(
      {
        admin: {
          position: "sidebar",
          hidden: true,
        },

        defaultValue: true,
        name: "slugLock",
        type: "checkbox",
      },
      overrides.checkboxOverrides ?? {},
    ),
  );

  const input = textField(
    deepMerge<TextField>(
      {
        // @ts-expect-error - TFunction type is not automatically merged with the default translations
        label: ({ t }) => t("custom-slug"),

        admin: {
          components: {
            Field: {
              clientProps: {
                checkboxFieldPath: checkbox.name,
                fieldToUse,
              },
              path: "@/components/(payload)/slug-field#SlugField",
            },
          },
          position: "sidebar",
        },

        access: {
          create: isAdminFieldLevel,
          update: isAdminFieldLevel,
        },

        hooks: {
          // Kept this in for hook or API based updates
          beforeValidate: [formatSlug(fieldToUse)],
        },

        name: "slug",
        required: true,
        index: true,
      },
      overrides.slugOverrides ?? {},
    ),
  );

  return [input, checkbox];
};
