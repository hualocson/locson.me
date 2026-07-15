import React, { FC } from "react";

import Image from "next/image";

import { TProjectFrames } from "@/constants/projects";
import { cn } from "@/lib/utils";

interface IProjectShowcaseProps {
  frames: TProjectFrames;
}

const ProjectShowcase: FC<IProjectShowcaseProps> = ({ frames }) => {
  return (
    <>
      {frames.map((f, i) => (
        <FrameItem key={f.id} frame={f} isFull={i === frames.length - 1} />
      ))}
    </>
  );
};

interface IFrameItemProps {
  frame: TProjectFrames[number];
  isFull?: boolean;
}

const FrameItem: FC<IFrameItemProps> = ({ frame, isFull = false }) => {
  return (
    <div
      style={
        {
          "--ratio": frame.ratio,
        } as React.CSSProperties
      }
      className={cn(
        "relative flex w-full flex-shrink-0 items-center justify-center md:w-auto",
        "aspect-[var(--ratio)] last:mb-12 md:last:mb-0",
        isFull && "w-full md:h-svh md:w-svw"
      )}
    >
      <Image
        src={frame.src}
        fill
        alt={frame.alt}
        sizes="100vw"
        className="my-0 object-cover"
        priority
        quality={90}
      />
    </div>
  );
};

export default ProjectShowcase;
