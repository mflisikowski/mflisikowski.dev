import { Container } from "@/components/container";
import { AnimatedTechStack } from "@/components/framer-motion/animated-tech-stack";
import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";

import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <div className="group grid grid-cols-2 items-center">
        <div className="relative z-20 col-span-full space-y-4 lg:col-auto lg:space-y-0">
          <AnimatedTextLetters
            className={cn(
              "selection:bg-purple-500 selection:tracking-widest selection:text-white",
              "text-[3.2rem] leading-[4.2rem] lg:text-6xl xl:text-7xl 2xl:text-8xl",
              "text-nowrap font-cal tracking-wide",
            )}
            text={"Crafting Digital\nExperiences"}
          />

          <AnimatedTextLetters
            animationConfig={{ startDelay: 0.4 }}
            className={cn(
              "selection:bg-zinc-700 selection:decoration-clone selection:text-white",
              "text-[2.8rem] leading-[3.8rem] lg:text-6xl xl:text-7xl 2xl:text-8xl",
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
