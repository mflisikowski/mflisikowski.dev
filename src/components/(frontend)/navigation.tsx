import { type Navigation } from "@/payload-types";
import Link from "next/link";

import { NavigationDesktop } from "@/components/(frontend)/navigation-desktop";
import { NavigationMobile } from "@/components/(frontend)/navigation-mobile";
import { NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { cn } from "@/utils/cn";

export type NavigationLinks = Pick<Navigation, "links">;
export type NavigationLink = NonNullable<Navigation["links"]>[number];

export interface NavigationItem {
  item: NavigationLink;
}

interface NavigationItemProps extends NavigationItem {
  onOpenChange?: (open: boolean) => void;
  variant: "desktop" | "mobile";
}

export const NavigationItem = ({ item, variant, onOpenChange }: NavigationItemProps) => {
  if (!item.link?.url && !item.link?.reference) return null;

  const commonProps = item.link.newTab
    ? {
        rel: "noopener noreferrer",
        target: "_blank",
      }
    : {};

  const label = item.link.url ? item.link.label : item.link.reference?.value.pageTitle;
  const href = item.link.url || item.link.reference?.value.slug;

  if (!href || !label) return null;

  if (variant === "mobile") {
    return (
      <Link
        href={href}
        className={cn(navigationMenuTriggerStyle(), "block w-full px-2 py-4 text-center text-sm")}
        onClick={() => onOpenChange?.(false)}
        {...commonProps}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link href={href} legacyBehavior passHref {...commonProps}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <>{label}</>
      </NavigationMenuLink>
    </Link>
  );
};

export async function Navigation({ links }: NavigationLinks) {
  return (
    <>
      <NavigationDesktop links={links} />
      <NavigationMobile links={links} />
    </>
  );
}
