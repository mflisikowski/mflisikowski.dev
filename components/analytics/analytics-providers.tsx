"use client";

import posthog from "posthog-js";
import { PostHogProvider as AnalyticsProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false,
  });
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnalyticsProvider client={posthog}>
      <>{children}</>
    </AnalyticsProvider>
  );
};
