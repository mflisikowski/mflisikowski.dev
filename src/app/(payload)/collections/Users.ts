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
    defaultColumns: ["firstName", "lastName", "email"],
    useAsTitle: "firstName",
  },

  auth: true,

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
      name: "avatar",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],

  timestamps: true,
};
