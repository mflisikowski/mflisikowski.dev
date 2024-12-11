import type { Block } from "payload";

import { columnsField } from "@/payload/custom-fields/grid-layout";

export const ContentBlock: Block = {
  fields: [columnsField],
  slug: "contentBlock",
};
