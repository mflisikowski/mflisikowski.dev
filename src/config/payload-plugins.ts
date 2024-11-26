import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import type { Config } from "payload";

export const payloadPluginsConfig: Config["plugins"] = [
  uploadthingStorage({
    collections: {
      media: true,
    },

    options: {
      token: process.env.UPLOADTHING_TOKEN,
      acl: "public-read",
    },
  }),
];
