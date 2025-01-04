import { Media } from "@/payload-types";
import Image from "next/image";

import { AnimatedTextLetters } from "@/components/(frontend)/framer-motion/animated-text-letters";
import { FadeIn, FadeInStagger } from "@/components/(frontend)/framer-motion/fade-in";

import { cn } from "@/utils/cn";

import { HeroVideo } from "./video";

interface HeroProps {
  subheadline: string;
  headline: string;
  media: Media;
}

export const Hero = ({ headline, subheadline, media }: HeroProps) => {
  return (
    <FadeInStagger
      className={cn("supports-[height:100cqh]:h-[100cqh]", "relative flex grow items-end")}
    >
      <div className="relative z-20 mb-6 w-full lg:mb-12">
        <FadeIn className="space-y-6 px-6 py-6 md:space-y-10 md:px-24">
          <AnimatedTextLetters
            text={headline.replaceAll("\\n", "\n")}
            animated
            className="font-cal text-4xl font-normal tracking-wide sm:text-5xl lg:text-6xl 2xl:text-8xl"
            animationConfig={{ startDelay: 0.5 }}
          />
          <AnimatedTextLetters
            text={subheadline.replaceAll("\\n", "\n")}
            animated
            className="font-mono text-base font-light md:text-lg lg:text-xl"
            animationConfig={{ startDelay: 0.7 }}
          />
        </FadeIn>
      </div>

      <div className="absolute inset-0 z-0">
        {media?.mimeType?.includes("video") && (
          <HeroVideo
            className={cn(
              "absolute inset-0 z-0 h-full w-full object-cover",
              "dark:opacity-20 dark:hue-rotate-0 dark:invert",
              "opacity-50 brightness-110",
            )}
            url={media?.url as string}
          />
        )}

        {media?.mimeType?.includes("image") && (
          <Image
            className={cn(
              "absolute inset-0 z-0 h-full w-full object-cover",
              "dark:opacity-20 dark:hue-rotate-0 dark:invert",
              "opacity-50 brightness-110",
            )}
            src={media?.url as string}
            alt={media?.alt as string}
            loading="lazy"
            priority
            fill
          />
        )}
      </div>
    </FadeInStagger>
  );
};
