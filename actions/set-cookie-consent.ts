"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "cookieConsent";

export async function setCookieConsent(accepted: boolean) {
  if (accepted) {
    const oneYearFromNow = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

    cookies().set(COOKIE_NAME, "true", {
      expires: oneYearFromNow,
      path: "/",
      sameSite: "strict",
    });
  } else {
    cookies().delete(COOKIE_NAME);
  }
}

export async function getCookieConsent() {
  return cookies().get(COOKIE_NAME)?.value === "true";
}
