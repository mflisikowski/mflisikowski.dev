import { AnimatedTechStack } from "@/components/framer-motion/animated-tech-stack";
import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";
import { GenericMouseMask } from "@/components/framer-motion/generic-mouse-mask";

import { cn } from "@/utils/cn";

interface HeroProps {
  title?: string;
  subtitle?: string;
  color?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Crafting Digital\nExperiences",
  subtitle = "with Precision\n& Passion",
  color,
}) => {
  const commonTextClasses = cn(
    "selection:bg-zinc-700 selection:decoration-clone selection:text-white",
    "text-nowrap font-cal tracking-wide",
  );

  return (
    <div className="mx-auto max-w-7xl text-zinc-700">
      <GenericMouseMask color={color} offset={10}>
        <div className="group items-center xl:grid xl:grid-cols-2">
          <div className="relative z-20">
            <AnimatedTextLetters
              className={cn(
                commonTextClasses,
                "text-3xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
                "selection:bg-purple-500 selection:text-white",
              )}
              text={title}
            />

            <AnimatedTextLetters
              animationConfig={{ startDelay: 0.4 }}
              className={cn(commonTextClasses, "text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl")}
              text={subtitle}
            />
          </div>

          <AnimatedTechStack
            className={cn(
              "relative z-10 flex aspect-square h-full flex-grow items-end justify-center rounded-e-full rounded-s-full",
              "bg-white/10 backdrop-blur-lg",
            )}
          />
        </div>
      </GenericMouseMask>
    </div>
  );
};
