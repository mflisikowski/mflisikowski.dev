import type { Navigation } from "@/payload-types";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/utils/cn";

type NavigationLink = NonNullable<Navigation["links"]>[number];

interface NavigationItemProps {
  item: NavigationLink;
}

const NavigationItem = ({ item }: NavigationItemProps) => {
  if (!item.link?.url && !item.link?.reference) return null;

  const commonProps = item.link.newTab
    ? {
        "aria-label": `${item.link.label} (opens in new tab)`,
        rel: "noopener noreferrer",
        target: "_blank",
      }
    : {};

  if (item.link.url) {
    const label = item.link.label;
    const href = item.link.url;

    return (
      <Link href={href} legacyBehavior passHref {...commonProps}>
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
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href={href} {...commonProps}>
        <>{title}</>
      </NavigationMenuLink>
    );
  }
};

export function NavigationDesktop({ links }: Pick<Navigation, "links">) {
  if (!links?.length) return null;

  return (
    <NavigationMenu className={cn("hidden lg:flex")} aria-label="Main navigation">
      <NavigationMenuList>
        {links.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationItem item={item} />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
