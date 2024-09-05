import type { NavigationItem } from "@/types";

export function fetchNavigationData() {
  return [
    {
      title: "About",
      href: "/about",
      background: {
        color: "amber",
        shade: "300",
        alpha: 0.6,
      },
    },
    {
      title: "Uses",
      href: "/uses",
      background: {
        color: "amber",
        shade: "300",
        alpha: 0.6,
      },
    },
    {
      title: "Projects",
      href: "/projects",
      background: {
        color: "amber",
        shade: "300",
        alpha: 0.6,
      },
    },
    {
      title: "Contact",
      href: "/contact",
      background: {
        color: "amber",
        shade: "300",
        alpha: 0.6,
      },
    },
  ] as NavigationItem[];
}
