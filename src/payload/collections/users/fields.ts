import type { CollectionConfig } from "payload";

import { tl } from "@/i18n/translations";

import { isAdminFieldLevel } from "@/payload/access/is-admin";
import { isAdminOrSelfFieldLevel } from "@/payload/access/is-admin-or-self";
import { selectField } from "@/payload/fields/select";
import { textField } from "@/payload/fields/text";
import { uploadField } from "@/payload/fields/upload";

export const enum UserRoles {
  Public = "public",
  Admin = "admin",
}

const userFirstName = textField({
  localized: false,
  required: true,
  label: tl("custom:user-first-name"),
  name: "firstName",
});

const userLastName = textField({
  localized: false,
  required: true,
  label: tl("custom:user-last-name"),
  name: "lastName",
});

const userAvatar = uploadField({
  displayPreview: true,
  localized: false,
  required: false,
  label: tl("custom:user-avatar"),
  name: "avatar",
});

const userRoles = selectField({
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
});

export const usersFields: CollectionConfig["fields"] = [
  userFirstName,
  userLastName,
  userRoles,
  userAvatar,
];
