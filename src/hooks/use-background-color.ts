import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { type ColorOptions, getTailwindColor } from "@/utils/colors";

const defaultBackground: ColorOptions = {
  color: "purple",
  shade: "300",
  alpha: 0.6,
};

const config: Record<string, ColorOptions> = {
  "/projects": { color: "amber", shade: "300", alpha: 0.6 },
  "/contact": { color: "amber", shade: "300", alpha: 0.5 },
  "/about": { color: "amber", shade: "300", alpha: 0.6 },
  "/uses": { color: "amber", shade: "300", alpha: 0.5 },
};

const getBackgroundConfig = (fullPath: string): ColorOptions => {
  const withoutLangRegex = /^\/[a-z]{2}(-[A-Z]{2})?/;
  const path = fullPath.replace(withoutLangRegex, "");

  if (path in config) {
    return config[path];
  }

  const partialMatch = Object.entries(config).find(([key]) => path.startsWith(key) && key !== "/");

  if (partialMatch) {
    return partialMatch[1];
  }

  return defaultBackground;
};

export const useBackgroundColor = () => {
  const pathname = usePathname();

  return useMemo(() => {
    const config = getBackgroundConfig(pathname);
    const color = getTailwindColor(config);
    return { color, config };
  }, [pathname]);
};
