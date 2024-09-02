import { cn } from "@/utils/cn";

type ContainerProps<T extends React.ElementType> = {
  classNameInner?: string;
  className?: string;
  children: React.ReactNode;
  as?: T;
};

const ContainerInner = <T extends React.ElementType = "div">({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> & ContainerProps<T>) => {
  const Component = as ?? "div";

  return (
    <Component className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}>{children}</Component>
  );
};

export function Container<T extends React.ElementType = "div">({
  as,
  classNameInner,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> & ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn("mx-auto max-w-7xl", className)} {...props}>
      <ContainerInner className={cn("mx-auto max-w-2xl lg:max-w-none", classNameInner)}>
        <>{children}</>
      </ContainerInner>
    </Component>
  );
}
