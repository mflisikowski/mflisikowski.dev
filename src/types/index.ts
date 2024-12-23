import type { BlocksField, TypedLocale } from "payload";

/**
 * Frontend related types
 */

export type NavigationItem = {
  subItems?: NavigationItem[];
  title: string;
  href?: string;
};

export type SocialItem = {
  title: string;
  href: string;
  icon: string;
};

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
