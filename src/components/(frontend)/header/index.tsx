import type { Navigation as NavigationType } from "@/payload-types";

import { LanguageSwitcher } from "@/components/(frontend)/language-switcher";
import { Logo } from "@/components/(frontend)/logo";
import { Navigation } from "@/components/(frontend)/navigation";
import { ThemeToggleIcon } from "@/components/(frontend)/theme-toggle";

import { getCachedNavigation } from "@/utils/payload/get-globals";

export async function Header() {
  const { links }: NavigationType = await getCachedNavigation();

  return (
    <header className="fixed top-0 z-50 flex h-24 w-full items-center justify-between px-4 font-inter lg:px-24">
      <Logo href="/" />
      <div className="flex items-center gap-4">
        <LanguageSwitcher className="hidden lg:order-2 lg:flex" />
        <ThemeToggleIcon className="hidden lg:order-2 lg:flex" />
        <Navigation links={links} />
      </div>
    </header>
  );
}
