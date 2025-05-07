"use client";

import Image from "next/image";
import { Box, Text, VStack, Container, Flex, Icon } from "@chakra-ui/react";
import { generalIcon } from "@/ui/icons";

import Vector4 from "@/ui/img/iny-vector-4.svg";

import Headline from "@/components/ui/Headline";
import ContentContainer from "@/components/layout/ContentContainer";

export default function IlegalNaYosiTwo() {
  const mgaPalantandaan = [
    "Different Quality = smells/smokes different from the original brand",
    "No PH Tax Stamp",
  ];

  const originalText = "Ano ano ba ang mga Illegal Na Sigarilyo?";
  const highlightedTextt = ["Illegal", "Na", "Sigarilyo?"];

  return (
    <VStack
      background="app.darkgray"
      width="inherit"
      // border={"1px solid red"}
    >
      <ContentContainer>
        <Box paddingTop={"64px"} maxWidth={"app.base"}>
          <Headline
            originalText={originalText}
            textStyle="universal.h1_xl"
            highlightedText={highlightedTextt}
            ogTextColor="app.white"
          />
        </Box>
      </ContentContainer>
      <ContentContainer>
        <VStack
          gap={"24px"}
          // border={"1px solid green"}
        >
          <Box backgroundColor="app.gray" height={"fit-content"} width={"100%"}>
            <Container padding="app.base">
              <Flex
                // border={"1px solid white"}
                flexDirection={"column"}
                alignContent={"center"}
                alignItems={"center"}
                padding={"app.base"}
                position={"relative"}
              >
                <Flex
                  position={"relative"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Box scale={1.05}>
                    <Image src={Vector4} alt="Vector 4" />
                  </Box>
                  <Box position={"absolute"} top={0}>
                    <Image
                      src={"/assets/iny-4.png"}
                      alt="Tax Under Paid"
                      width={390}
                      height={316}
                      style={{
                        height: "100%",
                        WebkitMaskImage: `url(${Vector4.src})`,
                        maskRepeat: "no-repeat",
                        maskSize: "100%",
                      }}
                    />
                  </Box>
                </Flex>
                <Box
                  backgroundColor={"app.white"}
                  width={"100%"}
                  padding={"16px 24px"}
                  rotate={"-5.13deg"}
                  position={"absolute"}
                  bottom={0}
                >
                  <Text
                    textStyle={"universal.h3"}
                    textAlign={"center"}
                    color="app.black"
                  >
                    4. Tax Under Paid
                  </Text>
                </Box>
              </Flex>
            </Container>
            <Flex padding="app.base" gap={"16px"} flexDirection={"column"}>
              <Text textStyle={"universal.description"}>
                Genuine products licensed for sale in the PH but company
                producing them may not be fully paying their share of the “sin
                tax” for selling their product to you.{" "}
              </Text>
              <Text textStyle={"universal.description"}>Mga palatandaan:</Text>
              <Flex gap={"8px"} flexDirection={"column"}>
                {mgaPalantandaan.map((palatandaan, index) => (
                  <Flex key={index} gap={"8px"} alignItems={"center"}>
                    <Icon width="16px" height="16px" color={"app.lightred"}>
                      {generalIcon("warning")}
                    </Icon>
                    <Text textStyle={"universal.description"}>
                      {palatandaan}
                    </Text>
                  </Flex>
                ))}
              </Flex>
              <Flex gap={"5px"} alignItems="center">
                <Text textStyle={"universal.h6"}>Iba pang detalye</Text>
                <Icon width={"16px"} height={"16px"}>
                  {generalIcon("arrow_right")}
                </Icon>
              </Flex>
            </Flex>
          </Box>
        </VStack>
      </ContentContainer>
    </VStack>
  );
}
