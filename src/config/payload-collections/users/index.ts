import type { CollectionConfig } from "payload";

import { usersAccess as access } from "@/config/payload-collections/users/access";
import { usersAdmin as admin } from "@/config/payload-collections/users/admin";
import { usersFields as fields } from "@/config/payload-collections/users/fields";
import { usersLabels as labels } from "@/config/payload-collections/users/labels";

export const Users: CollectionConfig = {
  timestamps: true,
  auth: true,

  access,
  fields,
  labels,
  admin,

  slug: "users",
};
