"use client";

import Image from "next/image";
import {
  Box,
  Text,
  VStack,
  Bleed,
} from "@chakra-ui/react";
import Section from "@/components/ui/Section";

export default function IllicitTobaccoTrade() {
  const highlightedText = ["Illicit", "Tobacco", "Trade"];

  const description = 
  `Ang ilegal na kalakalan ng sigarilyo ay tumutukoy sa paggawa, pagbenta, o pamamahagi ng sigarilyong di dumaan sa buwis, batas, o health standards. Kasama rito ang smuggled goods, pekeng brand, at mga lehitimong sigarilyong binebenta nang walang tax stamp. 
  
  Dahil sa mataas na buwis at agwat ng presyo sa iba’t ibang lugar, lumalaganap ito—pinapahina ang mga batas sa tobacco control, binabawasan ang kita ng gobyerno, at madalas, pinopondohan pa ang krimen.`;

  return (
    <Section
      id="ano-ang-illicit-tobacco-trade"
      width={"inherit"}
      position={"relative"}
      overflow={"hidden"}
    >
      <VStack background="app.dirtywhite">
        <Bleed position={"absolute"} minWidth={453} scale={1.1} zIndex={2}>
          <Image
            src={"/assets/blood-spill-two.png"}
            alt="Blood Spill"
            width={453}
            height={268}
          />
        </Bleed>
        <Box position="relative" zIndex={3} maxWidth={"app.base"}>
          <Text
            color={"app.black"}
            textStyle={"universal.h1"}
            maxWidth={253}
            marginTop={"30%"}
            marginLeft={"30%"}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Text as="span" margin={0}>
              ano ba ang{" "}
            </Text>
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
          <Text
            color={"app.black"}
            textStyle={"universal.description"}
            padding={"app.base"}
            marginTop={"app.base"}
            whiteSpace={"pre-line"}
          >
            {description}
          </Text>
        </Box>
      </VStack>
    </Section>
  );
}
