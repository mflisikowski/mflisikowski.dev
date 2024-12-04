import { nestedDocsPlugin } from "@payloadcms/plugin-nested-docs";
import { redirectsPlugin } from "@payloadcms/plugin-redirects";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import type { Plugin } from "payload";

import { config as nestedDocsPluginConfig } from "@/payload/plugins/nested-docs";
import { config as redirectsPluginConfig } from "@/payload/plugins/redirects";
import { config as seoPluginConfig } from "@/payload/plugins/seo";
import { config as uploadthingPluginConfig } from "@/payload/plugins/uploadthink";

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

  /**
   * Nested Docs Plugin
   * https://payloadcms.com/docs/plugins/nested-docs
   */
  nestedDocsPlugin(nestedDocsPluginConfig),

  /**
   * Redirects Plugin
   * https://payloadcms.com/docs/plugins/redirects
   */
  redirectsPlugin(redirectsPluginConfig),
];
