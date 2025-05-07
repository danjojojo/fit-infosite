"use client";

import { Text, Box, VStack, Button, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";


import Section from "@/components/ui/Section";
import Headline from "@/components/ui/Headline";
import ContentContainer from "@/components/layout/ContentContainer";

import { generalIcon } from "@/ui/icons";

import * as carousel from "@zag-js/carousel";
import { normalizeProps, useMachine } from "@zag-js/react";

export default function News() {
  const originalText = "Kita namin 'yan";
  const highlightedText = ["Kita"];

  const newsArticles = [
    {
      // sample id random hashed
      id: "d30a3d4469193a1752644ceada4716cbfeabf6b1266de7981fe672d691a8166e",
      image: "/assets/news-1.png",
      location: "Malabon City, Metro Manila",
      title: "P6.5 M na  SMuggled sigarilyo, Timbog!",
      description:
        "Huli ka! Sa tulong ng mga opsiyal mula sa BIR at CIDG, sandamakmak na smuggled na sigarilyo ang nakumpiska mula sa mga suspect.",
    },
    {
      id: "4674e7609ad801a7a83ae5d48201edd1af2604b4eb61b8fc174a307b19640e14",
      image: "/assets/news-2.png",
      location: "Roxas, Palawan",
      title: "Mag-asawang nagbebenta ng ilegal na sigarilyo, arestado",
      description:
        "Arestado ang mag-asawa na nagbebenta ng mga smuggled na sigarilyo sa Poblacion, Roxas, Palawan nito lamang ika-8 ng Enero 2025.",
    },
    {
      id: "b0d876853024f4f01d9bd45abdd3ea66f78dcb3b6e0f592909895e206589b63e",
      image: "/assets/news-3.png",
      location: "Calatagan, Batangas",
      title: "P2.2 M smuggled na sigarilyo, nasabat sa Batangas",
      description:
        "Kinilala ng PNP ang suspek na si alyas “Alwin”, 48 taong gulang, binata at residente ng Barangay Biga, Calatagan, Batangas.",
    },
  ];

  const service = useMachine(carousel.machine, {
    id: "1",
    slideCount: newsArticles.length,
    orientation: "vertical",
    slidesPerMove: 1,
    slidesPerPage: 1,
    loop: true,
    allowMouseDrag: true,
  });

  const api = carousel.connect(service, normalizeProps);

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
        <Box width="100vw" height="100dvh" position="absolute" top="0">
          <Box {...api.getItemGroupProps()} height="100%" width="100%">
            {newsArticles.map((newsArticle, index) => (
              <Box
                key={newsArticle.id}
                {...api.getItemProps({ index })}
                height="100dvh"
                width="100%"
                position="relative"
              >
                <Image
                  src="/assets/news-texture.jpg"
                  alt="News Texture"
                  fill
                  style={{
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                  }}
                />
                <Image
                  src={newsArticle.image}
                  alt="News Image"
                  fill
                  style={{
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                />
                <Box
                  width="100%"
                  position="relative"
                  height="100%"
                  zIndex={3}
                  border="1px solid white"
                >
                  <Flex
                    backgroundColor="app.darkgray"
                    position="absolute"
                    bottom="20%"
                    right="0"
                    width={331}
                    flexDir="column"
                    rowGap="app.base"
                    padding="app.base"
                    paddingRight="32px"
                  >
                    <Flex columnGap="4px" alignItems="center">
                      <Icon width="16px" height="16px" color={"app.white"}>
                        {generalIcon("flag")}
                      </Icon>
                      <Text textStyle="universal.overline_description">
                        {newsArticle.location}
                      </Text>
                    </Flex>
                    <Text textStyle="universal.news_title">
                      {newsArticle.title}
                    </Text>
                    <Text textStyle="universal.description">
                      {newsArticle.description}
                    </Text>
                    <Flex
                      columnGap="4px"
                      alignItems="center"
                      marginLeft="auto"
                    >
                      <Text
                        textStyle="universal.caption_s"
                        lineHeight="100%"
                        alignItems="center"
                      >
                        BASAHIN
                      </Text>
                      <Icon width="16px" height="16px" color={"app.white"}>
                        {generalIcon("arrow_right_w_tail")}
                      </Icon>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Box>
          {/* <Box {...api.getIndicatorGroupProps()}>
        {api.pageSnapPoints.map((_, index) => (
          <Button {...api.getIndicatorProps({ index })} key={index} />
        ))}
      </Box> */}
        </Box>
        <ContentContainer position="absolute" bottom="0" zIndex={3}>
          <Button
            width="100%"
            textStyle="universal.h6"
            padding="7%"
            backgroundColor="app.red"
            color="app.white"
          >
            MGA IBANG REPORT
          </Button>
        </ContentContainer>
      </VStack>
    </Section>
  );
}
