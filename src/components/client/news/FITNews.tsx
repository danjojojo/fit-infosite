"use client";

// UI
import { Box, VStack } from "@chakra-ui/react";
import React from "react";

// Components
import Section from "@/components/layout/Section";
import Headline from "@/components/ui/Headline";
import FITButton from "@/components/ui/FITButton";
import ContentContainer from "@/components/layout/ContentContainer";
import NewsArticles from "@/components/ui/NewsArticles";

// Schema
import type { NewsDataSchema } from "@/schemas/NewsSchema";

export default function FITNews({ data }: NewsDataSchema) {
  const { originalText, highlightedText, newsArticles } = data;

  return (
    <Section id="reports-and-news">
      <VStack height="100dvh" backgroundColor="app.black" position="relative">
        <ContentContainer position="relative" zIndex={4}>
          <Box backgroundColor="transparent">
            <Headline
              originalText={originalText}
              textStyle="universal.h1"
              highlightedText={highlightedText}
              ogTextColor="app.white"
            />
          </Box>
        </ContentContainer>
        <Box
          width="100vw"
          height="100dvh"
          position="absolute"
          top="0"
          color="app.white"
        >
          <NewsArticles newsArticles={newsArticles} />
        </Box>
        <ContentContainer position="absolute" bottom="0" zIndex={3}>
          <FITButton
            text="MGA IBANG REPORT"
            bgColor="app.red"
            color="app.white"
          />
        </ContentContainer>
      </VStack>
    </Section>
  );
}
