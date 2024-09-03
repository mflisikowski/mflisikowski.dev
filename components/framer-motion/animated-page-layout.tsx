"use client";

import { type Variants, motion } from "framer-motion";

import { cn } from "@/utils/cn";

interface AnimationConfig {
  initialOpacity?: number;
  initialY?: number;
  duration?: number;
  finalY?: number;
  delay?: number;
}

interface AnimatedPageLayoutProps {
  animationConfig?: AnimationConfig;
  children: React.ReactNode;
  className?: string;
}

export const AnimatedPageLayout: React.FC<AnimatedPageLayoutProps> = ({
  animationConfig = {},
  children,
  className,
}) => {
  const { initialOpacity = 0, initialY = 120, finalY = 0 } = animationConfig;

  const variants: Variants = {
    initial: {
      opacity: initialOpacity,
      y: initialY,
    },
    visible: {
      opacity: 1,
      y: finalY,
    },
  };

  return (
    <div className={cn("mx-auto", className)}>
      <motion.main variants={variants} initial="initial" animate="visible">
        {children}
      </motion.main>
    </div>
  );
};
