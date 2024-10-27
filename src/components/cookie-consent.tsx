"use client";

import { CookieIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { type FC, useEffect } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/utils/cn";

import { useConsentStore } from "@/stores/consent-store";

export const CookieConsent: FC = () => {
  const { isVisible, checkConsent, setConsent } = useConsentStore();
  const t = useTranslations("cookieConsent");

  useEffect(() => {
    checkConsent();
  }, [checkConsent]);

  return (
    isVisible && (
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 w-full duration-700 sm:bottom-4 sm:left-4 sm:max-w-md",
          "translate-y-0 opacity-100 transition-[opacity,transform]",
        )}
      >
        <div className="m-3 rounded-md border bg-white shadow-lg">
          <div className="grid gap-2">
            <div className="flex h-14 items-center justify-between border-b p-4">
              <p className="text-lg font-medium">{t("title")}</p>
              <CookieIcon className="h-5 w-5" />
            </div>
            <div className="space-y-2 text-balance p-4">
              <p className="text-left text-sm leading-relaxed text-gray-700">
                {t("description")}{" "}
                <Link
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                  href="/cookie-policy"
                >
                  {t("privacyPolicy")}
                </Link>
              </p>
            </div>
            <div className="flex gap-2 border-t p-4">
              <Button
                data-consent-type="declined"
                className="w-full"
                variant="cookieDecline"
                onClick={() => setConsent(false)}
              >
                {t("decline")}
              </Button>
              <Button
                data-consent-type="accepted"
                className="w-full"
                variant="cookieAccept"
                onClick={() => setConsent(true)}
              >
                {t("accept")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
