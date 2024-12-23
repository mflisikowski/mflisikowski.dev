import type { Block } from "payload";

import { heroField } from "@/payload/custom-fields/hero";

export const heroBlock: Block = {
  fields: [heroField],
  slug: "heroBlock",
};
