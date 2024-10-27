"use client";

import { useConsentAwareAnalytics } from "@/hooks/use-consent-aware-analytics";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function AnalyticsPageView(): null {
  const { trackEvent } = useConsentAwareAnalytics();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const trackPageView = useCallback(() => {
    if (!pathname) return;

    const url = new URL(pathname, window.origin);
    url.search = searchParams.toString();

    trackEvent("page_view", { url: url.toString() });
  }, [pathname, searchParams, trackEvent]);

  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  return null;
}
