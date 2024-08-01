import Link from "next/link";

interface Item {
  name: string;
  href: string;
}

interface NavigationProps {
  items: Item[];
  className?: string;
}

export function Navigation({ items, className }: NavigationProps) {
  return (
    <>
      {items.map((item) => (
        <Link key={item.name} href={item.href} className={className || ""}>
          {item.name}
        </Link>
      ))}
    </>
  );
}
