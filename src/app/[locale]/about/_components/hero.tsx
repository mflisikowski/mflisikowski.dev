import { getTranslations } from "next-intl/server";

import { AnimatedTextLetters } from "@/components/framer-motion/animated-text-letters";
import { FadeIn, FadeInStagger } from "@/components/framer-motion/fade-in";
import { HeroVideo } from "@/components/heros/video";

import { cn } from "@/utils/cn";

export const Hero = async () => {
  const t = await getTranslations("AboutPage");

  return (
    <FadeInStagger
      className={cn(
        "supports-[height:100cqh]:h-[100cqh] lg:supports-[height:100cqh]:h-[calc(100cqh-theme(height.24))]",
        "relative flex grow items-end",
      )}
    >
      <div className="relative z-20 mb-6 w-full lg:mb-12">
        <FadeIn className="space-y-6 px-6 py-6 md:space-y-10 md:px-24">
          <AnimatedTextLetters
            className="font-cal text-4xl font-normal tracking-wide sm:text-5xl lg:text-6xl 2xl:text-8xl"
            animationConfig={{ startDelay: 0.5 }}
            text={"Mateusz Flisikowski"}
            animated
          />

          <AnimatedTextLetters
            className="font-mono text-base font-light md:text-lg lg:text-xl"
            animationConfig={{ startDelay: 0.7 }}
            text={`${t("traits.frontEndEngineer")}\n${t("traits.selfTaught")}\n${t("traits.techEnthusiast")}\n${t("traits.protagonist")}`}
            animated
          />
        </FadeIn>
      </div>

      <div className="absolute inset-0 z-0">
        <HeroVideo />
      </div>
    </FadeInStagger>
  );
};
