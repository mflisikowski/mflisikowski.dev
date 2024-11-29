import config from "@/payload-config";
import type { Page } from "@/payload-types";
import { unstable_cache } from "next/cache";
import { draftMode } from "next/headers";
import { getPayload } from "payload";

export const fetchPage = async (incomingSlugSegments: string[]): Promise<Page | null> => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config });
  const slugSegments = incomingSlugSegments || ["home"];
  const slug = slugSegments.at(-1);

  const data = await payload.find({
    collection: "pages",
    depth: 2,
    draft,
    limit: 1,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        ...(draft
          ? []
          : [
              {
                _status: { equals: "published" },
              },
            ]),
      ],
    },
  });

  const pagePath = `/${slugSegments.join("/")}`;

  const page = data.docs.find(({ breadcrumbs }: Page) => {
    if (!breadcrumbs) return false;
    const { url } = breadcrumbs[breadcrumbs.length - 1];
    return url === pagePath;
  });

  if (page) {
    return page;
  }

  return null;
};

export const fetchPages = async (): Promise<Partial<Page>[]> => {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: "pages",
    depth: 0,
    limit: 300,
    select: {
      breadcrumbs: true,
    },
    where: {
      and: [
        {
          slug: {
            not_equals: "cloud",
          },
        },
        {
          _status: {
            equals: "published",
          },
        },
      ],
    },
  });

  return data.docs;
};

export const getCachedPages = unstable_cache(fetchPages, ["pages"]);

export const getCachedPage = (slug: string[]) => unstable_cache(fetchPage, [`page-${slug}`])(slug);

export const getPageData = async (slug: string[], isDraft: boolean) =>
  isDraft ? fetchPage(slug) : getCachedPage(slug);
