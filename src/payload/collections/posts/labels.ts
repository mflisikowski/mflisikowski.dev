import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

export const postsLabels: CollectionConfig["labels"] = {
  singular: tl("custom:post-singular"),
  plural: tl("custom:post-plural"),
};
