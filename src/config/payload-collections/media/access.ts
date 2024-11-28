import type { CollectionConfig } from "payload";

import { authenticated } from "@/config/payload-access/authenticated";
import { authenticatedOrPublished } from "@/config/payload-access/authenticatedOrPublished";

export const mediaAccess: CollectionConfig["access"] = {
  create: authenticated,
  delete: authenticated,
  update: authenticated,
  read: authenticatedOrPublished,
};
