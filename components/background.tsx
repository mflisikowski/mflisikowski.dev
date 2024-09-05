"use client";

import { fetchNavigationData } from "@/repositories/navigation-respository";
import { usePathname } from "next/navigation";

import { getTailwindColor } from "@/utils/colors";

import { GenericMouseMask } from "./framer-motion/generic-mouse-mask";
import { RadialGradient } from "./framer-motion/radial-gradient";

export const Background = () => {
  const pathname = usePathname();
  const navigation = fetchNavigationData();
  const currentItem = navigation.find((item) => item.href === pathname);

  const defaultColor = getTailwindColor({
    color: currentItem?.background.color || "purple",
    shade: currentItem?.background.shade || "300",
    alpha: currentItem?.background.alpha || 0.6,
  });

  return (
    <div className="absolute inset-0 z-10 h-full w-full">
      <div className="absolute h-full w-full backdrop-blur-3xl" />

      <GenericMouseMask color={defaultColor} />
      <RadialGradient color={defaultColor} />
    </div>
  );
};
