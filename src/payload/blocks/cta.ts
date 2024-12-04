import type { Block } from "payload";

import { linkField } from "@/payload/fields/link";
import { richTextField } from "@/payload/fields/rich-text";

export const CtaBlock: Block = {
  fields: [
    {
      name: "content",
      type: "group",
      fields: [
        richTextField({
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
