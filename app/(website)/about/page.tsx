import Image from "next/image";

import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";

import { cn } from "@/utils/cn";

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-3 gap-x-4 gap-y-4 text-center font-mono">
        <div className="col-span-3 mb-8 space-y-16 text-left lg:col-span-2 lg:mb-0">
          <div>
            <AnimatedTextLetters
              animationConfig={{
                delay: 0.03,
              }}
              className={cn(
                "text-nowrap font-cal text-[4.5rem] leading-none sm:text-[6rem] md:text-[8rem] xl:text-8xl 2xl:text-[10rem]",
              )}
              text={"Flisikowski"}
            />

            <AnimatedTextLetters
              animationConfig={{
                startDelay: 0.6,
                delay: 0.03,
              }}
              className={cn(
                "text-nowrap font-cal text-[4.5rem] leading-none sm:text-[6rem] md:text-[8rem] xl:text-8xl 2xl:text-[10rem]",
              )}
              text={"Mateusz"}
            />
          </div>

          <AnimatedTextLetters
            animationConfig={{
              startDelay: 0.6,
              repeatDelay: 2.6,
              delay: 0.03,
            }}
            className="font-mono text-xl font-semibold"
            text={"* Front-End Engineer\n* Self-taught\n* Tech Enthusiast\n* Protagonist (ENFJ-T)"}
          />
        </div>

        <div className="order-3 col-span-3 lg:order-none lg:mx-auto lg:-mt-8 lg:mb-24 lg:mr-1">
          <Image
            className="relative z-0 aspect-video h-full w-full object-cover object-center filter transition-all duration-300 hover:brightness-110"
            height={1110}
            width={570}
            alt="about"
            src="/mateusz-flisikowski-1110x570.jpg"
          />
        </div>

        <div className="order-1 col-span-3 lg:order-none lg:col-span-1 lg:-mt-80 lg:mb-24">
          <Image
            className="relative z-10 aspect-video h-full w-full object-cover object-center filter transition-all duration-300 hover:brightness-110 lg:aspect-[2/3]"
            height={570}
            width={570}
            alt="about"
            src="/mateusz-flisikowski-570x570.jpeg"
          />
        </div>

        <div className="col-span-3 lg:col-span-2 lg:translate-x-4 xl:translate-x-16">
          <div className="font-col space-y-8 text-balance text-left text-xl md:col-span-3 md:text-2xl lg:text-3xl">
            <p className="font-medium">
              I&apos;m a front-end engineer constantly exploring new ways to enhance user experience
              and create aesthetically pleasing digital interfaces.
            </p>

            <p className="font-light">
              My passion lies in pushing boundaries and creating truly special digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
