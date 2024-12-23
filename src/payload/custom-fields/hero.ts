import type { Field } from "payload";

import { tl } from "@/i18n/translations";

import { radioField } from "@/payload/fields/radio";
import { selectField } from "@/payload/fields/select";
import { textField } from "@/payload/fields/text";
import { uploadField } from "@/payload/fields/upload";

export const heroField: Field = {
  label: "Hero",
  name: "hero",
  type: "group",
  localized: true,

  fields: [
    selectField({
      label: tl("custom:hero-type"),

      defaultValue: "home",
      required: true,
      name: "type",
      options: [
        {
          label: tl("custom:hero-type-home"),
          value: "home",
        },
      ],
    }),

    /**
     * Home Hero Fields
     */
    textField({
      required: true,
      label: tl("custom:hero-headline"),
      name: "title",
      admin: {
        condition: (_, siblingData) => siblingData?.type === "home",
      },
    }),

    textField({
      required: true,
      label: tl("custom:hero-subheadline"),
      name: "subtitle",
      admin: {
        condition: (_, siblingData) => siblingData?.type === "home",
      },
    }),

    {
      label: tl("custom:hero-media"),
      name: "media",
      type: "group",
      admin: {
        condition: (_, siblingData) => siblingData?.type === "home",
      },
      fields: [
        radioField({
          defaultValue: "image",
          label: false,
          name: "type",
          options: [
            {
              label: tl("custom:hero-media-image"),
              value: "image",
            },
            {
              label: tl("custom:hero-media-video"),
              value: "video",
            },
          ],
        }),

        uploadField({
          filterOptions: {
            mimeType: {
              contains: "image",
            },
          },
          required: true,
          label: tl("custom:hero-media-image"),
          name: "image",
          admin: {
            condition: (_, siblingData) => siblingData?.type === "image",
          },
        }),

        uploadField({
          filterOptions: {
            mimeType: {
              contains: "video",
            },
          },
          required: true,
          label: tl("custom:hero-media-video"),
          name: "video",
          admin: {
            condition: (_, siblingData) => siblingData?.type === "video",
          },
        }),
      ],
    },
  ],
};
