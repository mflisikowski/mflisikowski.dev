import { getTranslations } from "next-intl/server";
import React from "react";

import { ElevateYourBrandTodayButton } from "@/components/buttons/elevate-your-brad-today";
import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";
import { FadeIn, FadeInStagger } from "@/components/framer-motion/fade-in";

export const Hero = async () => {
  const t = await getTranslations("HomePageHero");

  return (
    <FadeInStagger className="relative">
      <div className="z-10 space-y-10">
        <div className="space-y-4 lg:space-y-8">
          <div>
            <FadeIn>
              <AnimatedTextLetters
                className="font-inter text-6xl font-normal tracking-wide will-change-transform md:text-7xl lg:text-nowrap lg:text-8xl"
                animationConfig={{ startDelay: 0.5 }}
                text={t("title")}
                animated
              />
            </FadeIn>
          </div>

          <FadeIn>
            <div className="max-w-lg xl:mt-14">
              <AnimatedTextLetters
                className="text-wrap font-mono text-xl font-light will-change-transform"
                animationConfig={{ startDelay: 0.7 }}
                text={t("subtitle")}
                animated
              />
            </div>
          </FadeIn>
        </div>

        <div className="order-2">
          <div className="flex items-center justify-center space-y-3 lg:justify-start">
            <FadeIn>
              <ElevateYourBrandTodayButton />
            </FadeIn>
          </div>
        </div>
      </div>
    </FadeInStagger>
  );
};
