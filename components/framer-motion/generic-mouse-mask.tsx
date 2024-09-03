"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { useMouseProximity } from "@/hooks/use-mouse-proximity";
import { motion } from "framer-motion";
import React, { type ReactNode, useRef } from "react";

import { getTailwindColor } from "@/utils/colors";

interface GenericMouseMaskProps {
  children: ReactNode;
  color?: string;
  offset?: number;
  size?: number;
}

const defaultColor = getTailwindColor({
  color: "purple",
  shade: "300",
  alpha: 1,
});

export const GenericMouseMask: React.FC<GenericMouseMaskProps> = ({
  color = defaultColor,
  offset = 0,
  size = 16,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition({
    stiffness: 120,
    damping: 25,
  });
  const isProximate = useMouseProximity({
    offset,
    ref,
    x,
    y,
  });

  return (
    <main className="flex flex-grow flex-col">
      <div ref={ref} className="relative z-10">
        {children}
      </div>

      <motion.div
        aria-hidden="true"
        // @ts-ignore
        className="pointer-events-none absolute left-4 top-4 z-0 rounded-full"
        style={{
          backgroundColor: color,
          height: size,
          width: size,
          left: x,
          top: y,
        }}
        animate={{
          scale: isProximate ? 10 : 1,
        }}
        transition={{
          stiffness: 300,
          duration: 0.5,
          damping: 30,
          type: "spring",
        }}
      />
    </main>
  );
};
