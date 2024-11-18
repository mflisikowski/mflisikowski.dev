"use client";

import { ReactLenis } from "lenis/react";

import { AnimatedPageLayout } from "@/components/framer-motion/animated-page-layout";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      options={{
        smoothWheel: true,
        duration: 1.5,
        lerp: 0.1,
      }}
      root
    >
      <AnimatedPageLayout>
        <>{children}</>
      </AnimatedPageLayout>
    </ReactLenis>
  );
}
export default Template;
