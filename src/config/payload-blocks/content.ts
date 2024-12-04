import type { Block } from "payload";

// prettier-ignore
import { gridLayoutColumnOneField, gridLayoutColumnSelectField, gridLayoutColumnThreeField, gridLayoutColumnTwoField } from "@/config/payload-fields/grid-layout";
// prettier-ignore
import { leadingHeaderCheckboxField, leadingHeaderRichTextField } from "@/config/payload-fields/leading-header";

const leadingHeaderCheckbox = leadingHeaderCheckboxField();
const leadingHeaderRichText = leadingHeaderRichTextField();

const gridLayoutColumnSelect = gridLayoutColumnSelectField();
const gridLayoutColumnThree = gridLayoutColumnThreeField();
const gridLayoutColumnOne = gridLayoutColumnOneField();
const gridLayoutColumnTwo = gridLayoutColumnTwoField();

export const ContentBlock: Block = {
  fields: [
    leadingHeaderCheckbox,
    leadingHeaderRichText,

    gridLayoutColumnSelect,
    gridLayoutColumnOne,
    gridLayoutColumnTwo,
    gridLayoutColumnThree,
  ],

  slug: "contentBlock",
};
