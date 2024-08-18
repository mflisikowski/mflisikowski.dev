"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { fetchNavigationData } from "@/repositories/navigation-respository";
import { PanelRightOpen } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
// prettier-ignore
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { cn } from "@/utils/cn";

export function Navigation() {
  const navigationItems = fetchNavigationData();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = React.useState(false);

  return isDesktop ? (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.href ? (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="space-y-4">
                    {item.subItems?.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            className="underline-offset-4 hover:underline"
                            href={subItem.href as string}
                          >
                            {subItem.title}
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
  ) : (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger onClick={() => setOpen(true)} className="lg:hidden">
        <PanelRightOpen className="h-6 w-6 cursor-pointer" />
      </DrawerTrigger>

      <DrawerContent className="items-end lg:hidden">
        <div className="flex min-h-screen w-full flex-col items-end gap-3 overflow-scroll py-10 text-right">
          {navigationItems.map((item) => {
            const linkClassNames = cn(navigationMenuTriggerStyle(), "h-10 text-base");
            return (
              <Fragment key={item.title}>
                {item.href ? (
                  <Link href={item.href} className={linkClassNames} onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>
                ) : (
                  item.subItems?.map((subItem) => (
                    <Link
                      className={cn(linkClassNames, "")}
                      onClick={() => setOpen(false)}
                      href={subItem.href as string}
                      key={subItem.title}
                    >
                      {subItem.title}
                    </Link>
                  ))
                )}
              </Fragment>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
