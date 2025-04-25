import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";
import { textStyles } from "./textStyles";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        app: {
          black: { value: "#000000" },
          darkgray: { value: "#121010" },
          red: { value: "#CD0E04" },
          white: { value: "#F0EEEB" },
        },
      },
      spacing: {
        app: {
          base: {
            value: "18px",
          },
        },
      },
      sizes: {
        app: {
          base: {
            value: "390px",
          },
        },
      },
    },
    textStyles,
  },
});

export const system = createSystem(defaultConfig, config);