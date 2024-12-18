import type { SelectField } from "payload";

import { richTextField } from "@/payload/fields/rich-text";
import { type SelectFieldProps, selectField } from "@/payload/fields/select";

enum GridLayout {
  TwoThirdsOneThird = "twoThirdsOneThird",
  ThreeColumns = "threeColumns",
  HalfAndHalf = "halfAndHalf",
  TwoColumns = "twoColumns",
  OneColumn = "oneColumn",
}

export const gridLayoutColumnSelectField: SelectFieldProps = (overrides = {}): SelectField => {
  const layoutSelectField = selectField({
    defaultValue: GridLayout.OneColumn,
    options: [
      {
        // @ts-expect-error - TFunction type is not automatically merged with the default translations
        label: ({ t }) => t("custom-gridLayoutOneColumn"),
        value: GridLayout.OneColumn,
      },
      {
        // @ts-expect-error - TFunction type is not automatically merged with the default translations
        label: ({ t }) => t("custom-gridLayoutTwoColumns"),
        value: GridLayout.TwoColumns,
      },
      {
        // @ts-expect-error - TFunction type is not automatically merged with the default translations
        label: ({ t }) => t("custom-gridLayoutTwoThirdsOneThird"),
        value: GridLayout.TwoThirdsOneThird,
      },
      {
        // @ts-expect-error - TFunction type is not automatically merged with the default translations
        label: ({ t }) => t("custom-gridLayoutHalfAndHalf"),
        value: GridLayout.HalfAndHalf,
      },
      {
        // @ts-expect-error - TFunction type is not automatically merged with the default translations
        label: ({ t }) => t("custom-gridLayoutThreeColumns"),
        value: GridLayout.ThreeColumns,
      },
    ],
    // @ts-expect-error - TFunction type is not automatically merged with the default translations
    label: ({ t }) => t("custom-selectGridLayout"),
    name: "layout",

    ...overrides,
  });

  return layoutSelectField;
};

export const gridLayoutColumnOneField = () => {
  const columnOneField = richTextField({
    name: GridLayout.OneColumn,
  });

  return columnOneField;
};

export const gridLayoutColumnTwoField = () => {
  const columnTwoField = richTextField({
    admin: {
      condition: (_, siblingData) =>
        [GridLayout.TwoColumns, GridLayout.TwoThirdsOneThird, GridLayout.HalfAndHalf].includes(
          siblingData.layout,
        ),
    },
    name: GridLayout.TwoColumns,
  });

  return columnTwoField;
};

export const gridLayoutColumnThreeField = () => {
  const columnThreeField = richTextField({
    admin: {
      condition: (_, siblingData) => siblingData.layout === GridLayout.ThreeColumns,
    },
    name: GridLayout.ThreeColumns,
  });

  return columnThreeField;
};
