"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/utils/cn";

export default function ElevateYourBrandToday() {
  return (
    <Link
      className={cn(buttonVariants({ variant: "amber", size: "lg" }))}
      onClick={() => {
        posthog.capture("elevate-your-brand-today-button-click");
      }}
      href="/digital-needs-assessment"
    >
      <span className="text-lg font-semibold">Elevate Your Brand Today</span>
      <ArrowRightIcon className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-2" />
    </Link>
  );
}
