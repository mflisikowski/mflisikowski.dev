import { type ColorOptions } from "@/utils/colors";

export type NavigationItem = {
  background: ColorOptions;
  subItems?: NavigationItem[];
  title: string;
  href?: string;
};
