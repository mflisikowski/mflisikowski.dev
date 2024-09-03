import { Container } from "@/components/container";
import { AnimatedTechStack } from "@/components/framer-motion/animated-tech-stack";
import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";

import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <div className="group items-center xl:grid xl:grid-cols-2">
        <div className="relative z-20">
          <AnimatedTextLetters
            className={cn(
              "selection:bg-purple-500 selection:tracking-widest selection:text-white",
              "text-3xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
              "text-nowrap font-cal tracking-wide",
            )}
            text={"Crafting Digital\nExperiences"}
          />

          <AnimatedTextLetters
            animationConfig={{ startDelay: 0.4 }}
            className={cn(
              "selection:bg-zinc-700 selection:decoration-clone selection:text-white",
              "text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl",
              "text-nowrap font-cal tracking-wide",
            )}
            text={"with Precision\n& Passion"}
          />
        </div>

        <AnimatedTechStack
          className={cn(
            "relative z-10 flex aspect-square h-full flex-grow items-end justify-center rounded-e-full rounded-s-full",
            "bg-white/10 backdrop-blur-lg",
          )}
        />
      </div>
    </Container>
  );
}
