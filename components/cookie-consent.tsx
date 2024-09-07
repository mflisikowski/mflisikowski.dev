"use client";

import { useConsentStore } from "@/stores/consent-store";
import { CookieIcon } from "lucide-react";
import Link from "next/link";
import React, { type FC, useEffect } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/utils/cn";

export const CookieConsent: FC = () => {
  const { isVisible, checkConsent, setConsent } = useConsentStore();

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
              <p className="text-lg font-medium">We use cookies</p>
              <CookieIcon className="h-5 w-5" />
            </div>
            <div className="space-y-2 text-balance p-4">
              <p className="text-left text-sm text-gray-700">
                We use cookies to enhance your browsing experience, analyze site traffic, and
                personalize content. By clicking &ldquo;Accept,&rdquo; you consent to our use of
                cookies. We respect your privacy and you can change your preferences at any time.
                For more information, please read our{" "}
                <Link
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                  href="/cookie-policy"
                >
                  cookie policy
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
                Decline
              </Button>
              <Button
                data-consent-type="accepted"
                className="w-full"
                variant="cookieAccept"
                onClick={() => setConsent(true)}
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
