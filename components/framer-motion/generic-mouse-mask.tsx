import { motion, useSpring } from "framer-motion";
import React, { type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { getTailwindColor } from "@/utils/colors";

interface GenericMouseMaskProps {
  children: ReactNode;
  color?: string;
  offset?: number;
  size?: number;
}

const defaultColor = getTailwindColor({
  color: "purple",
  shade: "300",
  alpha: 1,
});

export const GenericMouseMask: React.FC<GenericMouseMaskProps> = ({
  color = defaultColor,
  size = 16,
  offset = 0,
  children,
}) => {
  const [isColliding, setIsColliding] = useState(false);
  const $ref = useRef<HTMLDivElement>(null);

  const springConfig = useMemo(() => ({ damping: 25, stiffness: 120 }), []);
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const offsetX = size / 2;
      const offsetY = size / 2;

      x.set(e.clientX - offsetX);
      y.set(e.clientY - offsetY);

      if ($ref.current) {
        const contentRect = $ref.current.getBoundingClientRect();
        const isInside =
          e.clientX >= contentRect.left - offset &&
          e.clientX <= contentRect.right + offset &&
          e.clientY >= contentRect.top - offset &&
          e.clientY <= contentRect.bottom + offset;

        setIsColliding(isInside);
      }
    },
    [offset, x, y, size],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div>
      <span ref={$ref}>
        <>{children}</>
      </span>

      <motion.div
        aria-hidden="true"
        // @ts-ignore
        className="pointer-events-none absolute left-4 top-4 rounded-full"
        style={
          {
            backgroundColor: color,
            height: size,
            width: size,
            left: x,
            top: y,
          } as const
        }
        animate={{
          scale: isColliding ? 10 : 1,
        }}
        transition={{
          stiffness: 300,
          duration: 0.5,
          damping: 30,
          type: "spring",
        }}
      />
    </div>
  );
};
