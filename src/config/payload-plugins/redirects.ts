import type { RedirectsPluginConfig } from "@payloadcms/plugin-redirects/types";

import { revalidateRedirects } from "@/hooks/revalidate-redirects";

export const config: RedirectsPluginConfig = {
  collections: ["pages"],
  overrides: {
    hooks: {
      afterChange: [revalidateRedirects],
    },
  },
};