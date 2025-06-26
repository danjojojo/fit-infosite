"use client";

import { Box, VStack } from "@chakra-ui/react";

import Headline from "@/components/ui/Headline";
import ContentContainer from "@/components/layout/ContentContainer";

import IlegalNaYosiCard from "@/components/ui/IlegalNaYosiCard";
import { INYCardDesign } from "@/ui/INYCardImageTitleDesign";

import type { IllegalCigarettesDataSchema } from "@/schemas/IllicitCigarettesSchema";

export default function FITIllegalCigarettes({ illegalCigsData }: IllegalCigarettesDataSchema) {
  const { originalText, highlightedText, IlegalNaYosiCards } = illegalCigsData;

  return (
    <VStack background="app.darkgray" width="inherit">
      <ContentContainer>
        <Box paddingTop={"64px"} maxWidth={"app.base"}>
          <Headline
            originalText={originalText}
            textStyle="universal.h1_xl"
            highlightedText={highlightedText}
            ogTextColor="app.white"
          />
        </Box>
      </ContentContainer>

      <ContentContainer>
        <VStack rowGap="app.base">
          {IlegalNaYosiCards.map((card, index) => (
            <IlegalNaYosiCard
              key={card.id}
              image={card.image}
              imageTitleDesign={INYCardDesign[card.imageTitleDesign]}
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
