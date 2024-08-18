import type { NavigationItem } from "@/types";

export function fetchNavigationData() {
  return [
    {
      title: "Uses",
      href: "/uses",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] as NavigationItem[];
}
