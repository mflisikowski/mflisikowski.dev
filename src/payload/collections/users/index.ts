import type { CollectionConfig } from "payload";

import { usersAccess as access } from "@/payload/collections/users/access";
import { usersAdmin as admin } from "@/payload/collections/users/admin";
import { usersFields as fields } from "@/payload/collections/users/fields";
import { usersLabels as labels } from "@/payload/collections/users/labels";

export const Users: CollectionConfig = {
  timestamps: true,
  auth: true,

  access,
  fields,
  labels,
  admin,

  slug: "users",
};
