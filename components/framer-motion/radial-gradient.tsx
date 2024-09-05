"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion, useTransform } from "framer-motion";

interface RadialGradientProps {
  color: string;
}

export const RadialGradient = ({ color }: RadialGradientProps) => {
  const { x, y } = useMousePosition({
    stiffness: 40,
    damping: 40,
  });

  const background = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(1600px at ${latestX}px ${latestY}px, ${color}, transparent 80%)`,
  );

  return (
    <motion.div
      // @ts-ignore
      className="pointer-events-none absolute inset-0 -z-20 h-full w-full"
      style={{ background }}
    />
  );
};
