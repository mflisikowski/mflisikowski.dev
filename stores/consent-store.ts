import { create } from "zustand";

import { getCookieConsent, setCookieConsent } from "@/actions/set-cookie-consent";

interface ConsentState {
  isConsentDeclined: boolean;
  isConsentGiven: boolean;
  isVisible: boolean;

  checkConsent: () => Promise<void>;
  setConsent: (consent: boolean) => Promise<void>;
}

export const useConsentStore = create<ConsentState>((set) => ({
  isConsentDeclined: false,
  isConsentGiven: false,
  isVisible: false,

  checkConsent: async () => {
    const consent = await getCookieConsent();
    set({
      isConsentDeclined: consent === false,
      isConsentGiven: consent === true,
      isVisible: consent === false && true,
    });
  },

  setConsent: async (consent: boolean) => {
    await setCookieConsent(consent);
    set({
      isConsentDeclined: !consent,
      isConsentGiven: consent,
      isVisible: false,
    });
  },
}));
