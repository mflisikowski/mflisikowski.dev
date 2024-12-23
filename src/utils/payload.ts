import configPromise from "@/payload-config";
import type { Page } from "@/payload-types";
import { draftMode } from "next/headers";
import { getPayload as getPayloadService } from "payload";
import type { TypedLocale } from "payload";
import { cache } from "react";

export const getPayload = async () => getPayloadService({ config: configPromise });

type QueryPageBySlugParams = {
  locale: TypedLocale;
  slug: Page["slug"];
};

export const queryPageBySlug = cache(async ({ locale, slug }: QueryPageBySlugParams) => {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload();

  const result = await payload.find({
    overrideAccess: draft,
    collection: "pages",
    pagination: false,
    limit: 1,
    locale,
    draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result?.docs?.[0] || null;
});

export const queryRedirects = cache(async ({ locale }: { locale: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload();

  const redirects = await payload.find({
    overrideAccess: draft,
    collection: "redirects",
    pagination: false,
    locale,
    draft,
  });

  return redirects?.docs || [];
});
