import type { Block } from "payload";

import { gridField } from "@/payload/custom-fields/grid-layout";

export const ContentBlock: Block = {
  fields: [gridField],
  slug: "contentBlock",
};
