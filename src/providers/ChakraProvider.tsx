"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme/index";

interface ProviderProps {
    children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
    return <ChakraProvider value={system}>{children}</ChakraProvider>
};