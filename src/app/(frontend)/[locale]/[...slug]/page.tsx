import { getCachedPages, getPageData } from "@/data";
import { createMetadata } from "@/seo";
import { PageProps } from "@/types";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pages = await getCachedPages();

  return pages.map(({ breadcrumbs }) => ({
    slug: breadcrumbs?.[breadcrumbs.length - 1]?.url?.replace(/^\/|\/$/g, "").split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { isEnabled: draft } = await draftMode();
  const { slug } = await params;
  const page = await getPageData(slug, draft);

  return createMetadata(page, slug);
}

const PageTemplate = async ({ params }: PageProps) => {
  const { isEnabled: draft } = await draftMode();
  const { slug } = await params;

  const page = await getPageData(slug, draft);

  if (!page) {
    notFound();
  }

  return (
    <>
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </>
  );
};

export default PageTemplate;
