import type { CollectionConfig } from "payload";

export const mediaUpload: CollectionConfig["upload"] = {
  adminThumbnail: "thumbnail",

  mimeTypes: ["image/jpeg", "image/jpg", "image/webp", "video/mp4"],

  staticDir: "media",

  imageSizes: [
    {
      name: "thumbnail",
      width: 200,
      height: 200,
      position: "centre",
    },
    {
      name: "avatar",
      width: 100,
      height: 100,
      position: "centre",
    },
    {
      name: "small",
      width: 400,
      height: 300,
      position: "centre",
    },
    {
      name: "medium",
      width: 800,
      height: 600,
      position: "centre",
    },
    {
      name: "large",
      width: 1200,
      height: 900,
      position: "centre",
    },
    {
      name: "hero",
      width: 1920,
      height: 1080,
      position: "centre",
    },
  ],
};
