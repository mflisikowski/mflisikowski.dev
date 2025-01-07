import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

export const usersLabels: CollectionConfig["labels"] = {
  singular: tl("custom:user-singular"),
  plural: tl("custom:user-plural"),
};
