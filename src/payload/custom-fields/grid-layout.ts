import type { Field } from "payload";

import { tl } from "@/i18n/translations";

import { richTextField } from "@/payload/fields/rich-text";
import { selectField } from "@/payload/fields/select";

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
    selectField({
      defaultValue: Columns.One,
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
      name: "type",
    }),

    richTextField({
      label: tl("custom:columns-one"),
      name: Columns.One,
    }),

    richTextField({
      label: tl("custom:columns-two"),
      admin: {
        condition: (_, siblingData) => [Columns.Two, Columns.Three].includes(siblingData.type),
      },
      name: Columns.Two,
    }),

    richTextField({
      label: tl("custom:columns-three"),
      admin: {
        condition: (_, siblingData) => siblingData.type === Columns.Three,
      },
      name: Columns.Three,
    }),
  ],
};
