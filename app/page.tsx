import { Container } from "@/components/container";
import { AnimatedTechStack } from "@/components/framer-motion/animated-tech-stack";
import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";

import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <div className="group grid grid-cols-2 items-center">
        <div className={cn("relative z-20 col-span-full space-y-4 lg:col-auto lg:space-y-8")}>
          <AnimatedTextLetters
            className={cn(
              "selection:bg-purple-500 selection:tracking-widest selection:text-white",
              "text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-9xl",
              "font-cal tracking-wide lg:text-nowrap",
            )}
            text={"Crafting Digital\nExperiences"}
          />

          <AnimatedTextLetters
            animationConfig={{ startDelay: 0.4 }}
            className={cn(
              "selection:bg-zinc-700 selection:decoration-clone selection:text-white",
              "text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl",
              "text-nowrap font-cal tracking-wide",
            )}
            text={"with Precision\n& Passion"}
          />
        </div>

        <div className="col-span-full mt-16 lg:col-auto lg:mt-0">
          <AnimatedTechStack
            className={cn(
              "flex lg:relative lg:z-10 lg:aspect-square lg:rounded-e-full lg:rounded-s-full",
              "backdrop-blur-2xl",
            )}
          />
        </div>
      </div>
    </Container>
  );
}
