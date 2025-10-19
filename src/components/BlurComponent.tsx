import React from "react";

import { cn } from "@/lib/utils";

const BlurComponent = () => {
  return (
    <div
      className={cn(
        "top-0 first:mb-[calc(-1*var(--h))] first:[--direction:to_bottom]",
        "pointer-events-none fixed z-10 h-(--h) w-full [mask-image:linear-gradient(var(--direction),_#000_25%,_transparent)] opacity-95 backdrop-blur-sm select-none",
        "after:absolute after:inset-0 after:bg-[linear-gradient(var(--direction),var(--color-background),_transparent)]"
      )}
      aria-hidden="true"
      style={
        {
          "--h": "128px",
        } as React.CSSProperties
      }
    />
  );
};

export default BlurComponent;
