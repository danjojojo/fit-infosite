"use client";

import { Text, Box, Flex, VStack, Icon, Link } from "@chakra-ui/react";
import Image from "next/image";
import Section from "@/components/ui/Section";

import Headline from "@/components/ui/Headline";
import PoliceTape from "@/components/ui/PoliceTape";
import FITButton from "@/components/ui/FITButton";

import ContentContainer from "@/components/layout/ContentContainer";
import { generalIcon } from "@/ui/icons";

export default function ContactUs() {
  const originalText = "Ireport mo! Puksain natin ang ilegal na yosi!";
  const highlightedText = ["Ireport", "mo!"];

  const contactDetails = [
    {
      name: "Email",
      icon: generalIcon("email"),
      text: "fightit@gmail.com",
    },
    {
      name: "Contact Number",
      icon: generalIcon("phone"),
      text: "09173444848",
    },
  ];

  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: generalIcon("facebook"),
      link: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      icon: generalIcon("instagram"),
      link: "https://www.instagram.com",
    },
    {
      name: "Twitter",
      icon: generalIcon("twitter"),
      link: "https://twitter.com",
    },
  ];

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

        <ContentContainer>
          <Flex flexDir="column" rowGap="app.base" position="relative">
            <Box position="relative" height="100%">
              <Box width="fit-content" margin="0 auto" filter="grayscale(100%)">
                <Image
                  src="/assets/finger-point.png"
                  alt="Report"
                  width={260}
                  height={260}
                />
              </Box>
              <Box position="absolute" top="80%">
                <Headline
                  originalText={originalText}
                  highlightedText={highlightedText}
                  textStyle="universal.h1_s"
                  ogTextColor="app.white"
                  justifyContent="center"
                />
              </Box>
            </Box>

            <Flex flexDir="column" rowGap="app.base" paddingTop="60%">
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
                        {contact.icon}
                      </Icon>
                      <Text textStyle="universal.description" color="app.red">
                        {contact.text}
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
                          {socialMedia.icon}
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
        </ContentContainer>
      </VStack>
    </Section>
  );
}
