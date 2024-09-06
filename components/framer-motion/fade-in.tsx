"use client";

import { type Variants, motion, useReducedMotion } from "framer-motion";
import { type ReactNode, createContext, useContext } from "react";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const FadeIn: React.FC<React.ComponentPropsWithoutRef<typeof motion.div>> = (props) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : fadeInVariants}
      transition={{ duration: 0.5 }}
      initial="hidden"
      {...(isInStaggerGroup
        ? {
            animate: "visible",
          }
        : {
            whileInView: "visible",
          })}
      viewport={viewport}
      {...props}
    />
  );
};

interface FadeInStaggerProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  faster?: boolean;
  children: ReactNode;
}

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({
  faster = false,
  children,
  ...props
}) => (
  <FadeInStaggerContext.Provider value={true}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        staggerChildren: faster ? 0.12 : 0.2,
      }}
      {...props}
    >
      {children}
    </motion.div>
  </FadeInStaggerContext.Provider>
);
