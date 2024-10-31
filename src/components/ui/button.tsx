import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        cookieDecline: `
          bg-white text-black
          hover:bg-gray-50
          shadow-[0_1px_0_1px_rgba(0,0,0,0.1)]
          hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1)]
          rounded-lg
        `,
        cookieAccept: `
          bg-black text-white
          hover:bg-gray-800
          shadow-[0_1px_0_1px_rgba(255,255,255,0.1)]
          hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]
          rounded-lg
        `,
        cookieManage: `
          bg-white text-black
          hover:bg-gray-50
          rounded-lg
        `,
        amber: `
          bg-amber-300 text-black
          hover:bg-amber-400
          rounded-lg
          shadow-[0_4px_0_1px_rgba(0,0,0,0.8)]
          hover:shadow-[0_0_0_4px_rgba(0,0,0,0.8)]
          active:shadow-none
          active:translate-y-1
          transition-all duration-200 ease-in-out
          hover:translate-y-1
          dark:bg-amber-300 dark:text-black dark:hover:bg-amber-400
        `,
        default: `
          bg-white text-black
          hover:bg-gray-50
          rounded-lg
          shadow-[0_4px_0_1px_rgba(0,0,0,0.8)]
          hover:shadow-[0_0_0_4px_rgba(0,0,0,0.8)]
          active:shadow-none
          active:translate-y-1
          transition-all duration-200 ease-in-out
          hover:translate-y-1
        `,
        icon: `
          bg-transparent text-black
          shadow-none
          hover:shadow-none
          active:shadow-none
          active:translate-y-0
        `,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
