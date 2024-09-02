"use client";

import { ReactLenis } from "lenis/react";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root className="relative">
      <>{children}</>
    </ReactLenis>
  );
}

export default Template;
