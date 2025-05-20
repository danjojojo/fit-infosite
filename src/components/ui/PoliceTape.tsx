import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface PoliceTapeProps {
  rotation: number;
  tapeText: string;
  startsFrom: "left" | "right";
  tapeColor?: string;
}

export default function PoliceTape({
  rotation,
  tapeText,
  startsFrom,
  tapeColor = "app.black",
}: PoliceTapeProps) {
  const tapeRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set(tapeRef.current, {
      rotate: rotation,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tapeRef.current,
        start: "top 80%",
        end: "bottom 500px",
        markers: true,
        toggleActions: "none none none none",
        scrub: 0.5,
      },
    });

    tl.fromTo(
      tapeRef.current,
      {
        xPercent: startsFrom === "left" ? -100 : 100,
      },
      {
        xPercent: 0,
        duration: 5,
        ease: "linear",
      }
    );
  });

  return (
    <Box width="110vw" backgroundColor={tapeColor} ref={tapeRef}>
        <Box
            padding="10px"
            display="flex"
            justifyContent="space-around"
            gapX="20px"
            overflow="hidden"
        >
        {Array.from({ length: 10 }, (_, index) => (
            <Text
            key={index}
            textStyle="universal.h4"
            color="app.white"
            textWrap="nowrap"
            >
            {tapeText}
            </Text>
        ))}
        </Box>
    </Box>
  );
}
