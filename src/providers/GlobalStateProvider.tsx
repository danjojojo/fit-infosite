"use client";

import { GlobalStateContext } from "@/context/GlobalStateContext";
import { useGlobalState } from "@/hooks/useGlobalState";

interface GlobalStateProviderProps {
  children: React.ReactNode;
}

export default function GlobalStateProvider({
  children,
}: GlobalStateProviderProps) {
  const state = useGlobalState();

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
}
