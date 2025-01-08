import type { Field, GroupField } from "payload";
import { deepMerge } from "payload";

export type LinkAppearances = "default" | "outline";

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
  default: { label: "Default", value: "default" },
  outline: { label: "Outline", value: "outline" },
};

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false;
  overrides?: Partial<GroupField>;
}) => GroupField;

export const link: LinkType = ({ appearances, overrides = {} } = {}) => {
  const linkResult: GroupField = {
    fields: [
      {
        /** Row field: https://payloadcms.com/docs/fields/row */
        type: "row",
        fields: [
          {
            /** Radio field: https://payloadcms.com/docs/fields/radio */
            name: "type",
            type: "radio",
            admin: {
              layout: "horizontal",
              width: "50%",
            },
            defaultValue: "reference",
            options: [
              { label: "Internal link", value: "reference" },
              { label: "Custom URL", value: "custom" },
            ],
          },
          {
            /** Checkbox field: https://payloadcms.com/docs/fields/checkbox */
            name: "newTab",
            type: "checkbox",
            admin: {
              style: { alignSelf: "flex-end" },
              width: "50%",
            },
            label: "Open in new tab",
          },
        ],
      },
    ],
    admin: {
      hideGutter: true,
    },
    name: "link",
    type: "group",
  };

  const linkTypes: Field[] = [
    {
      /** Relationship field: https://payloadcms.com/docs/fields/relationship */
      typescriptSchema: [
        () => ({
          type: "object",
          properties: {
            relationTo: { const: "pages" },
            value: {
              type: "object",
              properties: {
                id: { type: "string" },
                slug: { type: "string" },
                pageTitle: { type: "string" },
              },
              required: ["id", "slug", "pageTitle"],
              additionalProperties: false,
            },
          },
          required: ["relationTo", "value"],
          additionalProperties: false,
        }),
      ],
      relationTo: ["pages"],
      required: true,
      unique: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === "reference",
      },
      label: "Document to link to",
      name: "reference",
      type: "relationship",
    },
    {
      /** Row field: https://payloadcms.com/docs/fields/row */
      type: "row",
      fields: [
        {
          /** Text field: https://payloadcms.com/docs/fields/text */
          required: true,
          label: "Link Label",
          admin: {
            condition: (_, siblingData) => siblingData?.type === "custom",
            width: "50%",
          },
          name: "label",
          type: "text",
        },
        {
          /** Text field: https://payloadcms.com/docs/fields/text */
          required: true,
          unique: true,
          label: "Custom URL",
          admin: {
            condition: (_, siblingData) => siblingData?.type === "custom",
            width: "50%",
          },
          name: "url",
          type: "text",
        },
      ],
    },
  ];

  linkResult.fields = [...linkResult.fields, ...linkTypes];

  if (appearances !== false) {
    let appearanceOptionsToUse = [appearanceOptions.default, appearanceOptions.outline];
    if (appearances) {
      appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance]);
    }

    linkResult.fields.push({
      defaultValue: "default",
      options: appearanceOptionsToUse,
      name: "appearance",
      type: "select",
    });
  }

  return deepMerge(linkResult, overrides);
};
