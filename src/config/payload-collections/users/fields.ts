import type { CollectionConfig } from "payload";

export const usersFields: CollectionConfig["fields"] = [
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
