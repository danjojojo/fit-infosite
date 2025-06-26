"use client";

import { useContext, createContext } from "react";
import { useGlobalState } from "@/hooks/useGlobalState";

export const GlobalStateContext = createContext<ReturnType<typeof useGlobalState> | null>(null);

export const useGlobalStateContext = () => {
    const context = useContext(GlobalStateContext);
    if(!context) {
        throw new Error("useGlobalStateContext must be used within a GlobalStateProvider");
    }

    return context;
}