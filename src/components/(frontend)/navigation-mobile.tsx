"use client";

import type { NavigationItem, SocialItem } from "@/types";
import { PanelBottomOpen, PanelTopOpen } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

import { iconMap } from "@/components/(frontend)/icons";
import { LanguageSwitcher } from "@/components/(frontend)/language-switcher";
import { Logo } from "@/components/(frontend)/logo";
import { MobileLink } from "@/components/(frontend)/mobile-link";
import { ThemeToggleSelect } from "@/components/(frontend)/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
// prettier-ignore
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Header = ({ onOpenChange }: { onOpenChange: (value: boolean) => void }) => (
  <SheetTitle className="mb-auto flex flex-wrap items-center justify-between gap-4 px-6 py-6">
    <Logo onOpenChange={onOpenChange} href="/" as={MobileLink} />
    <div className="order-last grid w-full grid-cols-2 gap-4">
      <LanguageSwitcher className="h-12 w-full rounded-none" />
      <ThemeToggleSelect className="h-12 w-full rounded-none" />
    </div>
    <SheetClose>
      <PanelBottomOpen className="h-6 w-6 cursor-pointer lg:hidden" />
    </SheetClose>
  </SheetTitle>
);

const NavigationLinks = ({ items, t }: { items: NavigationItem[]; t: (key: string) => string }) =>
  items?.map(({ href, title }) => (
    <div className="flex min-h-16 w-full items-center justify-center" key={href}>
      <MobileLink onOpenChange={() => {}} className="flex-grow px-10" href={href!}>
        {t(title)}
      </MobileLink>
    </div>
  ));

const SocialLinks = ({ socials }: { socials: SocialItem[] }) =>
  socials?.map((social) => {
    const IconComponent = iconMap[social.icon as keyof typeof iconMap];

    return (
      <Link
        key={social.href}
        target="_blank"
        href={social.href!}
        rel="noopener noreferrer"
        className="flex min-h-16 flex-grow items-center justify-center"
      >
        <IconComponent className="h-5 w-5 flex-grow" />
      </Link>
    );
  });

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
        <Header onOpenChange={setOpen} />

        <ScrollArea className="mt-auto">
          <div className="grid bg-white text-zinc-950">
            <div className="grid grid-cols-2 divide-x-[1px] divide-y-[1px] border-b-[1px]">
              <div className="hidden" />
              <NavigationLinks items={items} t={t} />
            </div>
            <div className="flex divide-x-[1px] border-b-[1px]">
              <SocialLinks socials={socials} />
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
