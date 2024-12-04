import type { CollectionConfig } from "payload";

import { isAdmin } from "@/payload/access/is-admin";
import { publishedOnly } from "@/payload/access/published-only";

export const caseStudiesAccess: CollectionConfig["access"] = {
  readVersions: isAdmin,
  create: isAdmin,
  delete: isAdmin,
  update: isAdmin,
  read: publishedOnly,
};
