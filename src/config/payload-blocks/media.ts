import type { Block } from "payload";

export const MediaBlock: Block = {
  fields: [
    {
      defaultValue: "default",
      name: "position",
      type: "select",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Wide",
          value: "wide",
        },
      ],
    },
    {
      relationTo: "media",
      required: true,
      type: "upload",
      name: "media",
    },
    {
      name: "caption",
      type: "richText",
    },
  ],

  slug: "mediaBlock",
};
