import { create } from "zustand";
import { persist } from "zustand/middleware";

import { getCookieConsent, setCookieConsent } from "@/actions/set-cookie-consent";

interface CookiePreferences {
  functional: boolean;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface ConsentState {
  isConsentDeclined: boolean;
  isSettingsVisible: boolean;
  isConsentGiven: boolean | null;
  preferences: CookiePreferences;

  setPreferences: (preferences: Partial<CookiePreferences>) => Promise<void>;
  checkConsent: () => Promise<void>;
  setConsent: (consent: boolean) => Promise<void>;
  hideSettings: () => void;
  showSettings: () => void;
}

export const useConsentStore = create<ConsentState>()(
  persist(
    (set) => ({
      isConsentDeclined: false,
      isSettingsVisible: false,
      isConsentGiven: null,

      preferences: {
        necessary: true,
        functional: true,
        analytics: true,
        marketing: true,
      },

      checkConsent: async () => {
        const localConsent = localStorage.getItem("cookie-consent-storage");
        if (localConsent) {
          const parsed = JSON.parse(localConsent);
          if (parsed.state?.isConsentGiven !== null) {
            set({ isConsentGiven: parsed.state.isConsentGiven });
            return;
          }
        }

        const consent = await getCookieConsent();
        set({
          isConsentDeclined: consent === false,
          isConsentGiven: consent,
        });
      },

      setConsent: async (consent: boolean) => {
        await setCookieConsent(consent);

        set({
          isConsentDeclined: !consent,
          isConsentGiven: consent,
          isSettingsVisible: false,
        });
      },

      setPreferences: async (newPreferences: Partial<CookiePreferences>) => {
        set((state) => ({
          preferences: {
            ...state.preferences,
            ...newPreferences,
            necessary: true,
          },
        }));
      },

      hideSettings: () => set({ isSettingsVisible: false }),
      showSettings: () => set({ isSettingsVisible: true }),
    }),
    {
      name: "cookie-consent-storage",
      partialize: (state) => ({
        preferences: state.preferences,
        isConsentGiven: state.isConsentGiven,
      }),
      skipHydration: true,
    },
  ),
);
