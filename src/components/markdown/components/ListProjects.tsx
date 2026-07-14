import { useEffect, useRef } from "react";
import Lenis from "lenis";

const ListProjects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) {
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!isDesktop || prefersReducedMotion) {
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
  }, []);

  return (
    <div
      ref={scrollRef}
      className="hide-scrollbar-x mt-20 flex w-full items-center gap-4 overflow-x-auto"
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className="aspect-square w-40 flex-shrink-0 bg-gray-400 first:ml-7 last:mr-7"
        ></span>
      ))}
    </div>
  );
};

export default ListProjects;
