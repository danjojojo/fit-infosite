"use client";

import Image from "next/image";
import { Box, VStack } from "@chakra-ui/react";
import Section from "@/components/ui/Section";

import Report from "@/components/ui/Report";

import IllegalCigarettes from "@/app/(home)/IllegalCigarettes";

import Headline from "@/components/ui/Headline";
import TopBrands from "@/components/ui/TopBrands";

import ContentContainer from "@/components/layout/ContentContainer";
import ContentDescription from "@/components/layout/ContentDescription";

export default function IllicitCigarettes() {
  const headlineDescription =
    "Lalong lumaganap ang ilegal na sigarilyo—mas madali nang mabili, mas marami pang brand ang nagsusulputan.";

  const originalText = "Talamak Na Ang Mga Illicit Cigarettes!";
  const highlightText = ["Talamak", "Na"];

  const topFakeBrands = {
    overline: "Ang mga top brand na pinepeke",
    description:
      "Pagdating sa pineke na brand, MIGHTY ang nangunguna, habang MARLBORO humahabol na rin sa 0.6%.",
    brands: [
      {
        id: "1",
        name: "MARLBORO",
        image: "",
      },
      {
        id: "2",
        name: "MIGHTY",
        image: "",
      },
    ],
  };

  const topIllicitWhites = {
    overline: "Ang mga top brand na 'illicit whites'",
    description:
      "Sa mga tinatawag na 'illicit whites,' ASTRO (0.6%) at FORT (0.5%) ay mabilis ang paglago—halos kapantay na ng Marlboro.",
    brands: [
      {
        id: "1",
        name: "ASTRO",
        image: "/assets/astro.webp",
      },
      {
        id: "2",
        name: "FORT",
        image: "/assets/fort.webp",
      },
    ],
  };

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
              highlightedText={highlightText}
            />

            <ContentDescription description={headlineDescription} />

            <Report />

            <TopBrands topBrand={topFakeBrands} />
            <TopBrands topBrand={topIllicitWhites} />
            
          </Box>
        </ContentContainer>
      </VStack>
      <IllegalCigarettes />
    </Section>
  );
}
