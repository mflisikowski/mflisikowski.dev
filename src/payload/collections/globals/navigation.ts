import { revalidateTag } from "next/cache";
import type { GlobalConfig } from "payload";

import { link } from "@/payload/fields/link";

import { NAVIGATION_KEY, NAVIGATION_TAG } from "@/utils/payload/tags";

export const Navigation: GlobalConfig = {
  fields: [
    {
      name: "links",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, req: { payload } }) => {
        payload.logger.info(`Revalidating ${NAVIGATION_KEY}`);
        revalidateTag(NAVIGATION_TAG);

        return doc;
      },
    ],
  },
  slug: "navigation",
};
