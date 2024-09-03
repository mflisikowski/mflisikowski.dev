"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import * as javascript from "@/public/tech-icons/javascript";
import * as jest from "@/public/tech-icons/jest";
import * as nextjs from "@/public/tech-icons/next";
import * as react from "@/public/tech-icons/react";
import * as tailwindcss from "@/public/tech-icons/tailwindcss";
import * as typescript from "@/public/tech-icons/typescript";
import * as vercel from "@/public/tech-icons/vercel";

import { cn } from "@/utils/cn";

const icons = [
  {
    name: "TypeScript",
    component: typescript.Icon,
  },
  {
    name: "Next.js",
    component: nextjs.Icon,
  },
  {
    name: "React",
    component: react.Icon,
  },
  {
    name: "TailwindCSS",
    component: tailwindcss.Icon,
  },
  {
    name: "JavaScript",
    component: javascript.Icon,
  },
  {
    name: "Jest",
    component: jest.Icon,
  },
  {
    name: "Vercel",
    component: vercel.Icon,
  },
];

interface AnimatedTechStackProps {
  className?: string;
  timer?: number;
}

interface IconElementProps {
  icon: (typeof icons)[0];
  index: number;
  currentIndex: number;
  totalIcons: number;
}

export const AnimatedTechStack: React.FC<AnimatedTechStackProps> = ({
  className,
  timer = 1400,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, timer);
    return () => clearInterval(t);
  }, [timer]);

  return (
    <motion.div
      // @ts-ignore
      className={cn("relative", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        {icons.map((icon, index) => (
          <IconElement
            key={icon.name}
            icon={icon}
            index={index}
            currentIndex={currentIndex}
            totalIcons={icons.length}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

const IconElement: React.FC<IconElementProps> = ({ icon, index, currentIndex, totalIcons }) => {
  const isCurrent = index === currentIndex;
  const angle = ((index - currentIndex) / totalIcons) * 2 * Math.PI;
  const x = Math.cos(angle) * 200;
  const y = Math.sin(angle) * 200;

  return (
    <motion.div
      transition={{ stiffness: 200, duration: 0.4, damping: 20, type: "tween" }}
      animate={{
        zIndex: isCurrent ? 10 : 1,
        x: isCurrent ? 0 : x,
        y: isCurrent ? 0 : y,
      }}
      initial={{ x, y }}
      // @ts-ignore
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform",
        isCurrent ? "opacity-100" : "opacity-5",
        isCurrent ? "h-64 w-64" : "h-12 w-12",
      )}
    >
      <div aria-label={icon.name} aria-hidden={!isCurrent} className="relative">
        <icon.component />
        <p className="absolute -top-6 left-1 flex items-center justify-center text-center font-mono text-sm font-bold text-zinc-900">
          {icon.name}
        </p>
      </div>
    </motion.div>
  );
};
