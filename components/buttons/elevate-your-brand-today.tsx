"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/utils/cn";

import { useConsentAwareAnalytics } from "@/hooks/use-consent-aware-analytics";

export const ElevateYourBrandTodayButton = () => {
  const { trackEvent } = useConsentAwareAnalytics();
  const t = useTranslations("HomePage");

  return (
    <Link
      className={cn(buttonVariants({ variant: "amber", size: "lg" }))}
      onClick={() => trackEvent("elevate-your-brand-today-button-click")}
      href="/digital-needs-assessment"
    >
      <span className="text-lg font-semibold">
        <>{t("hero.cta")}</>
      </span>
    </Link>
  );
};
