"use client";

// UI
import Image from "next/image";
import { Box, VStack } from "@chakra-ui/react";
import Section from "@/components/layout/Section";

// Components
import Report from "@/components/ui/Report";
import Headline from "@/components/ui/Headline";
import TopBrands from "@/components/ui/TopBrands";
import ContentContainer from "@/components/layout/ContentContainer";
import ContentDescription from "@/components/layout/ContentDescription";
import FITIllegalCigarettes from "./FITIllegalCigarettes";

// Schema
import type { ICigarettesDataSchema } from "@/schemas/IllicitCigarettesSchema";

export default function FITIllicitCigarettes({
  illicitCigsData,
  illegalCigsData,
}: ICigarettesDataSchema) {
  const {
    headlineDescription,
    originalText,
    highlightedText,
    topFakeBrands,
    topIllicitWhites,
  } = illicitCigsData;

  return (
    <Section
      id="klase-ng-ilegal-na-yosi"
      width="inherit"
      position="relative"
      height="auto"
      overflow="hidden"
    >
      <VStack background="app.white">
        <ContentContainer>
          <Image
            src="/assets/fit-fake.webp"
            alt="Fake Cigarettes"
            width={390}
            height={390}
          />
          <Box marginTop="24px" overflow="hidden" maxWidth="app.base">
            <Headline
              originalText={originalText}
              textStyle="universal.h2"
              highlightedText={highlightedText}
            />

            <ContentDescription description={headlineDescription} />

            <Report />

            <TopBrands topBrand={topFakeBrands} />
            <TopBrands topBrand={topIllicitWhites} />
          </Box>
        </ContentContainer>
      </VStack>
      <FITIllegalCigarettes illegalCigsData={illegalCigsData} />
    </Section>
  );
}
