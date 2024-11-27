import { authenticated } from "@/config/payload-access/authenticated";
import { authenticatedOrPublished } from "@/config/payload-access/authenticatedOrPublished";

import type { MediaCollectionConfig } from ".";

export const mediaAccess: MediaCollectionConfig["access"] = {
  create: authenticated,
  delete: authenticated,
  update: authenticated,
  read: authenticatedOrPublished,
};
