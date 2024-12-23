import type { Page } from "@/payload-types";
import { generateMeta } from "@/seo";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { redirect as nextRedirect, notFound } from "next/navigation";

import { AnimatedTextLetters } from "@/components/(frontend)/framer-motion/animated-text-letters";
import { HeroVideo } from "@/components/(frontend)/heros/video";

import type { PageProps } from "@/types/index";

import { cn } from "@/utils/cn";
import { getPayload, queryPageBySlug, queryRedirects } from "@/utils/payload";

export const isValidSlug = (slug: string[]) => {
  return slug?.length && slug?.at(-1)?.length;
};

export async function generateStaticParams() {
  const payload = await getPayload();
  const pages = await payload.find({
    collection: "pages",
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
  const { slug: slugParam, locale } = await params;

  const slug = slugParam?.at(-1) ?? "";
  const page = await queryPageBySlug({ locale, slug });

  return generateMeta(page, slug);
}

const PageTemplate = async ({ params }: PageProps) => {
  const t = await getTranslations("underConstruction");
  const { slug: slugParam, locale } = await params;

  if (!isValidSlug(slugParam)) {
    const redirects = await queryRedirects({ locale });
    const redirect = redirects?.find(({ from }) => from === "/");
    const page = redirect?.to?.reference?.value as Page;

    if (page?.slug) {
      nextRedirect(`/${locale}/${page.slug}`);
    } else {
      notFound();
    }
  }

  const slug = slugParam?.at(-1) ?? "";
  const page = await queryPageBySlug({ locale, slug });

  if (!page) {
    notFound();
  }

  return (
    <div
      className={cn(
        "supports-[height:100cqh]:h-[100cqh] lg:supports-[height:100cqh]:h-[calc(100cqh-theme(height.24))]",
        "relative flex grow items-end",
      )}
    >
      <div className="relative z-20 mb-6 w-full lg:mb-12">
        <div className="space-y-6 px-6 py-6 md:space-y-10 md:px-24">
          <AnimatedTextLetters
            className="font-cal text-4xl font-normal tracking-wide sm:text-5xl lg:text-6xl 2xl:text-8xl"
            animationConfig={{ startDelay: 0.5 }}
            text={page?.title}
            animated
          />

          <AnimatedTextLetters
            className="font-mono text-base font-light md:text-lg lg:text-xl"
            animationConfig={{ startDelay: 0.7 }}
            text={t("subtitle")}
            animated
          />
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <HeroVideo />
      </div>
    </div>
  );
};

export default PageTemplate;
