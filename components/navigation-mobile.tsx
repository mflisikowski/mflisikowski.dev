"use client";

import type { NavigationItem, SocialItem } from "@/types";
import { PanelRightOpen, SendHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

import { Github, Linkedin, X } from "@/components/icons";
import { Logo } from "@/components/logo";
import { MobileLink } from "@/components/mobile-link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  email: SendHorizontal,
  x: X,
};

export function NavigationMobile({
  items,
  socials,
}: {
  items: NavigationItem[];
  socials: SocialItem[];
}) {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations("Navigation");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          variant="ghost"
        >
          <PanelRightOpen className="h-6 w-6 cursor-pointer" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="top">
        <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
          <Logo />
        </MobileLink>

        <ScrollArea className="my-4">
          <div className="grid">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                {items?.map(
                  (item) =>
                    item.href && (
                      <MobileLink key={item.href} href={item.href} onOpenChange={setOpen}>
                        {t(item.title)}
                      </MobileLink>
                    ),
                )}
              </div>

              <div className="h-px w-full bg-gray-200" />

              <div className="space-y-4">
                {socials?.map((social) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap];

                  return (
                    <Link
                      className="flex gap-2"
                      target="_blank"
                      href={social.href!}
                      key={social.href}
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="h-5 w-5" />
                      {social.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
