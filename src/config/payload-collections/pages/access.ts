import { authenticated } from "@/config/payload-access/authenticated";
import { authenticatedOrPublished } from "@/config/payload-access/authenticatedOrPublished";

import type { PageCollectionConfig } from ".";

export const pagesAccess: PageCollectionConfig["access"] = {
  create: authenticated,
  delete: authenticated,
  update: authenticated,
  read: authenticatedOrPublished,
};
