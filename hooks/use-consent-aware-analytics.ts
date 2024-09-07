import { useConsentCheck } from "@/hooks/use-consent-check";
import { useAptabase } from "@aptabase/react";
import { useCallback } from "react";

export function useConsentAwareAnalytics() {
  const { trackEvent: aptabaseTrackEvent } = useAptabase();
  const { accepted } = useConsentCheck();

  const trackEvent = useCallback(
    (eventName: string, eventData: Record<string, any>) => {
      if (accepted) {
        aptabaseTrackEvent(eventName, eventData);
      }
    },
    [accepted, aptabaseTrackEvent],
  );

  return { accepted, trackEvent };
}
