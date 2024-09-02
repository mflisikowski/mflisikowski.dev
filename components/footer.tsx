import { CopyrightIcon } from "lucide-react";

import { Container } from "@/components/container";

export function Footer() {
  return (
    <Container as="footer" className="w-full">
      <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row">
        <p className="text-center font-mono text-sm tracking-tight lg:text-left">
          With a passion for creating innovative solutions.
        </p>
        <p className="flex items-center gap-2 font-mono text-sm tracking-wide">
          <CopyrightIcon className="inline h-4 w-4" />
          {new Date().getFullYear()}
        </p>
      </div>
    </Container>
  );
}
