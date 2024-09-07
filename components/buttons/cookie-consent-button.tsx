"use client";

import { useConsentAwareAnalytics } from "@/hooks/use-consent-aware-analytics";
import type { CookieConsentButtonProps } from "@/types";

import { Button } from "@/components/ui/button";

import { cn } from "@/utils/cn";

export const CookieConsentButton = ({
  consentType,
  className,
  onAction,
  variant,
  label,
}: CookieConsentButtonProps) => {
  const { trackEvent } = useConsentAwareAnalytics();

  const handleClick = () => {
    trackEvent("cookie-consent-button-click", { consent: consentType });
    onAction && onAction();
  };

  return (
    <Button onClick={handleClick} className={cn(className)} variant={variant}>
      {label}
    </Button>
  );
};
