import type { Block } from "payload";

export const MediaBlock: Block = {
  fields: [
    {
      name: "position",
      type: "select",
      defaultValue: "default",
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
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "caption",
      type: "richText",
    },
  ],

  slug: "mediaBlock",
};
