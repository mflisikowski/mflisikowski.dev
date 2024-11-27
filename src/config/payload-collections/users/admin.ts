import type { UsersCollectionConfig } from ".";

export const usersAdmin: UsersCollectionConfig["admin"] = {
  defaultColumns: ["avatar", "firstName", "lastName", "email"],
  useAsTitle: "firstName",
};
