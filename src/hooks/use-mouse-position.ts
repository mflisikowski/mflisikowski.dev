import { type MotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

interface UseMousePositionProps {
  stiffness?: number;
  damping?: number;
}

export const useMousePosition = ({
  stiffness = 120,
  damping = 25,
}: UseMousePositionProps): MousePosition => {
  const x = useSpring(0, { stiffness, damping });
  const y = useSpring(0, { stiffness, damping });

  const updateMousePosition = useRef((e: MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => updateMousePosition.current(e);
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return { x, y };
};
