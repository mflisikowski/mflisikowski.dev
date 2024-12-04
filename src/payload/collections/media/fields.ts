import type { CollectionConfig } from "payload";

export const mediaFields: CollectionConfig["fields"] = [
  {
    name: "alt",
    type: "text",
    required: true,
  },
];
