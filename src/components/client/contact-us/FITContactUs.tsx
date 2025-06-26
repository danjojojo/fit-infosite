"use client";

// UI
import { Text, Box, Flex, VStack, Icon, Link } from "@chakra-ui/react";
import Image from "next/image";

// Components
import Section from "@/components/layout/Section";
import Headline from "@/components/ui/Headline";
import PoliceTape from "@/components/ui/PoliceTape";
import FITButton from "@/components/ui/FITButton";

// Util
import { generalIcon } from "@/ui/icons";

// Schema
import type { ContactUsDataSchema } from "@/schemas/ContactUsSchema";

export default function FITContactUs({ data }: ContactUsDataSchema) {
  const { originalText, highlightedText, contactDetails, socialMediaLinks } =
    data;

  return (
    <Section id="contact-us">
      <VStack backgroundColor="app.black">
        <Box paddingTop="48px">
          <PoliceTape
            tapeText="IREPORT MO!"
            rotation={4.81}
            startsFrom="left"
            tapeColor="app.red"
          />
          <PoliceTape
            tapeText="IREPORT MO!"
            rotation={-4.19}
            startsFrom="right"
            tapeColor="app.red"
          />
        </Box>

        <Flex
          flexDir={{ base: "column", lg: "row" }}
          rowGap="app.base"
          position="relative"
          paddingY="app.base"
        >
          <Box position="relative" height="auto" width="app.base">
            <Box paddingTop="45%" position="relative" zIndex={3}>
              <Headline
                originalText={originalText}
                highlightedText={highlightedText}
                textStyle="universal.h1_s"
                ogTextColor="app.white"
                justifyContent="center"
              />
            </Box>
            <Flex
              justifyContent="center"
              width="100%"
              filter="grayscale(100%)"
              position="absolute"
              top="0"
              zIndex={2}
            >
              <Image
                src="/assets/finger-point.png"
                alt="Report"
                width={260}
                height={260}
              />
            </Flex>
          </Box>

          <Flex flexDir="column" rowGap="app.base" paddingTop={{ lg: "10%" }}>
            <Box backgroundColor="app.white" padding="app.base">
              <VStack rowGap="16px">
                <Text textStyle="universal.description" color="app.black">
                  Ireport at ipag-alam samin direkta:
                </Text>
                {contactDetails.map((contact) => (
                  <Flex
                    columnGap="11px"
                    rowGap="16px"
                    alignItems="center"
                    key={contact.name}
                  >
                    <Icon color="app.red" w="16px" h="16px">
                      {generalIcon(contact.icon)}
                    </Icon>
                    <Text textStyle="universal.description" color="app.red">
                      {contact.link}
                    </Text>
                  </Flex>
                ))}
                <Flex
                  justifyContent="space-evenly"
                  width="100%"
                  paddingLeft="32px"
                  paddingRight="32px"
                >
                  {socialMediaLinks.map((socialMedia) => (
                    <Link key={socialMedia.name} href={socialMedia.link}>
                      <Icon color="app.red" w="24px" h="24px">
                        {generalIcon(socialMedia.icon)}
                      </Icon>
                    </Link>
                  ))}
                </Flex>
              </VStack>
            </Box>

            <FITButton
              text="Send us a message"
              bgColor="app.red"
              color="app.white"
            />
          </Flex>
        </Flex>
      </VStack>
    </Section>
  );
}
