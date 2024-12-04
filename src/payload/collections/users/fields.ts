import type { CollectionConfig } from "payload";

import { isAdminFieldLevel } from "@/payload/access/is-admin";
import { isAdminOrSelfFieldLevel } from "@/payload/access/is-admin-or-self";

export const usersFields: CollectionConfig["fields"] = [
  {
    type: "row",
    required: true,
    fields: [
      {
        name: "firstName",
        type: "text",
      },
      {
        name: "lastName",
        type: "text",
      },
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
    ],
  },
  {
    displayPreview: true,
    relationTo: "media",
    required: false,
    name: "avatar",
    type: "upload",
  },
];
