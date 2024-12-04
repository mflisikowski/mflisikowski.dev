import type { UploadthingStorageOptions } from "@payloadcms/storage-uploadthing";

export const config: UploadthingStorageOptions = {
  collections: {
    media: true,
  },

  options: {
    token: process.env.UPLOADTHING_TOKEN,
    acl: "public-read",
  },
};
