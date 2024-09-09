"use client";

import { BinaryIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export function Logo() {
  return (
    <div
      aria-label="Mateusz Flisikowski, I am a mission focused developer with a passion for creating innovative solutions."
      className="group relative min-w-40 overflow-hidden"
    >
      <div className="flex items-center gap-0">
        <div className="flex h-6 w-6 items-center">
          <BinaryIcon className="block h-6 w-6 translate-y-[1px] group-hover:hidden" />
          <BinaryIcon className="hidden h-6 w-6 -translate-x-[1px] translate-y-[1px] rotate-180 group-hover:block" />
        </div>

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

      <Link href="/" className="absolute inset-0"></Link>
    </div>
  );
}
