import { create } from "zustand";
import { persist } from "zustand/middleware";

import { fetchCookieConsent, updateCookieConsent } from "@/actions/set-cookie-consent";

export interface CookiePreferences {
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
  getLocalConsent: () => { isConsentGiven: boolean | null; preferences: CookiePreferences } | null;
  checkConsent: () => Promise<void>;
  setConsent: (consent: boolean) => Promise<void>;
  hideSettings: () => void;
  showSettings: () => void;
  acceptAll: () => Promise<void>;
}

type PersistedState = Pick<ConsentState, "isConsentGiven" | "preferences">;

export const useConsentStore = create<ConsentState>()(
  persist(
    (set) => ({
      isConsentDeclined: false,
      isSettingsVisible: false,
      isConsentGiven: null,

      preferences: {
        necessary: true,
        functional: false,
        analytics: false,
        marketing: false,
      },

      getLocalConsent: () => {
        try {
          const localConsent = localStorage.getItem("cookie-consent-storage");
          if (!localConsent) return null;

          const parsed = JSON.parse(localConsent) as { state: PersistedState };
          if (parsed.state?.isConsentGiven === null) return null;

          return {
            isConsentGiven: parsed.state.isConsentGiven,
            preferences: parsed.state.preferences,
          };
        } catch (error) {
          console.error("Error parsing local consent:", error);
          return null;
        }
      },

      checkConsent: async () => {
        const localConsent = useConsentStore.getState().getLocalConsent();

        if (localConsent) {
          set(localConsent);
          return;
        }

        try {
          const consent = await fetchCookieConsent();

          set({
            isConsentDeclined: consent === false,
            isConsentGiven: consent,
          });
        } catch (error) {
          console.error("Error checking consent:", error);

          set({
            isConsentDeclined: false,
            isConsentGiven: null,
          });
        }
      },

      setConsent: async (consent: boolean) => {
        try {
          await updateCookieConsent(consent);

          set({
            isConsentDeclined: !consent,
            isSettingsVisible: false,
            isConsentGiven: consent,
          });
        } catch (error) {
          console.error("Error setting consent:", error);
          throw new Error("Failed to set consent");
        }
      },

      setPreferences: async (newPreferences: Partial<CookiePreferences>) => {
        try {
          await updateCookieConsent(true);

          set((state) => ({
            isSettingsVisible: false,
            isConsentDeclined: false,
            isConsentGiven: true,
            preferences: {
              ...state.preferences,
              ...newPreferences,
              necessary: true,
            },
          }));
        } catch (error) {
          console.error("Error setting preferences:", error);
          throw new Error("Failed to set preferences");
        }
      },

      hideSettings: () => set({ isSettingsVisible: false }),
      showSettings: () => set({ isSettingsVisible: true }),

      acceptAll: async () => {
        try {
          await updateCookieConsent(true);

          set(() => ({
            isSettingsVisible: false,
            isConsentDeclined: false,
            isConsentGiven: true,
            preferences: {
              necessary: true,
              functional: true,
              analytics: true,
              marketing: true,
            },
          }));
        } catch (error) {
          console.error("Error accepting all cookies:", error);
          throw new Error("Failed to accept all cookies");
        }
      },
    }),
    {
      name: "cookie-consent-storage",
      partialize: (state): PersistedState => ({
        preferences: state.preferences,
        isConsentGiven: state.isConsentGiven,
      }),
      skipHydration: true,
    },
  ),
);
