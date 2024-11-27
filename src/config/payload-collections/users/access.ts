import { authenticated } from "@/config/payload-access/authenticated";

import type { UsersCollectionConfig } from ".";

export const usersAccess: UsersCollectionConfig["access"] = {
  admin: authenticated,
  create: authenticated,
  delete: authenticated,
  read: authenticated,
  update: authenticated,
};
