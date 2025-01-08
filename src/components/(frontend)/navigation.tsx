import { type Navigation } from "@/payload-types";

import { NavigationDesktop } from "@/components/(frontend)/navigation-desktop";

import { getCachedNavigation } from "@/utils/payload/get-globals";

export async function Navigation() {
  const data: Navigation = await getCachedNavigation();
  const links = data?.links ?? [];

  return (
    <>
      <NavigationDesktop links={links} />
      {/* <NavigationMobile items={mappedItems} socials={socials} /> */}
    </>
  );
}
