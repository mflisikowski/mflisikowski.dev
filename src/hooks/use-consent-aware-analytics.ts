import { useAptabase } from "@aptabase/react";
import { useCallback } from "react";

import { useConsentStore } from "@/stores/consent-store";

type AnalyticsData = Record<string, string | number | boolean>;

export function useConsentAwareAnalytics() {
  const { trackEvent: aptabaseTrackEvent } = useAptabase();
  const { isConsentGiven } = useConsentStore();

  const trackEvent = useCallback(
    (name: string, data: AnalyticsData = {}) => {
      if (isConsentGiven) {
        aptabaseTrackEvent(name, data);
      }
    },
    [isConsentGiven, aptabaseTrackEvent],
  );

  return { trackEvent };
}
