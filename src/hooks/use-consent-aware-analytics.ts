import { useConsentStore } from "@/stores/consent-store";
import { useAptabase } from "@aptabase/react";
import { useCallback } from "react";

export function useConsentAwareAnalytics() {
  const { trackEvent: aptabaseTrackEvent } = useAptabase();
  const { isConsentGiven } = useConsentStore();

  const trackEvent = useCallback(
    (name: string, data: Record<string, any> = {}) => {
      if (isConsentGiven) {
        aptabaseTrackEvent(name, data);
      }
    },
    [isConsentGiven, aptabaseTrackEvent],
  );

  return { trackEvent };
}
