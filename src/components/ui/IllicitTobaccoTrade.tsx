"use client";

import Image from "next/image";
import {
  Stack,
  Box,
  Text,
  Icon,
  Button,
  Container,
  VStack,
  Bleed,
  Float,
} from "@chakra-ui/react";
import Section from "@/components/ui/Section";
import { generalIcon } from "@/ui/icons";

// import BloodSpill from "@/ui/img/blood-spill-two.svg";
// import BloodSpill from "@/ui/img/blood-spill-two.svg";

export default function IllicitTobaccoTrade() {
  const title = "Ano ba ang Illicit Tobacco Trade?";
  const description = 
  `Ang ilegal na kalakalan ng sigarilyo ay tumutukoy sa paggawa, pagbenta, o pamamahagi ng sigarilyong di dumaan sa buwis, batas, o health standards. Kasama rito ang smuggled goods, pekeng brand, at mga lehitimong sigarilyong binebenta nang walang tax stamp. 
  
  Dahil sa mataas na buwis at agwat ng presyo sa iba’t ibang lugar, lumalaganap ito—pinapahina ang mga batas sa tobacco control, binabawasan ang kita ng gobyerno, at madalas, pinopondohan pa ang krimen.`;

  return (
    <Section
      id="ano-ang-illicit-tobacco-trade"
      width={"inherit"}
      position={"relative"}
      height={"auto"}
      overflow={"hidden"}
    >
      <VStack background="app.white">
        <Bleed
          position={"absolute"}
          minWidth={453}
          scale={1.2}
          zIndex={2}
          // border={"1px solid blue"}
          // backgroundColor={"app.white"}
        >
          <Image
            src={"/assets/blood-spill-two.png"}
            alt="Blood Spill"
            width={453}
            height={268}
          />
        </Bleed>
        <Box position="relative" zIndex={3} width={"app.base"}>
          <Text
            color={"app.black"}
            textStyle={"universal.title"}
            width={253}
            marginTop={117}
            marginLeft={106}
            // border={"1px solid red"}
          >
            {title.toUpperCase()}
          </Text>
          <Text
            color={"app.black"}
            textStyle={"universal.description"}
            padding={"app.base"}
            // width={344}
            // border={"1px solid blue"}
            whiteSpace={"pre-line"}
          >
            {description}
          </Text>
        </Box>
      </VStack>
    </Section>
  );
}
