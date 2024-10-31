"use server";

import { cookies } from "next/headers";

const COOKIE_OPTIONS = {
  secure: true,
  sameSite: "lax" as const,
  maxAge: 365 * 24 * 60 * 60, // 1 year
  path: "/",
  httpOnly: true,
};

export async function updateCookieConsent(consent: boolean) {
  try {
    const cookieStore = await cookies();

    cookieStore.set("cookie-consent", consent ? "true" : "false", COOKIE_OPTIONS);
  } catch (error) {
    console.error("Failed to set cookie consent:", error);
    throw new Error("Failed to set cookie preferences");
  }
}

export async function fetchCookieConsent(): Promise<boolean | null> {
  try {
    const cookieStore = await cookies();
    const consent = cookieStore.get("cookie-consent");
    return consent ? consent.value === "true" : null;
  } catch (error) {
    console.error("Failed to get cookie consent:", error);
    return null;
  }
}
