import type { UsersCollectionConfig } from ".";

export const usersFields: UsersCollectionConfig["fields"] = [
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
