import type { CollectionConfig } from "payload";

import { isAdminFieldLevel } from "@/config/payload-access/is-admin";
import { isAdminOrSelfFieldLevel } from "@/config/payload-access/is-admin-or-self";

export const usersFields: CollectionConfig["fields"] = [
  {
    name: "roles",
    type: "select",
    access: {
      create: isAdminFieldLevel,
      update: isAdminFieldLevel,
      read: isAdminOrSelfFieldLevel,
    },
    defaultValue: ["public"],
    hasMany: true,
    options: ["admin", "public"],
    required: true,
  },
  {
    name: "lastName",
    type: "text",
  },
  {
    name: "firstName",
    type: "text",
  },
  {
    displayPreview: true,
    relationTo: "media",
    required: false,
    name: "avatar",
    type: "upload",
  },
];
