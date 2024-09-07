"use client";

import { setCookieConsent } from "@/actions/set-cookie-consent";
import { useConsentCheck } from "@/hooks/use-consent-check";
import { CookieIcon } from "lucide-react";
import Link from "next/link";
import React, { type FC } from "react";
import { useEffect, useState } from "react";

import { CookieConsentButton } from "@/components/buttons/cookie-consent-button";

import { cn } from "@/utils/cn";

interface CookieConsentProps {
  onDeclineCallback?: () => void;
  onAcceptCallback?: () => void;
}

export const CookieConsent: FC<CookieConsentProps> = ({ onDeclineCallback, onAcceptCallback }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { accepted } = useConsentCheck();

  const handleConsent = async (accepted: boolean): Promise<void> => {
    setIsVisible(false);

    if (accepted) {
      await setCookieConsent(true);
      onAcceptCallback?.();
    } else {
      onDeclineCallback?.();
    }
  };

  useEffect(() => {
    setIsVisible(!accepted);
  }, [accepted]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 w-full duration-700 sm:bottom-4 sm:left-4 sm:max-w-md",
        "translate-y-0 opacity-100 transition-[opacity,transform]",
      )}
    >
      <div className="m-3 rounded-md border bg-white shadow-lg">
        <div className="grid gap-2">
          <div className="flex h-14 items-center justify-between border-b p-4">
            <p className="text-lg font-medium">We use cookies</p>
            <CookieIcon className="h-5 w-5" />
          </div>
          <div className="space-y-2 text-balance p-4">
            <p className="text-left text-sm text-gray-700">
              We use cookies to enhance your browsing experience, analyze site traffic, and
              personalize content. By clicking &ldquo;Accept,&rdquo; you consent to our use of
              cookies. We respect your privacy and you can change your preferences at any time. For
              more information, please read our{" "}
              <Link
                className="text-sm text-blue-600 underline hover:text-blue-800"
                href="/cookie-policy"
              >
                cookie policy
              </Link>
            </p>
          </div>
          <div className="flex gap-2 border-t p-4">
            <CookieConsentButton
              onAction={() => handleConsent(false)}
              consentType="declined"
              className="w-full"
              variant="cookieDecline"
              label="Decline"
            />

            <CookieConsentButton
              onAction={() => handleConsent(true)}
              consentType="accepted"
              className="w-full"
              variant="cookieAccept"
              label="Accept"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
