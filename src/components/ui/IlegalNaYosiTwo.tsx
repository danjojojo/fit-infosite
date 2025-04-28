import Image from "next/image";
import { Box, Text, VStack, Container } from "@chakra-ui/react";

import Section from "@/components/ui/Section";

export default function IlegalNaYosiTwo() {
  const highlightedText = ["Illegal Na", "Sigarilyo?"];

  return (
    <VStack padding={"app.base"} background="app.darkgray">
      <Box paddingTop={"64px"}>
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
    </VStack>
  );
}
