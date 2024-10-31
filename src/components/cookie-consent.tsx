"use client";

import { CookieIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { type FC, useEffect, useState } from "react";

import { CookieSettingsModal } from "@/components/cookie-settings-modal";
import { Button } from "@/components/ui/button";

import { useConsentStore } from "@/stores/consent-store";

export const CookieConsent: FC = () => {
  const { isConsentGiven, setConsent, showSettings, checkConsent } = useConsentStore();
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("cookieConsent");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      checkConsent()
        .catch((error) => {
          console.error("Error checking cookie consent:", error);
          setConsent(false);
        })
        .finally(() => setIsLoading(false));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [checkConsent, setConsent]);

  if (isLoading) {
    return null;
  }

  const ButtonManage = () => (
    <Button
      className="group flex w-full items-center gap-2"
      variant="cookieManage"
      onClick={showSettings}
      aria-label={t("manage")}
    >
      <CookieIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <p className="hidden group-hover:block group-hover:underline">{t("manage")}</p>
    </Button>
  );

  return (
    <>
      <div
        className="fixed bottom-0 left-0 z-50 transform transition-all duration-300 sm:bottom-4 sm:left-4 sm:max-w-md"
        aria-labelledby="cookie-consent-title"
        aria-modal="true"
        role="dialog"
      >
        {isConsentGiven ? (
          <ButtonManage />
        ) : (
          <div className="rounded-md border bg-white/95 shadow-lg backdrop-blur-sm">
            <div className="grid gap-2">
              <div className="flex h-14 items-center justify-between border-b p-4">
                <h2 id="cookie-consent-title" className="text-lg font-medium">
                  {t("title")}
                </h2>
                <CookieIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="space-y-2 p-4">
                <p className="text-left text-sm leading-relaxed text-gray-700">
                  {t("description")}{" "}
                  <Link
                    className="text-sm text-blue-600 underline hover:text-blue-800"
                    href="/cookie-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("privacyPolicy")}
                  </Link>
                </p>
              </div>

              <div className="flex gap-2 border-t p-4">
                <ButtonManage />

                <Button
                  className="w-full"
                  variant="cookieAccept"
                  onClick={() => setConsent(true)}
                  aria-label={t("accept")}
                >
                  {t("accept")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <CookieSettingsModal />
    </>
  );
};
