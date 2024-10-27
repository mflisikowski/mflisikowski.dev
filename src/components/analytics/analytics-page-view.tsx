"use client";

import { useConsentAwareAnalytics } from "@/hooks/use-consent-aware-analytics";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect } from "react";

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
