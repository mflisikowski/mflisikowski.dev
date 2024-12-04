import type { CollectionConfig } from "payload";

import { authenticated } from "@/payload/access/authenticated";

export const usersAccess: CollectionConfig["access"] = {
  admin: authenticated,
  create: authenticated,
  delete: authenticated,
  read: authenticated,
  update: authenticated,
};
