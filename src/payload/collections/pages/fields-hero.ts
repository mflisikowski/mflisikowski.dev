import type { Field } from "payload";

import { tl } from "@/i18n/translations";

enum HeroType {
  Home = "home",
}

export const fields: Field[] = [
  {
    /** Select field docs: https://payloadcms.com/docs/fields/select */
    defaultValue: HeroType.Home,
    localized: true,
    required: true,
    options: [
      {
        label: tl("custom:hero-type-home"),
        value: HeroType.Home,
      },
    ],
    label: tl("custom:hero-type"),
    name: "type",
    type: "select",
  },

  {
    /** Text field docs: https://payloadcms.com/docs/fields/text */
    localized: true,
    required: true,
    label: tl("custom:hero-headline"),
    name: "headline",
    type: "text",
  },

  {
    /** Text field docs: https://payloadcms.com/docs/fields/text */
    localized: true,
    required: true,
    label: tl("custom:hero-subheadline"),
    name: "subheadline",
    type: "text",
  },

  {
    /** Upload field docs: https://payloadcms.com/docs/fields/upload */
    filterOptions: {
      mimeType: {
        in: ["image/jpeg", "image/webp", "video/mp4", "video/webm"],
      },
    },
    relationTo: "media",
    label: tl("custom:hero-media"),
    type: "upload",
    name: "media",

    typescriptSchema: [() => ({ $ref: `#/definitions/media` })],
  },
];
