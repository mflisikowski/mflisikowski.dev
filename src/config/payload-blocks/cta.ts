import type { Block } from "payload";

import { linkField } from "@/config/payload-fields/link";
import { richText } from "@/config/payload-fields/rich-text";

export const CtaBlock: Block = {
  fields: [
    {
      name: "content",
      type: "group",
      fields: [
        richText({
          name: "text",
        }),
        {
          name: "links",
          type: "array",
          minRows: 1,
          maxRows: 3,
          fields: [
            linkField({
              required: true,
            }),
          ],
        },
      ],
    },
  ],

  labels: {
    plural: "Calls to Action",
    singular: "Call to Action",
  },

  slug: "ctaBlock",
};
