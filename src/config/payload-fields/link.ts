import type { CheckboxField, GroupField, RadioField, RelationshipField, TextField } from "payload";
import { deepMerge } from "payload";

export type LinkFieldOverrides = {
  groupOverrides?: Partial<Omit<GroupField, "fields">>;
  internalLinkOverrides?: Partial<RelationshipField>;
  labelOverrides?: Partial<TextField>;
  linkTypeOverrides?: Partial<RadioField>;
  openInNewTabOverrides?: Partial<CheckboxField>;
  required?: boolean;
  urlOverrides?: Partial<TextField>;
};

type LinkField = (overrides?: LinkFieldOverrides) => GroupField;

export const linkField: LinkField = (overrides = {}) => {
  const {
    groupOverrides = {},
    internalLinkOverrides = {},
    labelOverrides = {},
    linkTypeOverrides = {},
    openInNewTabOverrides = {},
    required = false,
    urlOverrides = {},
  } = overrides;

  return deepMerge<GroupField>(
    {
      fields: [
        deepMerge<TextField>(
          {
            label: "Label",
            name: "label",
            required,
            type: "text",
          },
          labelOverrides,
        ),
        deepMerge<RadioField>(
          {
            admin: {
              condition: (_, siblingData) => required || Boolean(siblingData.label),
            },
            label: "Type",
            name: "linkType",
            options: [
              {
                label: "Internal",
                value: "internal",
              },
              {
                label: "External",
                value: "external",
              },
            ],
            required: true,
            type: "radio",
          },
          linkTypeOverrides,
        ),
        deepMerge<TextField>(
          {
            admin: {
              condition: (_, siblingData) =>
                (required || Boolean(siblingData.label)) && siblingData.linkType === "external",
            },
            label: "URL",
            name: "url",
            required: true,
            type: "text",
          },
          urlOverrides,
        ),
        deepMerge<RelationshipField>(
          {
            admin: {
              condition: (_, siblingData) =>
                (required || Boolean(siblingData.label)) && siblingData.linkType === "internal",
            },
            label: "Internal Reference",
            name: "internalLink",
            relationTo: ["pages"],
            required: true,
            type: "relationship",
          },
          internalLinkOverrides,
        ),
        deepMerge<CheckboxField>(
          {
            admin: {
              condition: (_, siblingData) => Boolean(siblingData.label),
            },
            label: "Open in new tab",
            name: "openInNewTab",
            type: "checkbox",
          },
          openInNewTabOverrides,
        ),
      ],
      label: "Link",
      name: "link",
      type: "group",
    },
    groupOverrides,
  );
};
