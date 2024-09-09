"use client";

import { GenericMouseMask } from "@/components/framer-motion/generic-mouse-mask";
import { RadialGradient } from "@/components/framer-motion/radial-gradient";

import { useBackgroundColor } from "@/hooks/use-background-color";

export const Background = () => {
  const { color } = useBackgroundColor();

  return (
    <div className="absolute inset-0 z-10 h-full w-full">
      <div className="absolute h-full w-full backdrop-blur-3xl" />
      <GenericMouseMask color={color} />
      <RadialGradient color={color} />
    </div>
  );
};
