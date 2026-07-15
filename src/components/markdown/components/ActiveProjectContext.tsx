"use client";

import React, { createContext, useContext, useState } from "react";

import type { TProjectSlug } from "@/constants/projects";

interface IActiveProjectContext {
  activeSlug: TProjectSlug | null;
  setActiveSlug: (slug: TProjectSlug | null) => void;
}

const ActiveProjectContext = createContext<IActiveProjectContext | null>(null);

export const ActiveProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSlug, setActiveSlug] = useState<TProjectSlug | null>(null);

  return (
    <ActiveProjectContext.Provider value={{ activeSlug, setActiveSlug }}>
      {children}
    </ActiveProjectContext.Provider>
  );
};

export const useActiveProject = () => {
  const ctx = useContext(ActiveProjectContext);
  if (!ctx) {
    throw new Error(
      "useActiveProject must be used within ActiveProjectProvider"
    );
  }
  return ctx;
};
