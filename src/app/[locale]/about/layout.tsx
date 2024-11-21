import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "",
  title: "",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
