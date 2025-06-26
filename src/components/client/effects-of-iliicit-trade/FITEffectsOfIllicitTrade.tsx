"use client";

import Image from "next/image";
import { Box, Text, VStack, Flex } from "@chakra-ui/react";

import Section from "@/components/layout/Section";
import Headline from "@/components/ui/Headline";
import FITButton from "@/components/ui/FITButton";
import PoliceTape from "@/components/ui/PoliceTape";
import EffectsCardSlider from "@/components/ui/EffectsCardSlider";

import ContentContainer from "@/components/layout/ContentContainer";

import type { EffectsOfIllicitTradeDataSchema } from "@/schemas/EffectsOfIllicitTradeSchema";

export default function FITEffectsOfIllicitTrade({
  data,
}: EffectsOfIllicitTradeDataSchema) {
  const {
    originalText,
    highlightedText,
    cardArticles,
    consequences,
    warningText,
    warningDescription,
  } = data;

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
              {warningText[0]}
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
              {warningText[1]}
            </Text>
          </Flex>
        </ContentContainer>

        <ContentContainer>
          <Text
            textStyle="universal.description"
            textAlign="center"
            color="app.white"
          >
            {warningDescription}
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
