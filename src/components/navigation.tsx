import { fetchNavigationData, fetchSocialData } from "@/repositories/navigation-respository";

import { NavigationDesktop } from "@/components/navigation-desktop";
import { NavigationMobile } from "@/components/navigation-mobile";

export function Navigation() {
  const { items: socials } = fetchSocialData();
  const { items } = fetchNavigationData();

  return (
    <>
      <NavigationDesktop items={items} />
      <NavigationMobile items={items} socials={socials} />
    </>
  );
}
