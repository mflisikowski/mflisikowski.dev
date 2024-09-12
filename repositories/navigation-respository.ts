import type { NavigationItem, SocialItem } from "@/types";

export function fetchNavigationData(): { items: NavigationItem[] } {
  const items = [
    { title: "about", href: "/about" },
    { title: "uses", href: "/uses" },
    { title: "projects", href: "/projects" },
    { title: "contact", href: "/contact" },
  ];

  return { items };
}

export function fetchSocialData(): { items: SocialItem[] } {
  const items: SocialItem[] = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/mflisikowski/",
      icon: "linkedin",
    },
    {
      title: "GitHub",
      href: "https://github.com/mflisikowski",
      icon: "github",
    },
    {
      title: "Twitter",
      href: "https://x.com/mflisikowskidev",
      icon: "x",
    },
    {
      title: "Email",
      href: "mailto:contact@mflisikowski.dev",
      icon: "email",
    },
  ];

  return { items };
}
