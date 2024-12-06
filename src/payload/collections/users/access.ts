import type { CollectionConfig } from "payload";

import { authenticated } from "@/payload/access/authenticated";
import { isAdmin } from "@/payload/access/is-admin";

export const usersAccess: CollectionConfig["access"] = {
  admin: authenticated,
  create: isAdmin,
  delete: isAdmin,
  update: isAdmin,
  read: isAdmin,
};
