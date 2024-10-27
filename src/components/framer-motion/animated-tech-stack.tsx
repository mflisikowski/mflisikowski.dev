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
  { name: "TypeScript", component: typescript.Icon },
  { name: "Next.js", component: nextjs.Icon },
  { name: "React", component: react.Icon },
  { name: "TailwindCSS", component: tailwindcss.Icon },
  { name: "JavaScript", component: javascript.Icon },
  { name: "Jest", component: jest.Icon },
  { name: "Vercel", component: vercel.Icon },
];

export const AnimatedTechStack = ({ className }: { className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const IconComponent = icons[currentIndex].component;

  return (
    <div className={cn("flex h-32 w-32 flex-col items-center justify-center", className)}>
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            transition={{ duration: 0.25, ease: "backInOut" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={currentIndex}
            // @ts-ignore
            className="absolute inset-0 flex items-center justify-center"
          >
            <IconComponent className="h-full w-full" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
