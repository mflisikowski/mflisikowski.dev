import type { CollectionConfig } from "payload";

import { authenticated } from "@/payload/access/authenticated";

export const mediaAccess: CollectionConfig["access"] = {
  create: authenticated,
  delete: authenticated,
  update: authenticated,
  read: () => true,
};
