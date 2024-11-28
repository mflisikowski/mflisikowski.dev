import type { Block } from "payload";

import { richText } from "@/config/payload-fields/rich-text";

export const ContentBlock: Block = {
  fields: [
    {
      label: "Use Leading Header",
      name: "useLeadingHeader",
      type: "checkbox",
    },

    richText({
      name: "leadingHeader",
      label: "Leading Header",
      admin: {
        condition: (_, siblingData) => siblingData.useLeadingHeader,
      },
    }),

    {
      name: "layout",
      type: "select",
      defaultValue: "oneColumn",
      options: [
        {
          label: "One Column",
          value: "oneColumn",
        },
        {
          label: "Two Columns",
          value: "twoColumns",
        },
        {
          label: "Two Thirds + One Third",
          value: "twoThirdsOneThird",
        },
        {
          label: "Half + Half",
          value: "halfAndHalf",
        },
        {
          label: "Three Columns",
          value: "threeColumns",
        },
      ],
    },

    richText({
      name: "columnOne",
    }),

    richText({
      name: "columnTwo",
      admin: {
        condition: (_, siblingData) =>
          ["twoColumns", "twoThirdsOneThird", "halfAndHalf", "threeColumns"].includes(
            siblingData.layout,
          ),
      },
    }),

    richText({
      name: "columnThree",
      admin: {
        condition: (_, siblingData) => siblingData.layout === "threeColumns",
      },
    }),
  ],

  slug: "contentBlock",
};
