import configPromise from "@/payload-config";
import type { Page } from "@/payload-types";
import { draftMode } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { getPayload as getPayloadService } from "payload";
import type { TypedLocale } from "payload";
import { cache } from "react";

export const getPayload = async () => getPayloadService({ config: configPromise });

export const isRootPath = (slugParam: string[]): boolean => slugParam.length === 0;

type QueryPageBySlugParams = {
  locale: TypedLocale;
  slug: Page["slug"];
};

export const queryPageBySlug = cache(async ({ locale, slug }: QueryPageBySlugParams) => {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload();

  const result = await payload.find({
    // overrideAccess: draft, !!!! Setting overrideAccess: draft fails with missing _status field
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
    collection: "redirects",
    pagination: false,
    locale,
    draft,
  });

  return redirects?.docs || [];
});

export const handleRootRedirect = async (locale: TypedLocale): Promise<never> => {
  const redirects = await queryRedirects({ locale });
  const rootRedirect = redirects?.find(({ from }) => from === "/");
  const targetPage = rootRedirect?.to?.reference?.value as Page | undefined;

  if (!targetPage?.slug) {
    notFound();
  }

  redirect(`/${locale}/${targetPage.slug}`);
};
