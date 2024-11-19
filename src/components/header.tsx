import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

import { cn } from "@/utils/cn";

export function Header() {
  const isSticky = false;

  return (
    <header
      className={cn(
        "relative z-20 flex w-full items-center justify-between px-4 font-inter h-header lg:px-24",
        isSticky && "sticky top-0 z-50 backdrop-blur-md",
      )}
    >
      <Logo href="/" />

      <div className="flex items-center gap-4">
        <LanguageSwitcher className="hidden lg:order-2 lg:flex" />
        <ThemeToggle className="hidden lg:order-2 lg:flex" />
        <Navigation />
      </div>
    </header>
  );
}
