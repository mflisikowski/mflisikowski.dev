"use client";

import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";

export const HeroVideo = () => {
  const requestAnimationFrameRef = useRef<number>();
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const updateTime = useCallback(({ progress }: { progress: number }) => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) return;

    if (requestAnimationFrameRef.current) {
      cancelAnimationFrame(requestAnimationFrameRef.current);
    }

    const animate = () => {
      if (!video) return;

      const factor = 0.1;
      const targetTime = progress * video.duration;
      const interpolatedTime = video.currentTime + (targetTime - video.currentTime) * factor;

      if (interpolatedTime !== video.currentTime) {
        video.currentTime = interpolatedTime;
      }
    };

    requestAnimationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    return () => {
      if (requestAnimationFrameRef.current) {
        cancelAnimationFrame(requestAnimationFrameRef.current);
      }
    };
  }, []);

  useLenis(updateTime);

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setError((e.target as HTMLVideoElement).error?.message || "Failed to load video");
  };

  return (
    !error && (
      <video
        onContextMenu={(e) => e.preventDefault()}
        className={cn(
          "absolute inset-0 z-0 h-full w-full object-cover",
          "dark:opacity-20 dark:hue-rotate-0 dark:invert",
          "opacity-50 brightness-110",
        )}
        ref={videoRef}
        src="/videos/mixkit-an-ethereal-white-mistrapidly-maskes-waves-as-it-descents-50941-full-hd.mp4"
        onError={handleError}
        playsInline
        autoPlay
        muted
        loop
      />
    )
  );
};
