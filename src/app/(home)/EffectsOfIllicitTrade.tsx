"use client";

import Image from "next/image";
import { Box, Text, VStack, Flex } from "@chakra-ui/react";

import Section from "@/components/ui/Section";
import Headline from "@/components/ui/Headline";
import FITButton from "@/components/ui/FITButton";
import PoliceTape from "@/components/ui/PoliceTape";
import EffectsCardSlider from "@/components/ui/EffectsCardSlider";

import ContentContainer from "@/components/layout/ContentContainer";

export default function EffectsOfIllicitTrade() {
  const cardArticles = [
    {
      id: "1",
      imageSrc: "/assets/effect-1.jpg",
      imageAlt: "Effect 1",
      title: "Lugi ang taumbayan",
      description:
        "Illicit trade is detrimental to the interest and welfare of the Filipinos as they get less for their money with cheap but fake, unsafe, or substandard products.",
    },
    {
      id: "2",
      imageSrc: "/assets/effect-2.jpg",
      imageAlt: "Effect 2",
      title: "Di purkit nakamura, tama ka",
      description:
        "Government should ensure a level playing field where all legitimate, tax paying industries can compete for their fair share of the free market economy.",
    },
    {
      id: "3",
      imageSrc: "/assets/effect-2.jpg",
      imageAlt: "Effect 3",
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

  const originalText = "Bakit Dapat May Peke-alam Ka?";
  const highlightedText = ["Bakit", "Dapat", "May", "Peke-alam"];

  return (
    <Section id="epekto-ng-illicit-trade" height="auto">
      <VStack backgroundColor="app.red" width="inherit">
        <ContentContainer>
          <Box paddingTop="64px" width="285px">
            <Headline
              originalText={originalText}
              highlightedText={highlightedText}
              textStyle="universal.h1_xl"
              highlightedTextBgColor="app.black"
              ogTextColor="app.white"
            />
          </Box>
        </ContentContainer>

        <EffectsCardSlider cardArticles={cardArticles} />

        <ContentContainer marginBottom="64px">
          <FITButton text="ALAMIN ANG IBA PANG DETALYE" />
        </ContentContainer>

        <PoliceTape
          rotation={4.8}
          tapeText="FIGHT ILLICIT TRADE"
          startsFrom="left"
        />
        <PoliceTape
          rotation={-4.19}
          tapeText="FIGHT ILLICIT TRADE"
          startsFrom="right"
        />

        <ContentContainer>
          <Flex
            maxWidth="app.base"
            width="100%"
            flexDir="column"
            textAlign="center"
            position="relative"
            rowGap="120px"
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
          <Text
            textStyle="universal.description"
            textAlign="center"
            color="app.white"
          >
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
              color="app.white"
            >
              <Flex flexDir="column" alignItems="center" rowGap="8px">
                <Text textStyle="universal.title" textAlign="center">
                  {consequence.title}
                </Text>
                <Text textStyle="universal.description" textAlign="center">
                  {consequence.description}
                </Text>
              </Flex>
            </Box>
          ))}
          <FITButton
            text="Basahin lahat"
            bgColor="app.black"
            color="app.white"
          />
        </ContentContainer>
      </VStack>
    </Section>
  );
}
