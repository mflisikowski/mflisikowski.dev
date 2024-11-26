import { authenticated } from "@/access/authenticated";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",

  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },

  admin: {
    defaultColumns: ["avatar", "firstName", "lastName", "email"],
    useAsTitle: "firstName",
  },

  fields: [
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
  ],

  timestamps: true,

  auth: true,
};
