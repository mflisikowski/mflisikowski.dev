import tailwindConfig from "tailwind.config";
import { type Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";
import { type DefaultColors } from "tailwindcss/types/generated/colors";

import { rgba } from "@/utils/rgba";

const fullConfig = resolveConfig(tailwindConfig as Config);

if (!fullConfig.theme.colors) {
  throw new Error("Theme colors are not defined in the Tailwind config");
}

const colors = fullConfig.theme.colors as TailwindColors;

type TailwindColors = Partial<DefaultColors>;

const isNestedColor = (value: unknown): value is Record<string | number, string> => {
  return typeof value === "object" && value !== null;
};

type ColorShade =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";
type ColorName = keyof DefaultColors;

interface ColorOptions {
  color?: ColorName;
  shade?: ColorShade;
  alpha?: number;
}

export const getTailwindColor = ({
  color = "yellow",
  shade = "50",
  alpha = 0.5,
}: ColorOptions): string => {
  if (!(color in colors)) {
    throw new Error(`Color "${color}" is not defined in the Tailwind config`);
  }

  const colorValue = colors[color];

  if (isNestedColor(colorValue)) {
    if (!(shade in colorValue)) {
      throw new Error(
        `Shade "${shade}" is not defined for color "${color}" in the Tailwind config`,
      );
    }
    return rgba(colorValue[shade], { alpha });
  }

  if (typeof colorValue === "string") {
    return rgba(colorValue, { alpha });
  }

  throw new Error(`Unexpected color value for "${color}"`);
};
