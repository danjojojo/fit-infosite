"use client";

import Image from "next/image";
import { Box, Text, VStack } from "@chakra-ui/react";
import Section from "@/components/ui/Section";

import Report from "@/components/ui/Report";

import IlegalNaYosiTwo from "@/components/ui/IlegalNaYosiTwo";

import Headline from "@/components/ui/Headline";

import ContentContainer from "@/components/layout/ContentContainer";
import ContentDescription from "@/components/layout/ContentDescription";

export default function IlegalNaYosi() {
  const headlineDescription =
    "Lalong lumaganap ang ilegal na sigarilyo—mas madali nang mabili, mas marami pang brand ang nagsusulputan.";

  const originalText = "Talamak Na Ang Mga Illicit Cigarettes!";
  const highlightText = ["Talamak", "Na"];

  return (
    <Section
      id="klase-ng-ilegal-na-yosi"
      width={"inherit"}
      position={"relative"}
      height={"auto"}
      overflow={"hidden"}
    >
      <VStack background="app.white">
        <ContentContainer>
          <Image
            src={"/assets/fit-fake.webp"}
            alt="Fake Cigarettes"
            width={390}
            height={390}
          />
          <Box marginTop={"24px"} overflow={"hidden"} maxWidth={"app.base"}>
            <Headline
              originalText={originalText}
              textStyle="universal.h2"
              highlightedText={highlightText}
            />

            <ContentDescription description={headlineDescription} />

            <Report />

            <VStack paddingTop={"24px"}>
              <Text textStyle={"universal.overline1"} color={"app.red"}>
                Ang mga top brand na pinepeke
              </Text>
              <Text
                textStyle={"universal.overline_description"}
                color={"app.black"}
                textAlign={"center"}
              >
                Pagdating sa pineke na brand, MIGHTY ang nangunguna, habang
                MARLBORO humahabol na rin sa 0.6%.
              </Text>

              <Box
                display={"flex"}
                justifyContent={"space-evenly"}
                width={"100%"}
                marginTop={"24px"}
              >
                <Text textStyle={"universal.h3"} color={"app.black"}>
                  MARLBORO
                </Text>
                <Text textStyle={"universal.h3"} color={"app.black"}>
                  MIGHTY
                </Text>
              </Box>
            </VStack>

            <VStack paddingTop={"24px"}>
              <Text textStyle={"universal.overline1"} color={"app.red"}>
                Ang mga top brand na &quot;illicit whites&quot;
              </Text>
              <Text
                textStyle={"universal.overline_description"}
                color={"app.black"}
                textAlign={"center"}
              >
                Sa mga tinatawag na &quot;illicit whites,&quot; ASTRO (0.6%) at
                FORT (0.5%) ay mabilis ang paglago—halos kapantay na ng
                Marlboro.
              </Text>

              <Box
                display={"flex"}
                justifyContent={"space-evenly"}
                // padding={"0px 32px"}
                width={"100%"}
                marginTop={"24px"}
              >
                <Box position="relative">
                  <Image
                    src={"/assets/astro.webp"}
                    alt="Astro"
                    width={139}
                    height={181}
                  />
                  <Text
                    textStyle={"universal.h2"}
                    color={"app.white"}
                    position={"absolute"}
                    bottom={"0"}
                    width={"100%"}
                    textAlign={"center"}
                  >
                    ASTRO
                  </Text>
                </Box>

                <Box position="relative">
                  <Image
                    src={"/assets/fort.webp"}
                    alt="Fort"
                    width={139}
                    height={181}
                  />
                  <Text
                    textStyle={"universal.h2"}
                    color={"app.white"}
                    position={"absolute"}
                    bottom={"0"}
                    width={"100%"}
                    textAlign={"center"}
                  >
                    FORT
                  </Text>
                </Box>
              </Box>
            </VStack>
          </Box>
        </ContentContainer>
      </VStack>
      <IlegalNaYosiTwo />
    </Section>
  );
}
