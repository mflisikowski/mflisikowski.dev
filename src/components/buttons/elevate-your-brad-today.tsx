"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

import { ScribbleDecoration } from "@/components/scribble-decoration";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/utils/cn";

import { useConsentAwareAnalytics } from "@/hooks/use-consent-aware-analytics";

export const ElevateYourBrandTodayButton = () => {
  const { trackEvent } = useConsentAwareAnalytics();
  const t = useTranslations("HomePageHero");

  return (
    <div className="inline-flex items-center justify-start">
      <ScribbleDecoration variant={1} svgClassName="-right-7 -top-7 h-12 w-12">
        <Link
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          onClick={() => trackEvent("elevate-your-brand-today-button-click")}
          href="/digital-needs-assessment"
        >
          <span className="text-lg font-semibold">
            <>{t("cta")}</>
          </span>
        </Link>
      </ScribbleDecoration>
    </div>
  );
};
