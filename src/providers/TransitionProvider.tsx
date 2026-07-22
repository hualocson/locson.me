"use client";

import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface ITransitionContextType {
  finished: boolean;
  finish: () => void;
}

const TransitionContext = createContext<ITransitionContextType | null>(null);

interface ITransitionProviderProps {
  children: ReactNode;
}

export function TransitionProvider({ children }: ITransitionProviderProps) {
  const [finished, setFinished] = useState(false);

  const value = useMemo(
    () => ({
      finished,
      finish: () => setFinished(true),
    }),
    [finished]
  );

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useLayoutTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("useTransition must be used inside TransitionProvider");
  }

  return context;
}
