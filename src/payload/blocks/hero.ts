import type { Block } from "payload";

import { heroField } from "@/payload/custom-fields/hero";

export const HeroBlock: Block = {
  fields: [heroField],
  slug: "heroBlock",
};
