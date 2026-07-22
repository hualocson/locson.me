"use client";

import { useEffect, useState } from "react";

import { useLayoutTransition } from "@/providers/TransitionProvider";
import {
  AnimatePresence,
  animate,
  motion,
  steps,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";

const COUNT_DURATION = 2;
const EXIT_HOLD = 0.2;
const LINE_COUNT = 9;

const lineIndexes = Array.from({ length: LINE_COUNT }, (_, index) => index);

export default function InitialTransition() {
  const { finish } = useLayoutTransition();

  const [visible, setVisible] = useState(true);
  const [progressText, setProgressText] = useState(0);
  const progress = useMotionValue(0);
  const lineScale = useTransform(progress, [0, 100], [0, 1]);
  useMotionValueEvent(progress, "change", (latest) => {
    setProgressText(Math.round(latest));
  });

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: COUNT_DURATION,
      ease: steps(100, "start"),
      onComplete: () => {
        setVisible(false);
      },
    });

    return () => {
      controls.stop();
    };
  }, [progress]);

  return (
    <AnimatePresence onExitComplete={finish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#1c1c1c] dark:bg-[#F8f7f8]"
          initial={{ opacity: 1 }}
          animate={{ scale: 1 }}
          exit={{
            opacity: 0,
            transition: {
              delay: EXIT_HOLD,
              duration: 1.5,
              ease: "easeOut",
            },
          }}
        >
          <div className="absolute inset-0 flex items-end justify-between px-5 md:px-20">
            {lineIndexes.map((lineIndex) => (
              <motion.span
                key={lineIndex}
                className="h-full w-px origin-bottom bg-[#ccc] dark:bg-[#1c1c1c]"
                style={{
                  scaleY: lineScale,
                }}
              />
            ))}
          </div>
          <div className="font-roxborough absolute right-6 bottom-6 text-6xl leading-none font-bold text-[#ccc] md:right-10 md:bottom-8 md:text-8xl dark:text-[#1c1c1c]">
            {progressText}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
