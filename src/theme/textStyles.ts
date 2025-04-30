import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  universal: {
    // FONT USED IN NAV LINKS

    nav: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "4.3rem",
        letterSpacing: "-0.43px",
        lineHeight: "100%",
        textTransform: "uppercase",
      },
    },

    // HEADINGS

    h1_xl: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "6.8rem",
        letterSpacing: "-0.68px",
        lineHeight: "100%",
        textTransform: "uppercase",
      },
    },
    h1: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "6rem",
        letterSpacing: "-0.6px",
        lineHeight: "100%",
        textTransform: "uppercase",
      },
    },
    h2: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "4.2rem",
        letterSpacing: "-0.42px",
        lineHeight: "120%",
        textTransform: "uppercase",
      },
    },
    h3: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "3.4rem",
        letterSpacing: "-0.34px",
        lineHeight: "120%",
        textTransform: "uppercase",
      },
    },
    h4: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "1.8rem",
        letterSpacing: "0.18px",
        lineHeight: "120%",
        textTransform: "uppercase",
      },
    },
    h5: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "1.6rem",
        letterSpacing: "0.16px",
        lineHeight: "100%",
        textTransform: "uppercase",
      },
    },

    // OVERLINE

    overline1: {
      value: {
        fontFamily: "var(--font-so-do-sans)",
        fontSize: "1.6rem",
        letterSpacing: "-0.48px",
        lineHeight: "130%",
      },
    },

    // OTHER

    caption: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "1.8rem",
        letterSpacing: "0.18px",
        lineHeight: "100%",
        textTransform: "uppercase",
      },
    },

    legend: {
      value: {
        fontFamily: "var(--font-so-do-sans)",
        fontSize: "1.2rem",
        letterSpacing: "-0.36px",
        lineHeight: "130%",
      },
    },

    // FOR CONTENT/DESCRIPTION/DETAILS

    description: {
      value: {
        fontFamily: "var(--font-so-do-sans)",
        fontSize: "1.6rem",
        letterSpacing: "-0.48px",
        lineHeight: "130%",
      },
    },

    overline_description: {
      value: {
        fontFamily: "var(--font-so-do-sans)",
        fontSize: "1.2rem",
        letterSpacing: "-0.36px",
        lineHeight: "130%",
      },
    },

    title: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "clamp(4.2rem, 6rem, 8rem)",
        letterSpacing: "-0.6px",
        lineHeight: "100%",
      },
    },

    title_2: {
      value: {
        fontFamily: "var(--font-titling-gothic-fb-comp)",
        fontSize: "4.2rem",
        letterSpacing: "-0.6px",
        lineHeight: "100%",
      },
    },

    caption_2: {
      value: {
        fontFamily: "var(--font-so-do-sans)",
        fontSize: "1.6rem",
        letterSpacing: "-0.48px",
        lineHeight: "100%",
      },
    },

    description_1: {
      value: {
        fontFamily: "var(--font-so-do-sans)",
        fontSize: "1.6rem",
        letterSpacing: "-0.48px",
        lineHeight: "130%",
      },
    },

    description_2: {
      value: {
        fontFamily: "var(--font-so-do-sans)",
        fontSize: "1.2rem",
        letterSpacing: "-0.36px",
        lineHeight: "130%",
      },
    },
  },
});
