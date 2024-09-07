"use client";

import { AptabaseProvider } from "@aptabase/react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false,
    debug: process.env.NODE_ENV === "development",
    persistence_name: "posthog",
  });
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AptabaseProvider appKey={process.env.NEXT_PUBLIC_APTABASE_APP_KEY!}>
      <PostHogProvider client={posthog}>
        <>{children}</>
      </PostHogProvider>
    </AptabaseProvider>
  );
};
