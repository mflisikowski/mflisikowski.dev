import type { Field } from "payload";

import { tl } from "@/i18n/translations";

export const multimediaField: Field = {
  localized: true,
  label: false,
  name: "multimedia",
  type: "group",

  fields: [
    {
      /** Select field docs: https://payloadcms.com/docs/fields/select */
      defaultValue: "default",
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
      label: tl("custom:media-position"),
      name: "position",
      type: "select",
    },

    {
      /** Rich text field docs: https://payloadcms.com/docs/fields/rich-text */
      localized: true,
      required: true,
      label: tl("custom:media-caption"),
      type: "richText",
      name: "caption",
    },

    {
      /** Upload field docs: https://payloadcms.com/docs/fields/upload */
      filterOptions: {
        mimeType: {
          in: ["image/jpeg", "image/webp", "video/mp4"],
        },
      },
      relationTo: "media",
      required: true,
      label: tl("custom:media-image"),
      type: "upload",
      name: "image",

      typescriptSchema: [() => ({ $ref: `#/definitions/media` })],
    },
  ],
};
