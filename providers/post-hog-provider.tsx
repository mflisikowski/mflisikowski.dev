"use client";

import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";
import { type FC, type PropsWithChildren, useEffect } from "react";

import { useConsentStore } from "@/stores/consent-store";

export const PostHogProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isConsentGiven, checkConsent } = useConsentStore();

  useEffect(() => {
    checkConsent();
  }, [checkConsent]);

  useEffect(() => {
    if (isConsentGiven) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: "identified_only",
        capture_pageview: false,
        debug: process.env.NODE_ENV === "development",
        persistence_name: "posthog",
      });
    }
  }, [isConsentGiven]);

  return (
    <>
      {isConsentGiven && <Provider client={posthog}>{children}</Provider>}
      {!isConsentGiven && children}
    </>
  );
};
