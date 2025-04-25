import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  universal: {
    nav: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "43px",
        letterSpacing: "-0.43px",
        lineHeight: "100%",
      },
    },
    caption: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "18px",
        letterSpacing: "1px",
        lineHeight: "100%",
      },
    },
    title: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "60px",
        letterSpacing: "-0.6px",
        lineHeight: "100%",
      },
    },
    description: {
      value: {
        fontFamily: "var(--font-so-do-sans)",
        fontSize: "16px",
        letterSpacing: "-0.48px",
        lineHeight: "130%",
      },
    },
  },
});
