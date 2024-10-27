"use client";

import { CursorGradient } from "@/components/framer-motion/cursor-gradient";
import { CursorHighlight } from "@/components/framer-motion/cursor-highlight";

import { useBackgroundColor } from "@/hooks/use-background-color";
import { useMediaQuery } from "@/hooks/use-media-query";

export const Background = () => {
  const { color } = useBackgroundColor();
  const isMouseDevice = useMediaQuery("(pointer: fine)");

  return (
    <div className="absolute inset-0 z-10 h-full w-full">
      <div className="absolute h-full w-full backdrop-blur-3xl" />
      {isMouseDevice && (
        <>
          <CursorHighlight color={color} />
          <CursorGradient color={color} />
        </>
      )}
    </div>
  );
};
