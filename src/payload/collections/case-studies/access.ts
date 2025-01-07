import type { CollectionConfig } from "payload";

import { authenticatedOrPublished } from "@/payload/access/authenticated-or-published";
import { isAdmin } from "@/payload/access/is-admin";

export const caseStudiesAccess: CollectionConfig["access"] = {
  readVersions: isAdmin,
  create: isAdmin,
  delete: isAdmin,
  update: isAdmin,
  read: authenticatedOrPublished,
};
