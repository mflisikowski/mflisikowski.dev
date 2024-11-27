import type { CollectionConfig } from "payload";

import { usersAccess as access } from "@/config/payload-collections/users/access";
import { usersAdmin as admin } from "@/config/payload-collections/users/admin";
import { usersFields as fields } from "@/config/payload-collections/users/fields";

export type UsersCollectionConfig = CollectionConfig<"users">;

export const Users: UsersCollectionConfig = {
  timestamps: true,
  auth: true,

  access,
  fields,
  admin,

  slug: "users",
};
