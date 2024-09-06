import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";

import { cn } from "@/utils/cn";

export function Header() {
  const isSticky = false;

  return (
    <Container
      className={cn("relative z-20 w-full", isSticky && "sticky top-0 z-50 backdrop-blur-md")}
      as="header"
    >
      <div className="flex min-h-24 items-center justify-between font-inter">
        <Logo />
        <Navigation />
      </div>
    </Container>
  );
}
