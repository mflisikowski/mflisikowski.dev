import { getCookieConsent } from "@/actions/set-cookie-consent";
import { useEffect, useState } from "react";

export function useConsentCheck() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const checkConsent = async () => {
      try {
        const consent = await getCookieConsent();
        setAccepted(consent);
      } catch (error) {
        console.error("Error checking consent:", error);
      }
    };
    checkConsent();
  }, []);

  return { accepted };
}
