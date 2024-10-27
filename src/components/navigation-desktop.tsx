"use client";

import type { NavigationItem } from "@/types";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationDesktop({ items }: { items: NavigationItem[] }) {
  const t = useTranslations("Navigation");

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.href ? (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t(item.title)}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>
                  <>{item.title}</>
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="space-y-4">
                    {item.subItems?.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            className="underline-offset-4 hover:underline"
                            href={subItem.href as string}
                          >
                            {t(subItem.title)}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
