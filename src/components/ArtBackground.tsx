"use client";

import { FC, useMemo } from "react";

import ArtDots from "./ArtDots";
import ArtPlum from "./ArtPlum";

const ArtBackground: FC<{
  art?: "random" | "plum" | "dots";
}> = ({ art }) => {
  const Component = useMemo(() => {
    if (art === "random") {
      return Math.random() > 0.5 ? <ArtPlum /> : <ArtDots />;
    }
    if (art === "plum") {
      return <ArtPlum />;
    }

    if (art === "dots") {
      return <ArtDots />;
    }

    return null;
  }, [art]);

  return Component;
};

export default ArtBackground;
