import { generateMeta } from "@/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Hero } from "@/components/(frontend)/heros/home";

import type { PageProps } from "@/types/index";

import { getPayload, handleRootRedirect, isRootPath, queryPageBySlug } from "@/utils/payload";

export default async function Page({ params }: PageProps) {
  const { slug = [], locale } = await params;

  if (isRootPath(slug)) {
    await handleRootRedirect(locale);
  }

  const page = await queryPageBySlug({ locale, slug: slug?.at(-1) ?? "" });

  if (!page) notFound();

  return (
    <div className="relative">
      {page?.hero && (
        <Hero
          subheadline={page?.hero?.subheadline}
          headline={page?.hero?.headline}
          media={page?.hero?.media}
        />
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const payload = await getPayload();
  const pages = await payload.find({
    collection: "pages",
    pagination: false,
    draft: false,
    select: {
      breadcrumbs: true,
    },
    where: {
      _status: {
        equals: "published",
      },
    },
  });

  return pages.docs.map(({ breadcrumbs }) => ({
    slug: breadcrumbs?.[breadcrumbs.length - 1]?.url?.replace(/^\/|\/$/g, "").split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug = [], locale } = await params;

  const path = slug?.at(-1) ?? "";
  const page = await queryPageBySlug({ locale, slug: path });

  return generateMeta(page, path);
}
