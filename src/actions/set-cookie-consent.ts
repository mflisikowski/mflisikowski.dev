"use server";

import { cookies } from "next/headers";

type CookiePreferences = {
  functional?: boolean;
  analytics?: boolean;
  marketing?: boolean;
};

const COOKIE_OPTIONS = {
  secure: true,
  sameSite: "lax" as const,
  maxAge: 365 * 24 * 60 * 60, // 1 year
  path: "/",
  httpOnly: true,
};

export async function setCookieConsent(consent: boolean, preferences?: CookiePreferences) {
  try {
    const cookieStore = await cookies();

    cookieStore.set("cookie-consent", consent ? "true" : "false", COOKIE_OPTIONS);

    if (preferences) {
      cookieStore.set("cookie-preferences", JSON.stringify(preferences), COOKIE_OPTIONS);
    }
  } catch (error) {
    console.error("Failed to set cookie consent:", error);
    throw new Error("Failed to set cookie preferences");
  }
}

export async function getCookieConsent(): Promise<boolean | null> {
  try {
    const cookieStore = await cookies();
    const consent = cookieStore.get("cookie-consent");
    return consent ? consent.value === "true" : null;
  } catch (error) {
    console.error("Failed to get cookie consent:", error);
    return null;
  }
}

export async function getCookiePreferences(): Promise<CookiePreferences | null> {
  try {
    const cookieStore = await cookies();
    const preferences = cookieStore.get("cookie-preferences");

    if (!preferences?.value) return null;

    return JSON.parse(preferences.value) as CookiePreferences;
  } catch (error) {
    console.error("Failed to parse cookie preferences:", error);
    return null;
  }
}
