"use client";

import Image from "next/image";
import { Box, Text, VStack, Container, Flex } from "@chakra-ui/react";
import Section from "@/components/ui/Section";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export default function EffectsOfIllicitTrade() {
  const highlightedText = ["Bakit", "Dapat May", "Peke-alam"];
  //   const cardNum = 1;

  const cardArticles = [
    {
      imageSrc: "/assets/effect-1.jpg",
      imageAlt: "Effect 1",
      title: "Lugi ang taumbayan",
      description:
        "Illicit trade is detrimental to the interest and welfare of the Filipinos as they get less for their money with cheap but fake, unsafe, or substandard products.",
    },
    {
      imageSrc: "/assets/effect-2.jpg",
      imageAlt: "Effect 2",
      title: "Di purkit nakamura, tama ka",
      description:
        "Government should ensure a level playing field where all legitimate, tax paying industries can compete for their fair share of the free market economy.",
    },
    {
      imageSrc: "/assets/effect-2.jpg",
      imageAlt: "Effect 2",
      title: "Bilyung bilyon ang nanakaw sa Pilipino",
      description:
        "Jobs of hard-working Filipinos are threatened with the entry and proliferation of cheap smuggled goods.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Section
      id="epekto-ng-illicit-trade"
      width="inherit"
      position="relative"
      height="auto"
      overflow="hidden"
    >
      <VStack
        padding="app.base"
        backgroundColor="app.red"
        // border="1px solid white"
        width="inherit"
      >
        <Box paddingTop="64px" width="app.base">
          <Text
            padding="app.base"
            color="app.white"
            textStyle="universal.h1_xl"
            display="flex"
            flexDirection="column"
            gap={1}
          >
            {highlightedText.map((text, index) => (
              <Text
                as="mark"
                color="app.white"
                backgroundColor="app.black"
                padding="5px 1px 0px"
                key={index}
                width="fit-content"
              >
                {" "}
                {text}
              </Text>
            ))}
            Ka?
          </Text>
        </Box>
        <Flex maxWidth="app.base" padding={0} flexDir="column">
          <Slider {...settings}>
            {cardArticles.map((card, index) => (
              <Container key={index} height="100%">
                <Flex
                  backgroundColor="app.white"
                  height="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box padding="app.base">
                    <Image
                      src={card.imageSrc}
                      width={319}
                      height={227}
                      alt={card.imageAlt}
                    />
                  </Box>
                  <Box padding="app.base" alignSelf="flex-start">
                    <Flex
                      color="app.black"
                      gap={5}
                      width="inherit"
                    >
                      <Text textStyle="universal.h3">{index + 1 + "."}</Text>
                      <Flex flexDirection="column" gap={2}>
                        <Text
                          textStyle="universal.h3"
                          width="100%"
                          textAlign="left"
                        >
                          {card.title}
                        </Text>
                        <Text
                          textStyle="universal.description"
                          color="app.black"
                        >
                          {card.description}
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Container>
            ))}
          </Slider>
        </Flex>
      </VStack>
    </Section>
  );
}
