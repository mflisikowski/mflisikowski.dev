import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "",
  title: "",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
