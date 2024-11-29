import configPromise from "@/payload-config";
import type { CaseStudy, Page, Post } from "@/payload-types";
import type { PayloadCollections } from "@/types";
import { unstable_cache } from "next/cache";
import { getPayload as getPayloadService } from "payload";

export const getPayload = async () => getPayloadService({ config: configPromise });

async function getDocument(collection: PayloadCollections, slug: string, depth = 0) {
  const payload = await getPayload();

  const page = await payload.find({
    collection,
    depth,
    where: { slug: { equals: slug } },
  });

  return page.docs[0];
}

export async function getRedirects(depth = 1) {
  const payload = await getPayload();

  const { docs: redirects } = await payload.find({
    collection: "redirects",
    pagination: false,
    limit: 0,
    depth,
  });

  return redirects;
}

export const getCachedDocument = (collection: PayloadCollections, slug: string) =>
  unstable_cache(async () => getDocument(collection, slug), [collection, slug], {
    tags: [`${collection}_${slug}`],
  });

export const getCachedRedirects = () =>
  unstable_cache(async () => getRedirects(), ["redirects"], {
    tags: ["redirects"],
  });

// prettier-ignore
export const isDocument = (doc: CaseStudy | Page | Post) => typeof doc === "object" && doc !== null && "slug" in doc;
