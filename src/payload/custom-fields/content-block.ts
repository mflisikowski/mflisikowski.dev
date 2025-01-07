import type { BlocksField } from "payload";
import { deepMerge } from "payload";

import { ContentBlock } from "@/payload/blocks/content";
import { MediaBlock } from "@/payload/blocks/media";

import type { PayloadBlockFieldProps } from "@/types";

export const contentBlockField: PayloadBlockFieldProps = (overrides = {}) =>
  deepMerge<BlocksField>(
    {
      localized: true,
      required: false,
      blocks: [
        //
        ContentBlock,
        MediaBlock,
      ],
      name: "layout",
      type: "blocks",
    },
    overrides,
  );
