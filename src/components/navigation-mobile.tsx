"use client";

import type { NavigationItem, SocialItem } from "@/types";
import { PanelBottomOpen, PanelTopOpen } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { iconMap } from "@/components/icons";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { MobileLink } from "@/components/mobile-link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/utils/cn";

export function NavigationMobile({
  items,
  socials,
}: {
  items: NavigationItem[];
  socials: SocialItem[];
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navigation");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <PanelTopOpen className="h-6 w-6 cursor-pointer lg:hidden" />
      </SheetTrigger>

      <SheetContent side="top" className="p-0 pt-2">
        <SheetTitle className="flex flex-wrap items-center justify-between gap-4 px-6 py-6">
          <Logo onOpenChange={setOpen} href="/" as={MobileLink} />

          <LanguageSwitcher className="order-last h-12 w-full" />

          <SheetClose>
            <PanelBottomOpen className="h-6 w-6 cursor-pointer lg:hidden" />
          </SheetClose>
        </SheetTitle>

        <ScrollArea>
          <div className="grid">
            <div className="grid grid-cols-2 gap-[1px] border-b border-t border-gray-200 bg-gray-200">
              {items?.map(({ href, title }) => {
                return (
                  <div
                    className={cn(
                      "flex min-h-16 items-center justify-center bg-white dark:text-zinc-950",
                    )}
                    key={href}
                  >
                    <MobileLink onOpenChange={setOpen} className="flex-grow px-10" href={href!}>
                      {t(title)}
                    </MobileLink>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-[1px] border-b bg-gray-200">
              {socials?.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];

                return (
                  <Link
                    className="flex min-h-16 w-full items-center justify-center gap-2 bg-white px-6 dark:text-zinc-950"
                    target="_blank"
                    href={social.href!}
                    key={social.href}
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-5 w-5 flex-grow" />
                    <span className="flex-grow">
                      <>{social.title}</>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
