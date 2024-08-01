export const dynamic = "force-dynamic";

/**
 * A layout component for a landing page.
 *
 * @param children - The content to be rendered inside the layout component.
 * @returns The layout component with the provided content.
 */

import { Container } from "@/components/(landing)/container";
import { Footer } from "@/components/(landing)/footer";
import { GridPattern } from "@/components/(landing)/grid-pattern";
import { Header } from "@/components/(landing)/header";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <GridPattern
        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        yOffset={-96}
        interactive
      />

      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default LandingLayout;
