"use client";

// UI
import Image from "next/image";
import { Box, VStack, Bleed } from "@chakra-ui/react";
import Section from "@/components/layout/Section";
import ContentContainer from "@/components/layout/ContentContainer";
import ContentDescription from "@/components/layout/ContentDescription";
import Headline from "@/components/ui/Headline";

// Schema
import type { IllicitTobaccoTradeDataSchema } from "@/schemas/IllicitTobaccoTradeSchema";

export default function FITIllicitTobaccoTrade({
  data,
}: IllicitTobaccoTradeDataSchema) {
  const { originalText, highlightedText, description } = data;

  return (
    <Section id="ano-ang-illicit-tobacco-trade">
      <VStack background="app.dirtywhite">
        <Bleed position="absolute" minWidth={453} scale={1.1} zIndex={2}>
          <Image
            src="/assets/blood-spill-two.png"
            alt="Blood Spill"
            width={453}
            height={268}
            style={{ width: "auto" }}
          />
        </Bleed>
        <ContentContainer>
          <Box position="relative" zIndex={3}>
            <Headline
              originalText={originalText}
              highlightedText={highlightedText}
              maxWidth={260}
              marginTop="30%"
              marginLeft="30%"
              textStyle="universal.h1"
            />
            <ContentDescription description={description} />
          </Box>
        </ContentContainer>
      </VStack>
    </Section>
  );
}
