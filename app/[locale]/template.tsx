"use client";

import { ReactLenis } from "lenis/react";

import { AnimatedPageLayout } from "@/components/framer-motion/animated-page-layout";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root className="relative">
      <AnimatedPageLayout>
        <>{children}</>
      </AnimatedPageLayout>
    </ReactLenis>
  );
}

export default Template;
