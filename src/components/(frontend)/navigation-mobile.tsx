"use client";

import { PanelBottomOpen, PanelTopOpen } from "lucide-react";
import React, { useState } from "react";

// import { iconMap } from "@/components/(frontend)/icons";
import { LanguageSwitcher } from "@/components/(frontend)/language-switcher";
import { Logo } from "@/components/(frontend)/logo";
import { MobileLink } from "@/components/(frontend)/mobile-link";
import { NavigationItem } from "@/components/(frontend)/navigation";
import type { NavigationLinks } from "@/components/(frontend)/navigation";
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

/** TODO: Add new Globals collection for Socials */
// const SocialLinks = ({ socials }: { socials: SocialItem[] }) =>
//   socials?.map((social) => {
//     const IconComponent = iconMap[social.icon as keyof typeof iconMap];

//     return (
//       <Link
//         key={social.href}
//         target="_blank"
//         href={social.href!}
//         rel="noopener noreferrer"
//         className="flex min-h-16 flex-grow items-center justify-center"
//       >
//         <IconComponent className="h-5 w-5 flex-grow" />
//       </Link>
//     );
//   });

export function NavigationMobile({ links }: NavigationLinks) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="lg:hidden">
        <PanelTopOpen className="h-6 w-6 cursor-pointer" />
      </SheetTrigger>

      <SheetContent side="top" className="p-0 pt-2">
        <Header onOpenChange={setOpen} />

        <ScrollArea className="mt-auto">
          <div className="grid bg-white text-zinc-950">
            {links && (
              <div className="grid grid-cols-2 divide-x-[1px] divide-y-[1px] border-b-[1px]">
                {links?.map((item) => (
                  <NavigationItem
                    key={item.id}
                    item={item}
                    variant="mobile"
                    onOpenChange={setOpen}
                  />
                ))}
                {/* Add a hidden div to make the grid even */}
                {links.length % 2 !== 0 && <div />}
              </div>
            )}

            {/* TODO: Add new Globals collection for Socials */}
            {/* <div className="flex divide-x-[1px] border-b-[1px]">
              <SocialLinks socials={socials} />
            </div> */}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
