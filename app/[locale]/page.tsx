import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

import { ElevateYourBrandTodayButton } from "@/components/buttons/elevate-your-brand-today";
import { Container } from "@/components/container";
import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";
import { FadeIn, FadeInStagger } from "@/components/framer-motion/fade-in";
import { ScribbleDecoration } from "@/components/scribble-decoration";

import { cn } from "@/utils/cn";

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function Home({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");

  return (
    <Container>
      <FadeInStagger>
        <div className="space-y-44">
          {/* Hero */}
          <div className="relative grid grid-cols-3 gap-10">
            <div className="relative z-20 col-span-full h-full space-y-4 lg:col-span-2 lg:space-y-8">
              <FadeIn>
                <AnimatedTextLetters
                  className={cn(
                    "selection:bg-purple-500 selection:tracking-widest selection:text-white",
                    "text-5xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl",
                    "font-cal tracking-wide lg:text-nowrap",
                  )}
                  text={t("hero.titleMain")}
                />
              </FadeIn>

              <FadeIn>
                <AnimatedTextLetters
                  animationConfig={{ startDelay: 0.4 }}
                  className={cn(
                    "selection:bg-zinc-700 selection:decoration-clone selection:text-white",
                    "text-4xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl",
                    "text-nowrap font-cal tracking-wide",
                  )}
                  text={t("hero.titleAccent")}
                />
              </FadeIn>

              <FadeIn>
                <div className="max-w-lg xl:mt-14">
                  <AnimatedTextLetters
                    className="text-wrap font-mono text-xl font-light"
                    text={t("hero.subtitle")}
                    animated
                  />
                </div>
              </FadeIn>
            </div>

            <div
              className={cn(
                "-right-52 top-0 h-full w-full opacity-10 lg:right-auto lg:top-auto lg:h-auto lg:w-auto lg:opacity-100",
                "absolute -z-10 -order-1 col-span-full flex-grow lg:relative lg:order-none lg:col-auto",
              )}
            >
              <div className="grid h-full place-items-center lg:place-items-end">
                <Image
                  className="object-contain transition-transform duration-1000 will-change-transform lg:my-0 lg:aspect-photo lg:-translate-x-12 lg:translate-y-36 lg:-rotate-12 lg:scale-150 xl:-translate-x-24 xl:rotate-6"
                  height={570}
                  width={570}
                  src="/wireframe.svg"
                  alt="wireframe"
                  priority
                />
              </div>
            </div>

            <div className="order-2 col-span-full">
              <div className="flex items-center justify-center space-y-3 lg:justify-start">
                <FadeIn>
                  <ScribbleDecoration variant={1} svgClassName="-right-7 -top-7 h-12 w-12">
                    <ElevateYourBrandTodayButton />
                  </ScribbleDecoration>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  );
}
