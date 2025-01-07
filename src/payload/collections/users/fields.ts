import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

import { isAdminFieldLevel } from "@/payload/access/is-admin";
import { isAdminOrSelfFieldLevel } from "@/payload/access/is-admin-or-self";

export const enum UserRoles {
  Public = "public",
  Admin = "admin",
}

export const usersFields: CollectionConfig["fields"] = [
  {
    type: "row",
    fields: [
      {
        /** Text field docs: https://payloadcms.com/docs/fields/text */
        localized: false,
        required: true,
        label: tl("custom:user-first-name"),
        name: "firstName",
        type: "text",
      },
      {
        /** Text field docs: https://payloadcms.com/docs/fields/text */
        localized: false,
        required: true,
        label: tl("custom:user-last-name"),
        name: "lastName",
        type: "text",
      },
    ],
  },
  {
    /** Select field docs: https://payloadcms.com/docs/fields/select */
    defaultValue: [UserRoles.Public],
    localized: false,
    options: [
      {
        label: tl("custom:user-roles-admin"),
        value: UserRoles.Admin,
      },
      {
        label: tl("custom:user-roles-public"),
        value: UserRoles.Public,
      },
    ],
    access: {
      create: isAdminFieldLevel,
      update: isAdminFieldLevel,
      read: isAdminOrSelfFieldLevel,
    },
    required: true,
    hasMany: true,
    label: tl("custom:user-roles"),
    name: "roles",
    type: "select",
  },
  {
    /** Upload field docs: https://payloadcms.com/docs/fields/upload */
    filterOptions: {
      mimeType: {
        contains: ["image/jpeg", "image/webp"],
      },
    },
    displayPreview: true,
    relationTo: "media",
    label: tl("custom:user-avatar"),
    type: "upload",
    name: "avatar",

    typescriptSchema: [() => ({ $ref: `#/definitions/media` })],
  },
];
