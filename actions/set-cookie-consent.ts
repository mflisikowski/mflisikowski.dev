"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "cookieConsent";

export async function setCookieConsent(accepted: boolean) {
  const oneYearFromNow = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

  cookies().set(COOKIE_NAME, accepted.toString(), {
    expires: oneYearFromNow,
    path: "/",
    sameSite: "strict",
  });
}

export async function getCookieConsent() {
  const consentCookie = cookies().get(COOKIE_NAME);

  if (consentCookie?.value === "false") return false;
  if (consentCookie?.value === "true") return true;

  return false;
}
