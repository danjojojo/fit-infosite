"use client";

import Image from "next/image";
import { Box, Text, VStack, Container, Flex, Icon } from "@chakra-ui/react";
import { generalIcon } from "@/ui/icons";

import Vector4 from "@/ui/img/iny-vector-4.svg";

export default function IlegalNaYosiTwo() {
  const highlightedText = ["Illegal Na", "Sigarilyo?"];

  const mgaPalantandaan = [
    "Different Quality = smells/smokes different from the original brand",
    "No PH Tax Stamp",
  ];

  return (
    <VStack
      padding={"app.base"}
      background="app.darkgray"
      width="inherit"
      // border={"1px solid red"}
    >
      <Box paddingTop={"64px"} maxWidth={"app.base"}>
        <Text
          color={"app.white"}
          textStyle={"universal.h1_xl"}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
        >
          ANO ANO BA ANG MGA{" "}
          {highlightedText.map((text, index) => (
            <Text
              as="mark"
              color={"app.white"}
              backgroundColor={"app.red"}
              padding={"5px 10px 0px"}
              key={index}
              width={"fit-content"}
              height={"textStyle.universal.title.fontSize"}
            >
              {" "}
              {text}
            </Text>
          ))}
        </Text>
      </Box>
      <VStack
        width="app.base"
        padding="inherit"
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
                //   border={"1px solid violet"}
                justifyContent={"center"}
                //   alignItems={"center"}
                flexDirection={"column"}
                //   overflow={"hidden"}
              >
                <Box scale={1.05}>
                  <Image src={Vector4} alt="Vector 4" />
                </Box>
                <Box
                  position={"absolute"}
                  top={0}
                  // border={"1px solid brown"}
                >
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
              Genuine products licensed for sale in the PH but company producing
              them may not be fully paying their share of the “sin tax” for
              selling their product to you.{" "}
            </Text>
            <Text textStyle={"universal.description"}>Mga palatandaan:</Text>
            <Flex gap={"8px"} flexDirection={"column"}>
              {mgaPalantandaan.map((palatandaan, index) => (
                <Flex key={index} gap={"8px"} alignItems={"center"}>
                  <Icon width="16px" height="16px" color={"app.lightred"}>
                    {generalIcon("warning")}
                  </Icon>
                  <Text textStyle={"universal.description"}>{palatandaan}</Text>
                </Flex>
              ))}
            </Flex>
            <Flex gap={"5px"} alignItems="center">
              <Text textStyle={"universal.h5"}>Iba pang detalye</Text>
              <Icon width={"16px"} height={"16px"}>
                {generalIcon("arrow_right")}
              </Icon>
            </Flex>
          </Flex>
        </Box>  
      </VStack>
    </VStack>
  );
}
