import type { BlocksField } from "payload";
import { deepMerge } from "payload";

import { ContentBlock } from "@/payload/blocks/content";
import { CtaBlock } from "@/payload/blocks/cta";
import { HeroBlock } from "@/payload/blocks/hero";
import { MediaBlock } from "@/payload/blocks/media";

export type BlockFieldProps = (overrides?: Partial<BlocksField>) => BlocksField;

export const reusableBlockField: BlockFieldProps = (overrides = {}) =>
  deepMerge<BlocksField>(
    {
      localized: true,
      required: true,
      blocks: [
        //
        HeroBlock,
        ContentBlock,
        MediaBlock,
        CtaBlock,
      ],
      name: "layout",
      type: "blocks",
    },
    overrides,
  );
