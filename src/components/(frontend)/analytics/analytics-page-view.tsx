"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { type JSX, Suspense, useCallback, useEffect } from "react";

import { useConsentAwareAnalytics } from "@/hooks/use-consent-aware-analytics";

function AnalyticsPageViewInner(): null {
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

export default function AnalyticsPageView(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <AnalyticsPageViewInner />
    </Suspense>
  );
}
