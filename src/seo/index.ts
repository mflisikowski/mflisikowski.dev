import type { Metadata } from "next";

import {
  META_AUTHOR_NAME,
  META_AUTHOR_URL,
  META_DESCRIPTION,
  META_KEYWORDS,
  META_SITE_NAME,
  META_TYPE,
  META_WEBSITE_TITLE,
} from "@/config/meta";

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

export function createMetadata(page: any, slug: string[]): Metadata {
  const description = page?.meta?.description || META_DESCRIPTION;
  const keywords = page?.meta?.keywords || META_KEYWORDS;
  const title = page?.meta?.title || META_WEBSITE_TITLE;
  const image = page?.meta?.image?.url || "/images/og-image.jpg";
  const url = Array.isArray(slug) ? slug.join("/") : "/";

  return {
    description,
    keywords,
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
      images: image ? [{ url: image }] : undefined,
      title,
      url,
    }),
  };
}
