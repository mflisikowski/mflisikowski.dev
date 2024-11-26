"use client";

import { type Variants, motion } from "framer-motion";
import React, { forwardRef } from "react";

import { cn } from "@/utils/cn";

interface AnimationConfig {
  initialY?: number;
  finalY?: number;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
  startDelay?: number;
}

interface AnimatedTextLettersProps {
  text: string;
  className?: string;
  infinite?: boolean;
  animated?: boolean;
  animationConfig?: AnimationConfig;
}

export const AnimatedTextLetters = forwardRef<HTMLDivElement, AnimatedTextLettersProps>(
  ({ animationConfig = {}, className, infinite = false, animated = true, text }, ref) => {
    const {
      initialY = 0,
      finalY = 0,
      duration = 0.01,
      delay = 0.01,
      repeatDelay = 5,
      startDelay = 0,
    } = animationConfig;

    const letterVariants: Variants = {
      hidden: {
        opacity: 0,
        y: initialY,
      },
      visible: (i: number) => ({
        opacity: 1,
        y: finalY,
        transition: {
          delay: startDelay + i * delay,
          duration: duration,
          repeat: infinite ? Infinity : 0,
          repeatType: infinite ? "reverse" : undefined,
          repeatDelay: infinite ? repeatDelay : undefined,
        },
      }),
    };

    const lines = text.split("\n");

    return (
      <div ref={ref} className={cn("text-balance", className)}>
        {lines.map((line, lineIndex) => (
          <p key={lineIndex} className={cn("text-base", className)}>
            {line.split("").map((char, charIndex) =>
              animated ? (
                <motion.span
                  key={`${char}-${lineIndex}-${charIndex}`}
                  custom={charIndex + lineIndex * line.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ) : (
                <span key={`${char}-${lineIndex}-${charIndex}`}>{char}</span>
              ),
            )}
          </p>
        ))}
      </div>
    );
  },
);

AnimatedTextLetters.displayName = "AnimatedTextLetters";
