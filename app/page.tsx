import Image from "next/image";

import ElevateYourBrandToday from "@/components/buttons/elevate-your-brand-today";
import { Container } from "@/components/container";
import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";
import { FadeIn, FadeInStagger } from "@/components/framer-motion/fade-in";

import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <Container>
      <FadeInStagger>
        <div className="space-y-44">
          {/* Hero */}
          <div className="group grid grid-cols-3 gap-10">
            <div className="relative z-20 col-span-full h-full space-y-4 lg:col-span-2 lg:space-y-8">
              <FadeIn>
                <AnimatedTextLetters
                  className={cn(
                    "selection:bg-purple-500 selection:tracking-widest selection:text-white",
                    "text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-9xl",
                    "font-cal tracking-wide lg:text-nowrap",
                  )}
                  text={"Crafting Digital\nExperiences"}
                />
              </FadeIn>

              <FadeIn>
                <AnimatedTextLetters
                  animationConfig={{ startDelay: 0.4 }}
                  className={cn(
                    "selection:bg-zinc-700 selection:decoration-clone selection:text-white",
                    "text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl",
                    "text-nowrap font-cal tracking-wide",
                  )}
                  text={"with Precision\n& Passion"}
                />
              </FadeIn>

              <FadeIn>
                <div className="mt-14 max-w-lg">
                  <AnimatedTextLetters
                    className="text-wrap text-center font-mono text-2xl font-light lg:text-left"
                    text={"Turning innovative ideas into powerful, user-centric digital solutions"}
                    animated
                  />
                </div>
              </FadeIn>
            </div>

            <div className="relative z-10 col-span-full flex-grow lg:col-auto">
              <Image
                className={cn(
                  "aspect-video h-full w-full rounded-full object-cover lg:aspect-square lg:-translate-x-12 lg:translate-y-14 lg:rotate-45",
                  "shadow-[4px_-4px_0_1px_rgba(0,0,0,0.8)]",
                )}
                height={570}
                width={570}
                src="wireframe.svg"
                alt="wireframe"
              />
            </div>

            <div className="order-2 col-span-full">
              <div className="flex items-center justify-center space-y-3 lg:justify-start">
                <FadeIn>
                  <ElevateYourBrandToday />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  );
}
