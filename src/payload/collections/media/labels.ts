import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

export const mediaLabels: CollectionConfig["labels"] = {
  singular: tl("custom:media-singular"),
  plural: tl("custom:media-plural"),
};
