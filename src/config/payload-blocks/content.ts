import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Block, Field } from "payload";

import { link } from "@/components/(payload)/fields/link";

const columnFields: Field[] = [
  {
    defaultValue: "half",
    type: "select",
    name: "size",
    options: [
      {
        label: "One Third",
        value: "one-third",
      },
      {
        label: "Half",
        value: "half",
      },
      {
        label: "Two Thirds",
        value: "two-thirds",
      },
      {
        label: "Full",
        value: "full",
      },
    ],
  },
  {
    name: "richText",
    type: "richText",
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ];
      },
    }),
    label: false,
  },

  {
    name: "enableLink",
    type: "checkbox",
  },

  link({
    overrides: {
      admin: {
        condition: (_: unknown, { enableLink }: { enableLink: boolean }) => Boolean(enableLink),
      },
    },
  }),
];

export interface ContentBlockConfig extends Block {
  fields: typeof columnFields;
}

export const ContentBlock: ContentBlockConfig = {
  interfaceName: "ContentBlock",
  slug: "content",
  fields: [
    {
      fields: columnFields,
      name: "columns",
      type: "array",
    },
  ],
};
