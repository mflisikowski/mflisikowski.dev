import { type MotionValue } from "framer-motion";
import { type RefObject, useEffect, useState } from "react";

interface UseMouseProximityProps {
  ref: RefObject<HTMLElement | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  offset?: number;
}

export const useMouseProximity = ({ ref, x, y, offset = 0 }: UseMouseProximityProps): boolean => {
  const [isProximate, setIsProximate] = useState(false);

  useEffect(() => {
    const checkProximity = () => {
      if (ref.current) {
        const elementRect = ref.current.getBoundingClientRect();
        const mouseX = x.get();
        const mouseY = y.get();

        const near =
          mouseX >= elementRect.left - offset &&
          mouseX <= elementRect.right + offset &&
          mouseY >= elementRect.top - offset &&
          mouseY <= elementRect.bottom + offset;

        setIsProximate(near);
      }
    };

    const unsubscribeX = x.on("change", checkProximity);
    const unsubscribeY = y.on("change", checkProximity);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [ref, x, y, offset]);

  return isProximate;
};
