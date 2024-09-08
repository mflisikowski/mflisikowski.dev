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

    if (!isInitialized) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: "identified_only",
        capture_pageview: false,
        debug: process.env.NODE_ENV === "development",
        persistence_name: "posthog",
        opt_out_capturing_by_default: true,
        disable_persistence: true,
        loaded: () => {
          setIsInitialized(true);
        },
      });
    }
  }, [checkConsent, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      if (isConsentGiven) {
        posthog.opt_in_capturing();
        posthog.set_config({ disable_persistence: false });
      } else {
        posthog.opt_out_capturing();
        posthog.set_config({ disable_persistence: true });
      }
    }
  }, [isConsentGiven, isInitialized]);

  return (
    <Provider client={posthog}>
      <>{children}</>
    </Provider>
  );
};
