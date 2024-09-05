import Image from "next/image";

import { Container } from "@/components/container";
import { AnimatedTechStack } from "@/components/framer-motion/animated-tech-stack";
import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";

import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <div className="group grid grid-cols-3 gap-10">
        <div className="relative z-20 order-2 col-span-full h-full space-y-4 lg:order-none lg:col-span-2 lg:space-y-8">
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

          <div className="max-w-lg">
            <AnimatedTextLetters
              animationConfig={{
                startDelay: 0.8,
              }}
              className="text-wrap font-mono text-2xl font-light"
              text={"Turning innovative ideas into powerful, user-centric digital solutions"}
              animated
            />
          </div>
        </div>

        <div className="relative z-10 col-span-full flex-grow lg:col-auto">
          <div className="aspect-square h-full lg:-translate-x-24 lg:translate-y-36 lg:scale-125 xl:scale-100">
            <Image
              className="h-full w-full rounded-full object-cover"
              height={570}
              width={570}
              src="/mateusz-flisikowski-570x570.jpeg"
              alt="Mateusz Flisikowski"
            />

            <div className="absolute bottom-4 right-8 z-20 flex h-24 w-24 items-center justify-center rounded-full backdrop-blur-2xl md:h-32 md:w-32 lg:-left-8 lg:bottom-4 xl:h-40 xl:w-40">
              <AnimatedTechStack className="relative h-full w-full overflow-hidden rounded-full bg-white/80 p-8" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
