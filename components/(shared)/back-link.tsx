import { BackIcon } from "@/icons/back-icon";
import Link from "next/link";

interface BackLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string; // Add optional className prop
}

export const BackLink: React.FC<BackLinkProps> = ({
  href,
  children,
  className,
}) => (
  <Link className={className} href={href}>
    <BackIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />{" "}
    {children}
  </Link>
);
