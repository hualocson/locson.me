"use client";

import { FC, PropsWithChildren, useEffect, useRef } from "react";

import useIsMobile from "@/app/hooks/isMobile";
import Lenis from "lenis";

const HorizontalScrollContainer: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isMobile || prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      wrapper: el,
      content: el,
      orientation: "horizontal",
      gestureOrientation: "vertical",
      smoothWheel: true,
      autoRaf: true,
      lerp: 0.1,
      syncTouch: false,
      wheelMultiplier: 1,
    });

    return () => {
      lenis.destroy();
    };
  }, [isMobile]);

  return (
    <div ref={scrollRef} className={className}>
      {children}
    </div>
  );
};

export default HorizontalScrollContainer;
