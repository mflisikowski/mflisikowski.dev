import { Container } from "@/components/container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

import { cn } from "@/utils/cn";

export function Header() {
  const isSticky = false;

  return (
    <Container
      className={cn("relative z-20 w-full", isSticky && "sticky top-0 z-50 backdrop-blur-md")}
      as="header"
    >
      <div className="flex min-h-24 items-center justify-between font-inter">
        <Logo href="/" />

        <div className="flex items-center gap-4">
          <LanguageSwitcher className="hidden lg:order-2 lg:flex" />
          <ThemeToggle className="hidden lg:order-2 lg:flex" />
          <Navigation />
        </div>
      </div>
    </Container>
  );
}
