import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";

export function Header() {
  return (
    <Container className="sticky top-0 z-50 w-full backdrop-blur-md" as="header">
      <div className="flex min-h-24 items-center justify-between font-inter">
        <Logo />
        <Navigation />
      </div>
    </Container>
  );
}
