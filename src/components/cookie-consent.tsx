"use client";

import { CookieIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { type FC, useEffect, useState } from "react";

import { CookieSettingsModal } from "@/components/cookie-settings-modal";
import { Button } from "@/components/ui/button";

import { cn } from "@/utils/cn";

import { useConsentStore } from "@/stores/consent-store";

export const ButtonManage = ({ hideText = false }: { hideText?: boolean }) => {
  const { isConsentGiven, showSettings } = useConsentStore();
  const t = useTranslations("cookieConsent");

  return (
    <Button
      className="flex w-full items-center gap-2"
      variant={"cookieManage"}
      onClick={showSettings}
      aria-label={t("manage")}
    >
      <CookieIcon
        className={cn("h-5 w-5 shrink-0", isConsentGiven ? "block" : "hidden", hideText && "")}
        aria-hidden="true"
      />
      <p className={cn("group-hover:underline", hideText && "hidden")}>
        <>{t("manage")}</>
      </p>
    </Button>
  );
};

export const CookieConsent: FC = () => {
  // prettier-ignore
  const { isConsentGiven, setConsent, checkConsent, acceptAll } = useConsentStore();
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

  const handleAcceptAll = () => {
    acceptAll().catch((error) => {
      console.error("Error accepting all cookies:", error);
    });
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      {!isConsentGiven && (
        <div className="fixed inset-0 z-40 h-screen w-screen bg-black/45 backdrop-blur-sm duration-200 animate-in fade-in" />
      )}

      <div
        className="fixed bottom-0 left-0 z-50 transform transition-all duration-300 sm:bottom-4 sm:left-4 sm:max-w-md"
        aria-labelledby="cookie-consent-title"
        aria-modal="true"
        role="dialog"
      >
        {isConsentGiven ? (
          <div className="hidden p-4 lg:block">
            <ButtonManage hideText />
          </div>
        ) : (
          <div className="rounded-md border bg-white/95 shadow-lg backdrop-blur-sm">
            <div className="grid gap-2">
              <div className="flex h-14 items-center justify-between border-b p-4">
                <h2
                  aria-labelledby="cookie-consent-title"
                  className="text-lg font-medium text-zinc-950"
                >
                  {t("title")}
                </h2>
                <CookieIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="space-y-2 border-b p-4">
                <p
                  className="text-left text-sm leading-relaxed text-zinc-950"
                  aria-describedby="cookie-consent-description"
                >
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

              <div className="flex gap-2 p-4">
                <ButtonManage />
                <Button
                  className="w-full"
                  variant="cookieAccept"
                  onClick={handleAcceptAll}
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
