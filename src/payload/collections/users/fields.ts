import type { CollectionConfig } from "payload";

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
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-user-first-name"),

  required: true,
  name: "firstName",
});

const userLastName = textField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-user-last-name"),

  required: true,
  name: "lastName",
});

const userAvatar = uploadField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-user-avatar"),

  displayPreview: true,
  required: false,
  name: "avatar",
});

const userRoles = selectField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-user-roles"),

  defaultValue: [UserRoles.Public],
  options: [
    //
    UserRoles.Admin,
    UserRoles.Public,
  ],
  access: {
    create: isAdminFieldLevel,
    update: isAdminFieldLevel,
    read: isAdminOrSelfFieldLevel,
  },
  required: true,
  hasMany: true,
  name: "roles",
});

export const usersFields: CollectionConfig["fields"] = [
  userFirstName,
  userLastName,
  userRoles,
  userAvatar,
];
