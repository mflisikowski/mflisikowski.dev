import type { RedirectsPluginConfig } from "@payloadcms/plugin-redirects/types";

import { revalidateRedirects } from "@/hooks/revalidate-redirects";

export const config: RedirectsPluginConfig = {
  collections: ["pages"],
  overrides: {
    fields: ({ defaultFields }) =>
      defaultFields.map((field) => ({
        ...field,
        localized: true,
      })),
    hooks: {
      afterChange: [revalidateRedirects],
    },
  },
};
