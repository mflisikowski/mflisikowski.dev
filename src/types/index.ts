import type { BlocksField, TypedLocale } from "payload";

export interface CookieConsentButtonProps {
  consentType: "accepted" | "declined";
  className?: string;
  variant: "cookieAccept" | "cookieDecline";
  label: string;
  onAction?: () => void;
}

export interface PagePropsParams {
  locale: TypedLocale;
  slug: string[];
}

export interface PageProps {
  params: Promise<PagePropsParams>;
}

/**
 * Payload related types
 */

export type PayloadBlockFieldProps = (overrides?: Partial<BlocksField>) => BlocksField;
