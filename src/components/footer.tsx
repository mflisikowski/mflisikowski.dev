import { CopyrightIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 flex w-full flex-col items-center justify-between px-4 h-footer lg:flex-row">
      <p className="text-center font-mono text-sm tracking-tight lg:text-left">
        With a passion for creating innovative solutions.
      </p>

      <p className="flex items-center gap-2 font-mono text-sm tracking-wide">
        <CopyrightIcon className="inline h-4 w-4" />
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
