"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion, useTransform } from "framer-motion";

import { getTailwindColor } from "@/utils/colors";

interface RadialGradientProps {
  color?: string;
}

const defaultColor = getTailwindColor({ color: "purple", shade: "300", alpha: 0.6 });

export const RadialGradient = ({ color = defaultColor }: RadialGradientProps) => {
  const { x, y } = useMousePosition({
    stiffness: 40,
    damping: 40,
  });

  const background = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(800px at ${latestX}px ${latestY}px, ${color}, transparent 80%)`,
  );

  return (
    <motion.div
      // @ts-ignore
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ background }}
    />
  );
};
