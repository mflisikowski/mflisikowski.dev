"use client";

import { motion } from "framer-motion";
import { ForwardRefRenderFunction, PropsWithChildren, forwardRef } from "react";

/**
 * Common properties for container components.
 */
interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

/**
 * An outer container component.
 *
 * @param className - Additional CSS class names.
 * @param children - Content to be rendered inside the container.
 * @param props - Additional props.
 * @param ref - Forwarded ref.
 */
export const OuterContainer: ForwardRefRenderFunction<
  HTMLDivElement,
  ContainerProps
> = ({ className = "", children, ...props }, ref) => (
  <motion.div ref={ref} className={`sm:px-8 ${className}`} {...props}>
    <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
  </motion.div>
);

/**
 * An inner container component.
 */
export const InnerContainer: ForwardRefRenderFunction<
  HTMLDivElement,
  ContainerProps
> = ({ className = "", children, ...props }, ref) => (
  <motion.div
    className={`relative px-4 sm:px-8 lg:px-12 ${className}`}
    {...props}
    ref={ref}
  >
    <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
  </motion.div>
);

/**
 * A composition of the OuterContainer and InnerContainer components.
 */
export const Container = forwardRef<HTMLElement, PropsWithChildren<{}>>(
  ({ children, ...props }, ref) => (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
);

Container.displayName = "Container";
