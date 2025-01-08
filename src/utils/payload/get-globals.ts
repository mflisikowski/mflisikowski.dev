import { getLocale } from "next-intl/server";
import { unstable_cache } from "next/cache";
import type { TypedLocale } from "payload";

import { getPayload } from "@/utils/payload";
import { NAVIGATION_KEY, NAVIGATION_TAG, type GlobalKeys as Slug } from "@/utils/payload/tags";

async function getGlobal(slug: Slug, depth = 0) {
  const payload = await getPayload();
  const locale = await getLocale();

  const global = await payload.findGlobal({
    locale: locale as TypedLocale,
    depth,
    slug,
  });

  payload.logger.info(`Global ${slug} fetched, for locale ${locale}`);

  return global;
}

export const getCachedGlobal = (slug: Slug, revalidateTagName: string, depth = 1) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [revalidateTagName],
    revalidate: 3600,
  });

export const getCachedNavigation = () => getCachedGlobal(NAVIGATION_KEY, NAVIGATION_TAG, 2)();
