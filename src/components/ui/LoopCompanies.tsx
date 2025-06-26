// UI
import { useRef } from "react";
import { Flex, Box, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";

// Helpers
import horizontalLoop from "@/helpers/horizontalLoop";

// Schema
import type { TobaccoCompaniesDataSchema } from "@/schemas/AboutUsSchema";

export default function LoopCompanies({
  tobaccoCompanies,
}: TobaccoCompaniesDataSchema) {
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const items = carouselContainerRef.current?.children;

      if (!items) return;

      const speed = 1;

      const loop = horizontalLoop(items, {
        repeat: -1,
        speed: 0.5,
        paddingRight: 10,
      });

      let tl: gsap.core.Timeline | null = null;

      Observer.create({
        target: window,
        type: "wheel",
        onChangeY: (self) => {
          if (tl) tl.kill();
          const factor = self.deltaY > 0 ? 1 : -1;
          tl = gsap
            .timeline()
            .to(loop, { timeScale: speed * factor, duration: 0.25 })
            .to(loop, { timeScale: 1 * factor, duration: 1 });
        },
      });
    },
    { scope: carouselContainerRef }
  );
  return (
    <>
      {/* Gradient on both ends */}
      <Flex
        width="100%"
        height="100%"
        justifyContent="space-between"
        position="absolute"
        zIndex={4}
      >
        <Box
          height="100%"
          width="35%"
          bgImage="linear-gradient(to right, {colors.app.red} 50%, transparent)"
          />
        <Box
          height="100%"
          width="35%"
          bgImage="linear-gradient(to left, {colors.app.red} 50%, transparent)"
          />
      </Flex>

      {/* Carousel */}
      <Flex
        columnGap="12px"
        wrap="nowrap"
        width="100%"
        justifyContent="center"
        ref={carouselContainerRef}
      >
        {tobaccoCompanies.map((company, index) => (
          <AspectRatio
            key={`${company.name}-${index}`}
            ratio={57 / 28}
            width="114px"
            height="56px"
            whiteSpace="nowrap"
          >
            <Image
              src={company.image}
              alt={company.name}
              width={114}
              height={56}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </AspectRatio>
        ))}
      </Flex>
    </>
  );
}
