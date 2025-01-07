import type { Field } from "payload";

import { tl } from "@/i18n/translations";

enum Columns {
  Three = "columns-three",
  Two = "columns-two",
  One = "columns-one",
}

export const columnsField: Field = {
  label: tl("custom:columns"),
  type: "group",
  name: "columns",
  fields: [
    {
      /** Select field docs: https://payloadcms.com/docs/fields/select */
      defaultValue: Columns.One,
      localized: true,
      options: [
        {
          label: tl("custom:columns-one"),
          value: Columns.One,
        },
        {
          label: tl("custom:columns-two"),
          value: Columns.Two,
        },
        {
          label: tl("custom:columns-three"),
          value: Columns.Three,
        },
      ],
      label: tl("custom:select-columns"),
      type: "select",
      name: "type",
    },

    {
      /** Rich text field docs: https://payloadcms.com/docs/fields/rich-text */
      label: tl("custom:columns-one"),
      localized: true,
      required: true,
      name: Columns.One,
      type: "richText",
    },

    {
      /** Rich text field docs: https://payloadcms.com/docs/fields/rich-text */
      label: tl("custom:columns-two"),
      admin: {
        condition: (_, siblingData) => [Columns.Two, Columns.Three].includes(siblingData.type),
      },
      name: Columns.Two,
      type: "richText",
    },
    {
      /** Rich text field docs: https://payloadcms.com/docs/fields/rich-text */
      label: tl("custom:columns-three"),
      admin: {
        condition: (_, siblingData) => siblingData.type === Columns.Three,
      },
      name: Columns.Three,
      type: "richText",
    },
  ],
};
