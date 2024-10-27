"use client";

import { motion } from "framer-motion";

import { useMousePosition } from "@/hooks/use-mouse-position";

interface CursorHighlightProps {
  color: string;
  size?: number;
}

export const CursorHighlight: React.FC<CursorHighlightProps> = ({ color, size = 120 }) => {
  const { x, y } = useMousePosition({
    stiffness: 120,
    damping: 25,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -left-4 -top-4 -z-10 rounded-full"
      style={{
        backgroundColor: color,
        height: size,
        width: size,
        left: x,
        top: y,
      }}
      transition={{
        stiffness: 300,
        duration: 0.5,
        damping: 30,
        type: "spring",
      }}
    />
  );
};
