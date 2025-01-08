import { type Navigation } from "@/payload-types";
import Link from "next/link";

import { NavigationDesktop } from "@/components/(frontend)/navigation-desktop";
import { NavigationMobile } from "@/components/(frontend)/navigation-mobile";
import { NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export type NavigationLinks = Pick<Navigation, "links">;
export type NavigationLink = NonNullable<Navigation["links"]>[number];

export interface NavigationItem {
  item: NavigationLink;
}

export const NavigationItem = ({ item }: NavigationItem) => {
  if (!item.link?.url && !item.link?.reference) return null;

  const commonProps = item.link.newTab
    ? {
        rel: "noopener noreferrer",
        target: "_blank",
      }
    : {};

  if (item.link.url) {
    const label = item.link.label;
    const href = item.link.url;

    return (
      <Link
        aria-label={`${label} (opens in new tab)`}
        href={href}
        legacyBehavior
        passHref
        {...commonProps}
      >
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <>{label}</>
        </NavigationMenuLink>
      </Link>
    );
  }

  if (item.link.reference) {
    const title = item.link.reference.value.pageTitle;
    const href = item.link.reference.value.slug;

    return (
      <NavigationMenuLink
        aria-label={`${title} (opens in new tab)`}
        className={navigationMenuTriggerStyle()}
        href={href}
        {...commonProps}
      >
        <>{title}</>
      </NavigationMenuLink>
    );
  }

  return null;
};

export async function Navigation({ links }: NavigationLinks) {
  return (
    <>
      <NavigationDesktop links={links} />
      <NavigationMobile links={links} />
    </>
  );
}
