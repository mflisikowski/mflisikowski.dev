import { getCookieConsent } from "@/actions/set-cookie-consent";
import { useEffect, useState } from "react";

export function useConsentCheck() {
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkConsent = async () => {
      try {
        setLoading(true);
        const consent = await getCookieConsent();
        setAccepted(consent);
      } catch (error) {
        console.error("Error checking consent:", error);
      } finally {
        setLoading(false);
      }
    };
    checkConsent();
  }, []);

  return { accepted, loading };
}
