"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "cookieConsent";

export async function setCookieConsent(accepted: boolean) {
  const oneYearFromNow = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
  const consentCookie = await cookies();

  consentCookie.set(COOKIE_NAME, accepted.toString(), {
    expires: oneYearFromNow,
    path: "/",
    sameSite: "strict",
  });
}

export async function getCookieConsent() {
  const consentCookie = await cookies();
  const consent = consentCookie.get(COOKIE_NAME);

  if (consent?.value === "false") return false;
  if (consent?.value === "true") return true;

  return false;
}
