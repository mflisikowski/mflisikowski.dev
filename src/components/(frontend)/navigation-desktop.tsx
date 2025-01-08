import { type NavigationLinks } from "@/components/(frontend)/navigation";
import { NavigationItem } from "@/components/(frontend)/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { cn } from "@/utils/cn";

export function NavigationDesktop({ links }: NavigationLinks) {
  return (
    <NavigationMenu className={cn("hidden lg:flex")} aria-label="Main navigation">
      <NavigationMenuList>
        {links?.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationItem item={item} />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
