import type { Page } from "@/payload-types";
import type { Metadata } from "next";

import {
  META_AUTHOR_NAME,
  META_AUTHOR_URL,
  META_DESCRIPTION,
  META_SITE_NAME,
  META_TYPE,
  META_URL,
  META_WEBSITE_TITLE,
} from "@/constants/meta";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: META_TYPE,
  siteName: META_SITE_NAME,
  title: META_WEBSITE_TITLE,
  description: META_DESCRIPTION,
  images: [
    {
      url: "/images/og-image.jpg",
    },
  ],
};

export const mergeOpenGraph = (og?: Metadata["openGraph"]): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};

// TODO: Property 'url' does not exist on type 'number | Media'. Property 'url' does not exist on type 'number'.ts(2339)
// TODO: Add keywords
export function generateMeta(page: Page, slug: string[]): Metadata {
  const description = page?.meta?.description || META_DESCRIPTION;
  const title = page?.meta?.title || META_WEBSITE_TITLE;
  // const image = page?.meta?.image?.url || "/images/og-image.jpg";
  const url = Array.isArray(slug) ? slug.join("/") : "/";

  return {
    metadataBase: new URL(META_URL),
    description,
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    authors: {
      name: META_AUTHOR_NAME,
      url: META_AUTHOR_URL,
    },

    openGraph: mergeOpenGraph({
      description,
      // images: image ? [{ url: image }] : undefined,
      title,
      url,
    }),
  };
}
