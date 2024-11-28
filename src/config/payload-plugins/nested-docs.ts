import type { NestedDocsPluginConfig } from "@payloadcms/plugin-nested-docs/types";

export const config: NestedDocsPluginConfig = {
  collections: ["pages"],
  generateLabel: (_, doc) => doc.title as string,
  generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug as string}`, ""),
};
