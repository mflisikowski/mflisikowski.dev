import type { BlocksField } from "payload";
import { deepMerge } from "payload";

import { heroBlock } from "@/payload/blocks/hero";

import type { PayloadBlockFieldProps } from "@/types";

export const heroBlockField: PayloadBlockFieldProps = (overrides = {}) =>
  deepMerge<BlocksField>(
    {
      localized: true,
      required: true,
      blocks: [heroBlock],
      name: "layout",
      type: "blocks",
    },
    overrides,
  );
