"use client";

import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

import { NotionAvatar } from "@/components/notion-avatar";

import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  as?: React.ElementType;
  href?: string;
  onOpenChange?: (open: boolean) => void;
  props?: React.ComponentPropsWithoutRef<React.ElementType>;
};

export function Logo({ className, as = Link, ...props }: LogoProps) {
  const Component = as;

  return (
    <Component
      aria-label="Mateusz Flisikowski, I am a mission focused developer with a passion for creating innovative solutions."
      className={cn("group relative min-w-40 overflow-hidden", className)}
      {...props}
    >
      <div className="flex aspect-[160/32] items-center gap-2">
        <NotionAvatar />

        <TypeAnimation
          aria-label="Mission Focused Developer"
          role="marquee"
          className="font-cal text-2xl uppercase"
          sequence={["MFD", 10000, "Mission", 550, "Focused", 550, "Developer", 550, "MFD", 10000]}
          deletionSpeed={70}
          cursor={false}
          speed={40}
          preRenderFirstString
          repeat={Infinity}
        />
      </div>
    </Component>
  );
}
