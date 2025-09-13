"use client";

import { useMemo } from "react";

import ArtDots from "./ArtDots";
import ArtPlum from "./ArtPlum";

const ArtBackground = () => {
  const art = useMemo(() => {
    let art = "random";
    if (art === "random") {
      art = Math.random() > 0.5 ? "plum" : "dots";
    }

    if (art === "plum") {
      return "plum";
    }
    if (art === "dots") {
      return "dots";
    }
    return null;
  }, []);

  return <>{art === "plum" ? <ArtPlum /> : <ArtDots />}</>;
};

export default ArtBackground;
