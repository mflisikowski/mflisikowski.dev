import type { CollectionConfig } from "payload";

import { isAdmin } from "@/config/payload-access/is-admin";
import { publishedOnly } from "@/config/payload-access/published-only";

export const caseStudiesAccess: CollectionConfig["access"] = {
  readVersions: isAdmin,
  create: isAdmin,
  delete: isAdmin,
  update: isAdmin,
  read: publishedOnly,
};
