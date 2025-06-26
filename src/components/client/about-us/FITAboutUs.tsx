"use client";

// UI
import { Text, Box, Flex, VStack } from "@chakra-ui/react";
import Image from "next/image";

// Components
import Section from "@/components/layout/Section";
import FITButton from "@/components/ui/FITButton";
import ContentContainer from "@/components/layout/ContentContainer";
import LoopCompanies from "@/components/ui/LoopCompanies";

// Schema
import type { AboutUsDataSchema } from "@/schemas/AboutUsSchema";

export default function FITAboutUs({ data }: AboutUsDataSchema) {
  const { headlineText, aboutUsTextFIT, aboutUsTextPTI, tobaccoCompanies } =
    data;

  return (
    <Section id="about-us">
      <VStack backgroundColor="app.red" color="app.white">
        <ContentContainer marginTop="48px">
          <Flex flexDir="column" rowGap="app.base">
            <Text textStyle="universal.description">About Us</Text>
            <Text textStyle="universal.h1">{headlineText}</Text>
          </Flex>
        </ContentContainer>
        <ContentContainer>
          <Flex flexDir="column" rowGap="app.base">
            <Image
              src="/assets/fit.webp"
              alt="FIT Logo"
              height={132}
              width={132}
            />
            <Text textStyle="universal.description">{aboutUsTextFIT}</Text>
          </Flex>
        </ContentContainer>
        <ContentContainer>
          <Box
            width="100%"
            height="240px"
            position="relative"
          >
            <Image
              src="/assets/about-us.png"
              alt="About us"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </ContentContainer>
        <ContentContainer>
          <Flex flexDir="column" rowGap="app.base">
            <Image
              src="/assets/pti.png"
              alt="PTI Logo"
              height={132}
              width={132}
            />
            <Text textStyle="universal.description">{aboutUsTextPTI}</Text>
          </Flex>
        </ContentContainer>

        <Box width="fit-content" overflow="hidden" position="relative">
          <LoopCompanies tobaccoCompanies={tobaccoCompanies} />
        </Box>

        <ContentContainer>
          <Flex rowGap="app.base" flexDir="column">
            <FITButton
              text="Contact Us"
              bgColor="app.white"
              color="app.black"
            />
            <FITButton
              text="Join the Conversation"
              bgColor="app.black"
              color="app.white"
            />
          </Flex>
        </ContentContainer>
      </VStack>
    </Section>
  );
}
