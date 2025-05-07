import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";
import { textStyles } from "./textStyles";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        app: {
          black: { value: "#000000" },
          darkgray: { value: "#121010" },
          gray: { value: "#313131" },
          red: { value: "#CD0E04" },
          lightred: { value: "#FF7169" },
          dirtywhite: { value: "#F0EEEB" },
          white: { value: "#FFFFFF" },
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
            value: "375px",
          },
        },
      },
    },
    textStyles,
  },
});

export const system = createSystem(defaultConfig, config);