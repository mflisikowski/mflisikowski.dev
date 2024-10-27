"use client";

import { useLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useRef } from "react";

import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";
import { FadeIn, FadeInStagger } from "@/components/framer-motion/fade-in";
import { Wireframe } from "@/components/heros/homepage/wireframe";
import { ScribbleDecoration } from "@/components/scribble-decoration";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/utils/cn";

import { useConsentAwareAnalytics } from "@/hooks/use-consent-aware-analytics";

export const Hero = () => {
  const { trackEvent } = useConsentAwareAnalytics();
  const t = useTranslations("HomePageHero");

  const lastPercentage = useRef<number | null>(null);
  const $titleAccent = useRef<HTMLDivElement>(null);
  const $titleMain = useRef<HTMLDivElement>(null);
  const $subtitle = useRef<HTMLDivElement>(null);

  useLenis(({ dimensions, scroll }) => {
    const { scrollHeight, height } = dimensions;
    const scrollPercentage = Math.round((scroll / (scrollHeight - height)) * 100);

    if (scrollPercentage !== lastPercentage.current) {
      lastPercentage.current = scrollPercentage;

      const updateElementTransform = (
        element: React.RefObject<HTMLDivElement>,
        translateFactor: number,
        scaleFactor: number,
      ) => {
        if (element.current) {
          const translateY = scrollPercentage * translateFactor;
          const scale = 1 + (scrollPercentage * scaleFactor) / 100;
          element.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
        }
      };

      updateElementTransform($titleAccent, -0.1, 0.02);
      updateElementTransform($titleMain, -0.1, 0.02);
      updateElementTransform($subtitle, -0.1, 0.02);
    }
  });

  return (
    <FadeInStagger>
      <div className="space-y-44">
        <div className="relative grid grid-cols-3 gap-10">
          <div className="relative z-20 col-span-full h-full space-y-4 lg:col-span-2 lg:space-y-8">
            <FadeIn>
              <AnimatedTextLetters
                className={cn(
                  "selection:bg-purple-500 selection:tracking-widest selection:text-white",
                  "text-5xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl",
                  "font-cal tracking-wide will-change-transform lg:text-nowrap",
                )}
                text={t("titleMain")}
                ref={$titleMain}
              />
            </FadeIn>

            <FadeIn>
              <AnimatedTextLetters
                animationConfig={{ startDelay: 0.4 }}
                className={cn(
                  "selection:bg-zinc-700 selection:decoration-clone selection:text-white",
                  "text-4xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl",
                  "text-nowrap font-cal tracking-wide will-change-transform",
                )}
                text={t("titleAccent")}
                ref={$titleAccent}
              />
            </FadeIn>

            <FadeIn>
              <div className="max-w-lg xl:mt-14">
                <AnimatedTextLetters
                  className="text-wrap font-mono text-xl font-light will-change-transform"
                  text={t("subtitle")}
                  ref={$subtitle}
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
              <Wireframe className="object-contain transition-transform duration-1000 will-change-transform lg:my-0 lg:aspect-photo lg:-translate-x-12 lg:translate-y-36 lg:-rotate-12 lg:scale-150 xl:-translate-x-24 xl:rotate-6" />
            </div>
          </div>

          <div className="order-2 col-span-full">
            <div className="flex items-center justify-center space-y-3 lg:justify-start">
              <FadeIn>
                <ScribbleDecoration variant={1} svgClassName="-right-7 -top-7 h-12 w-12">
                  <Link
                    className={cn(buttonVariants({ variant: "amber", size: "lg" }))}
                    onClick={() => trackEvent("elevate-your-brand-today-button-click")}
                    href="/digital-needs-assessment"
                  >
                    <span className="text-lg font-semibold">
                      <>{t("cta")}</>
                    </span>
                  </Link>
                </ScribbleDecoration>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </FadeInStagger>
  );
};
