import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-24 w-full items-center justify-between px-4 font-inter lg:px-24">
      <Logo href="/" />

      <div className="flex items-center gap-4">
        <LanguageSwitcher className="hidden lg:order-2 lg:flex" />
        <ThemeToggle className="hidden lg:order-2 lg:flex" />
        <Navigation />
      </div>
    </header>
  );
}
