"use client";

import { Text, Box, Flex, VStack, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

import Section from "@/components/ui/Section";
import FITButton from "@/components/ui/FITButton";

import ContentContainer from "@/components/layout/ContentContainer";

import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";

import horizontalLoop from "@/helpers/horizontalLoop";

export default function AboutUs() {
  const headlineText = "'Di maloloko ang may pakialam";
  const aboutUsTextFIT =
    "Fight IT is a movement under the Federation of Philippine Industries (FPI) in collaboration with the Philippine Tobacco Institute (PTI) intended to protect consumers, safeguard government revenues, and shield legitimate industries from the ill-effects of smuggling.";
  const aboutUsTextPTI =
    "The Philippine Tobacco Institute, Inc. represents, expresses and effects the opinions of the tobacco industry in the Philippines. It is a trade association composed of leading tobacco companies in the Philippines:";

  const tobaccoCompanies = [
    {
      name: "TBC 1",
      image: "/assets/tb_company-1.png",
    },
    {
      name: "TBC 2",
      image: "/assets/tb_company-2.png",
    },
    {
      name: "TBC 3",
      image: "/assets/tb_company-3.png",
    },
    {
      name: "TBC 4",
      image: "/assets/tb_company-4.png",
    },
    {
      name: "TBC 5",
      image: "/assets/tb_company-5.png",
    },
    {
      name: "TBC 6",
      image: "/assets/tb_company-6.png",
    },
  ];

  const aboutUsRef = useRef<HTMLDivElement>(null);

  const carouselContainerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
      const items = carouselContainerRef.current?.children;
      
      if (!items) return;

      const speed = 2.5;

      const loop = horizontalLoop(items, {
        repeat: -1,
        speed: 1.5,
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
    <Section id="about-us">
      <VStack backgroundColor="app.red" ref={aboutUsRef} color="app.white">
        <ContentContainer marginTop="48px">
          <Flex flexDir="column" rowGap="app.base">
            <Text textStyle="universal.description">About Us</Text>
            <Text textStyle="universal.h1">{headlineText}</Text>
          </Flex>
        </ContentContainer>
        <ContentContainer>
          <Flex flexDir="column" rowGap="app.base">
            <Image
              src="/assets/fit.webp"
              alt="FIT Logo"
              height={132}
              width={132}
            />
            <Text textStyle="universal.description">{aboutUsTextFIT}</Text>
          </Flex>
        </ContentContainer>
        <ContentContainer>
          <Box
            width="100%"
            height="240px"
            position="relative"
            border="1px solid white"
          >
            <Image
              src="/assets/about-us.png"
              alt="About us"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </ContentContainer>
        <ContentContainer>
          <Flex flexDir="column" rowGap="app.base">
            <Image
              src="/assets/pti.png"
              alt="PTI Logo"
              height={132}
              width={132}
            />
            <Text textStyle="universal.description">{aboutUsTextPTI}</Text>
          </Flex>
        </ContentContainer>

        {/* <ContentContainer> */}
        <Box width="100vw" overflow="hidden">
          <Flex
            columnGap="12px"
            border="1px solid black"
            wrap="nowrap"
            minWidth="max-content"
            justifyContent="center"
            ref={carouselContainerRef}
          >
            {tobaccoCompanies.map((company, index) => (
              <AspectRatio
                key={`${company.name}-${index}`}
                ratio={57 / 28}
                width="114px"
                height="56px"
                border="1px solid white"
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
        </Box>
        {/* </ContentContainer> */}

        <ContentContainer>
          <Flex rowGap="app.base" flexDir="column">
            <FITButton
              text="Contact Us"
              bgColor="app.white"
              color="app.black"
            />
            <FITButton
              text="Join the Conversation"
              bgColor="app.black"
              color="app.white"
            />
          </Flex>
        </ContentContainer>
      </VStack>
    </Section>
  );
}
