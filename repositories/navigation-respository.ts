import type { NavigationItem } from "@/types";

export function fetchNavigationData(): NavigationItem[] {
  return [
    { title: "about", href: "/about" },
    { title: "uses", href: "/uses" },
    { title: "projects", href: "/projects" },
    { title: "contact", href: "/contact" },
  ];
}
