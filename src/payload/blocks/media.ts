import type { Block } from "payload";

import { multimediaField } from "@/payload/custom-fields/multimedia";

export const MediaBlock: Block = {
  fields: [multimediaField],
  slug: "mediaBlock",
};
