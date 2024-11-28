import type { CollectionConfig } from "payload";

export const usersAdmin: CollectionConfig["admin"] = {
  defaultColumns: ["avatar", "firstName", "lastName", "email"],
  useAsTitle: "firstName",
};
