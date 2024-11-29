import { getTranslations } from "next-intl/server";
import Link from "next/link";

import { FadeIn, FadeInStagger } from "@/components/(frontend)/framer-motion/fade-in";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/utils/cn";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <FadeInStagger
      className={cn(
        "supports-[height:100cqh]:h-[100cqh] lg:supports-[height:100cqh]:h-[calc(100cqh-theme(height.24))]",
        "relative flex grow items-center justify-center",
      )}
    >
      <FadeIn className="text-center">
        <p>{t("title")}</p>

        <Link href="/" className={buttonVariants({ variant: "link" })}>
          {t("link")}
        </Link>
      </FadeIn>
    </FadeInStagger>
  );
}
