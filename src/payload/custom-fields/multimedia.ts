import type { Field } from "payload";

import { tl } from "@/i18n/translations";

import { richTextField } from "@/payload/fields/rich-text";
import { selectField } from "@/payload/fields/select";
import { uploadField } from "@/payload/fields/upload";

export const multimediaField: Field = {
  localized: true,
  label: false,
  name: "multimedia",
  type: "group",

  fields: [
    selectField({
      defaultValue: "default",
      label: tl("custom:media-position"),
      name: "position",
      options: [
        {
          label: tl("custom:media-position-default"),
          value: "default",
        },
        {
          label: tl("custom:media-position-wide"),
          value: "wide",
        },
      ],
    }),

    richTextField({
      label: tl("custom:media-caption"),
      name: "caption",
    }),

    uploadField({
      label: tl("custom:media-image"),
      required: true,
      name: "media",
    }),
  ],
};
