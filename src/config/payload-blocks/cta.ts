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
          minRows: 1,
          maxRows: 3,
          name: "links",
          type: "array",
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
    singular: "Call to Action",
    plural: "Calls to Action",
  },

  slug: "ctaBlock",
};
