import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  description: "",
  title: "",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <>{children}</>
    </Container>
  );
}
