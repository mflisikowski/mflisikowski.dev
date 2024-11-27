import type { Page } from "@/payload-types";
import type { GenerateTitle, GenerateURL, SEOPluginConfig } from "@payloadcms/plugin-seo/types";

import { META_WEBSITE_TITLE } from "@/config/meta";

import { getServerSideURL } from "@/utils/get-url";

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | ${META_WEBSITE_TITLE}` : META_WEBSITE_TITLE;
};

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL();
  return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const config: SEOPluginConfig = {
  generateTitle,
  generateURL,
};
