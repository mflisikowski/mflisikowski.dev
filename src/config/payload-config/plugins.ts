import { seoPlugin } from "@payloadcms/plugin-seo";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import type { Plugin } from "payload";

import { config as seoPluginConfig } from "@/config/payload-plugins/seo";
import { config as uploadthingPluginConfig } from "@/config/payload-plugins/uploadthink";

export const plugins: Plugin[] = [
  /**
   * SEO Plugin
   * https://payloadcms.com/docs/plugins/seo
   */
  seoPlugin(seoPluginConfig),

  /**
   * Uploadthing Plugin
   * https://payloadcms.com/docs/upload/storage-adapters#uploadthing-storage
   */
  uploadthingStorage(uploadthingPluginConfig),
];
