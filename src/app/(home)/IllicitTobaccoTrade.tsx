"use client";

import Image from "next/image";
import { Box, VStack, Bleed } from "@chakra-ui/react";
import Section from "@/components/ui/Section";

import ContentContainer from "@/components/layout/ContentContainer";
import ContentDescription from "@/components/layout/ContentDescription";

import Headline from "@/components/ui/Headline";

export default function IllicitTobaccoTrade() {
  // HEADLINE

  const originalText = "Ano ba Ang Illicit Tobacco Trade?";
  const highlightedText = ["Illicit", "Tobacco", "Trade?"];

  const description = `Ang ilegal na kalakalan ng sigarilyo ay tumutukoy sa paggawa, pagbenta, o pamamahagi ng sigarilyong di dumaan sa buwis, batas, o health standards. Kasama rito ang smuggled goods, pekeng brand, at mga lehitimong sigarilyong binebenta nang walang tax stamp. 
  
  Dahil sa mataas na buwis at agwat ng presyo sa iba’t ibang lugar, lumalaganap ito—pinapahina ang mga batas sa tobacco control, binabawasan ang kita ng gobyerno, at madalas, pinopondohan pa ang krimen.`;

  return (
    <Section
      id="ano-ang-illicit-tobacco-trade"
    >
      <VStack background="app.dirtywhite">
        <Bleed position="absolute" minWidth={453} scale={1.1} zIndex={2}>
          <Image
            src="/assets/blood-spill-two.png"
            alt="Blood Spill"
            width={453}
            height={268}
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
