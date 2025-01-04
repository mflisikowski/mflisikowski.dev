"use client";

import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";

export const HeroVideo = ({ className, url }: { className?: string; url: string }) => {
  const requestAnimationFrameRef = useRef<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const updateTime = useCallback(({ progress }: { progress: number }) => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) return;

    if (requestAnimationFrameRef.current !== null) {
      cancelAnimationFrame(requestAnimationFrameRef.current);
      requestAnimationFrameRef.current = null;
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
      if (requestAnimationFrameRef.current !== null) {
        cancelAnimationFrame(requestAnimationFrameRef.current);
        requestAnimationFrameRef.current = null;
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
        className={cn("absolute inset-0 z-0 h-full w-full object-cover", className)}
        preload="auto"
        onError={handleError}
        ref={videoRef}
        src={url}
        playsInline
        autoPlay
        muted
        loop
      />
    )
  );
};
