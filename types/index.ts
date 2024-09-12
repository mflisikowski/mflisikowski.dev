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
