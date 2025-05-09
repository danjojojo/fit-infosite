"use client";


import { Box, VStack } from "@chakra-ui/react";

import Headline from "@/components/ui/Headline";
import ContentContainer from "@/components/layout/ContentContainer";

import IlegalNaYosiCard from "@/components/ui/IlegalNaYosiCard";
import { INYCardDesign } from "@/ui/INYCardImageTitleDesign";

export default function IlegalNaYosiTwo() {
  const originalText = "Ano ano ba ang mga Illegal Na Sigarilyo?";
  const highlightedText = ["Illegal", "Na", "Sigarilyo?"];

  const IlegalNaYosiCards = [
    {
      image: "/assets/iny-1.png",
      imageTitleDesign: INYCardDesign.d1,
      title: "Contraband",
      description:
        "Mga totoong produkto na legal na produced, ngunit smuggled dito sa Pilipinas.",
      palatandaan: ["No PH picture of health warning", "No PH Tax Stamp"],
    },
    {
      image: "/assets/iny-2.png",
      imageTitleDesign: INYCardDesign.d2,
      title: "Counterfeits",
      description:
        "Mga pekeng copies ng mga brands na sikat at itinatangkilik.",
      palatandaan: [
        "Different Quality = smells/smokes different from the original brand",
        "No PH Tax Stamp",
      ],
    },
    {
      image: "/assets/iny-3.png",
      imageTitleDesign: INYCardDesign.d3,
      title: "Illicit Whites",
      description:
        "Mga brand na walang lisensyang ibenta sa Pilipinas at hindi matunton sa legal at mapagkakatiwalaang kumpanya.",
      palatandaan: ["Price is less than PHP5 per stick"],
    },
    {
      image: "/assets/iny-4.png",
      imageTitleDesign: INYCardDesign.d4,
      title: "Tax Under Paid",
      description:
        "Genuine products licensed for sale in the PH but company producing them may not be fully paying their share of the “sin tax” for selling their product to you.",
      palatandaan: [
        "Different Quality = smells/smokes different from the original brand",
        "No PH Tax Stamp",
      ],
    },
  ];

  return (
    <VStack
      background="app.darkgray"
      width="inherit"
    >
      <ContentContainer border="1px solid white">
        <Box paddingTop={"64px"} maxWidth={"app.base"}>
          <Headline
            originalText={originalText}
            textStyle="universal.h1_xl"
            highlightedText={highlightedText}
            ogTextColor="app.white"
          />
        </Box>
      </ContentContainer>
      <ContentContainer border="1px solid white">
        <VStack rowGap="app.base">
          {IlegalNaYosiCards.map((card, index) => (
            <IlegalNaYosiCard
              key={card.title + index}
              image={card.image}
              imageTitleDesign={card.imageTitleDesign}
              title={index + 1 + ". " + card.title}
              description={card.description}
              palantandaan={card.palatandaan}
            />
          ))}
        </VStack>
      </ContentContainer>
    </VStack>
  );
}
