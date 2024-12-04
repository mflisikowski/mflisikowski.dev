import type { CollectionConfig } from "payload";

import { authenticated } from "@/payload/access/authenticated";
import { authenticatedOrPublished } from "@/payload/access/authenticated-or-published";

export const pagesAccess: CollectionConfig["access"] = {
  create: authenticated,
  delete: authenticated,
  update: authenticated,
  read: authenticatedOrPublished,
};
