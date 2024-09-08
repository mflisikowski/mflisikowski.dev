"use client";

import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";
import { type FC, type PropsWithChildren, useEffect, useState } from "react";

import { useConsentStore } from "@/stores/consent-store";

export const PostHogProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isConsentGiven, checkConsent } = useConsentStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    checkConsent();
  }, [checkConsent]);

  useEffect(() => {
    if (isConsentGiven && !isInitialized) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: "identified_only",
        capture_pageview: false,
        debug: process.env.NODE_ENV === "development",
        persistence_name: "posthog",
        loaded: () => {
          setIsInitialized(true);
        },
      });
    } else if (!isConsentGiven && isInitialized) {
      posthog.opt_out_capturing();
      posthog.reset();
      setIsInitialized(false);
    }
  }, [isConsentGiven, isInitialized]);

  return (
    <Provider client={posthog}>
      <>{children}</>
    </Provider>
  );
};
