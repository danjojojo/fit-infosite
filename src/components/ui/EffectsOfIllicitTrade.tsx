"use client";

import Image from "next/image";
import {
  Box,
  Text,
  VStack,
  Container,
  Flex,
  Button,
} from "@chakra-ui/react";
import Section from "@/components/ui/Section";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Headline from "@/components/ui/Headline";
import ContentContainer from "@/components/layout/ContentContainer";

import PoliceTape from "@/components/ui/PoliceTape";

export default function EffectsOfIllicitTrade() {
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

  const consequences = [
    {
      title: "Php 500,000 multa",
      description:
        "Mga tindahang nagbebenta ng yosi na mas mababa sa retail price",
    },
    {
      title: "Php 2 Million at 5 Yrs Na PagKulong",
      description:
        "Multa at parusa para sa mga distributor na walang health warnings",
    },
    {
      title: "Php 1 Million at 8 Yrs Na PagKulong",
      description: "Multa at parusa para sa mga nameke ng Tax Stamp",
    },
  ];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const originalText = "Bakit Dapat May Peke-alam Ka?";
  const highlightedText = ["Bakit", "Dapat", "May", "Peke-alam"];

  return (
    <Section
      id="epekto-ng-illicit-trade"
      width="inherit"
      position="relative"
      height="auto"
      overflow="hidden"
    >
      <VStack backgroundColor="app.red" width="inherit">
        <ContentContainer>
          <Box paddingTop="64px" maxWidth="app.base">
            <Headline
              originalText={originalText}
              highlightedText={highlightedText}
              textStyle="universal.h1_xl"
              highlightedTextBgColor="app.black"
              ogTextColor="app.white"
            />
          </Box>
        </ContentContainer>

        {/* SLIDER */}

        <Box
          display="flex"
          flexDir="column"
          width="app.base"
          paddingBottom="app.base"
          border="1px solid white"
        >
          <Slider {...settings}>
            {cardArticles.map((card, index) => (
              <Container key={index} height="100%" padding="app.base">
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
                    <Flex color="app.black" rowGap={5} width="inherit">
                      <Text textStyle="universal.h3">{index + 1 + "."}</Text>
                      <Flex
                        flexDirection="column"
                        columnGap={2}
                        wordBreak="break-word"
                      >
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
        </Box>

        {/* SLIDER */}

        <ContentContainer marginBottom="64px">
          <Button
            width="100%"
            textStyle="universal.h6"
            padding="10%"
            backgroundColor="app.black"
          >
            ALAMIN ANG IBA PANG DETALYE
          </Button>
        </ContentContainer>

        <PoliceTape
          rotation={4.8}
          tapeText={"FIGHT ILLICIT TRADE"}
          startsFrom="left"
        />
        <PoliceTape
          rotation={-4.19}
          tapeText={"FIGHT ILLICIT TRADE"}
          startsFrom="right"
        />

        <ContentContainer>
          <Flex
            maxWidth="app.base"
            width="100%"
            flexDir="column"
            textAlign="center"
            position="relative"
            columnGap="120px"
            style={{
              hyphens: "manual",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            <Text
              textStyle="universal.h1_2xl"
              color="app.white"
              position="relative"
              zIndex={2}
            >
              Delikado ang
            </Text>
            <Box
              width={215}
              height={182}
              // overflowY="hidden"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              filter="grayscale(100%)"
              zIndex={1}
            >
              <Image
                src="/assets/arrested-hands.png"
                alt="Arrested Hands"
                fill
                style={{
                  objectFit: "cover",
                  filter:
                    "drop-shadow(4px 4px 0 black) drop-shadow(-4px -4px 0 black)",
                }}
              />
            </Box>
            <Text
              textStyle="universal.h1_2xl"
              color="app.white"
              position="relative"
              zIndex={2}
            >
              MAGPA-BUDOL
            </Text>
          </Flex>
        </ContentContainer>

        <ContentContainer>
          <Text textStyle="universal.fb_cond_description" textAlign="center">
            Multa at kulong ang kahihinatnan mo kung ikaw ay nahuling nagbebenta
            o namamahagi ng peke o ilegal na sigarilyo
          </Text>
        </ContentContainer>

        <ContentContainer>
          {consequences.map((consequence, index) => (
            <Box
              borderTop="1px solid white"
              paddingTop="app.base"
              paddingBottom="40px"
              key={index}
            >
              <Flex flexDir="column" alignItems="center">
                <Text textStyle="universal.title" textAlign="center">
                  {consequence.title}
                </Text>
                <Text textStyle="universal.description" textAlign="center">
                  {consequence.description}
                </Text>
              </Flex>
            </Box>
          ))}
          <Button
            width="100%"
            textStyle="universal.h6"
            padding="10%"
            backgroundColor="app.black"
          >
            BASAHIN LAHAT
          </Button>
        </ContentContainer>

        
      </VStack>
    </Section>
  );
}
