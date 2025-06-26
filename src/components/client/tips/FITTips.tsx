"use client";

// UI
import { Text, VStack, Box, Flex, Bleed } from "@chakra-ui/react";
import Image from "next/image";
import Section from "@/components/layout/Section";

// Components
import Headline from "@/components/ui/Headline";

// Schema
import type { TipsDataSchema } from "@/schemas/TipsSchema";

export default function FITTips({ data }: TipsDataSchema) {
  const { originalText, highlightedText, tipCards } = data;

  return (
    <Section id="tips">
      <Flex
        margin="48px 0"
        flexDir={{ base: "column", lg: "row" }}
        rowGap="app.base"
      >
        <Flex
          position="relative"
          width={{ base: "100vw", lg: "fit-content" }}
          justifyContent="center"
          alignItems="center"
        >
          <Bleed
            marginLeft="-24px"
            filter="grayscale(100%)"
            rotate="9.5deg"
            height="213px"
            width="141px"
          >
            <Image
              src="/assets/tips-finger.png"
              fill
              alt="Finger"
              style={{ objectFit: "cover" }}
            />
          </Bleed>
          <Box width="360px">
            <Headline
              originalText={originalText}
              highlightedText={highlightedText}
              textStyle="universal.h1_s"
              ogTextColor="app.white"
            />
          </Box>
        </Flex>
        <Flex
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          columnGap="16px"
          rowGap="16px"
          justifyContent={{ base: "center", lg: "flex-start" }}
          overflowX="auto"
          minHeight={{ base: "100%", lg: "35vw" }}
          scrollbar="hidden"
        >
          {tipCards.map((tipCard, index) => (
            <VStack
              backgroundColor="app.gray"
              padding="12px"
              paddingBottom="20px"
              key={index}
              width="343px"
              height="fit-content"
              mt={{ base: "0", lg: (index + 1) % 2 === 0 ? "auto" : "0" }}
            >
              <Box width="319px" margin="0 auto">
                <Box width="100%" height="227px" position="relative">
                  <Image
                    src={tipCard.image}
                    alt="Tip"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Text
                  textStyle="universal.h3"
                  paddingTop="app.base"
                  alignSelf="start"
                >
                  {tipCard.title}
                </Text>
                <Text
                  textStyle="universal.description"
                  textAlign="left"
                  width="100%"
                >
                  {tipCard.description}
                </Text>
              </Box>
            </VStack>
          ))}
        </Flex>
      </Flex>
    </Section>
  );
}
