import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

export const pageLabels: CollectionConfig["labels"] = {
  singular: tl("custom:page-singular"),
  plural: tl("custom:page-plural"),
};
