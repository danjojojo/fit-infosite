import { Box, Text, Flex, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface EffectsCardsProps {
  cardArticles: Array<{
    id: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }>;
}

export default function EffectsCardSlider({ cardArticles }: EffectsCardsProps) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Box
      display="flex"
      flexDir="column"
      width="app.base"
      paddingBottom="app.base"
      border="1px solid white"
    >
      <Slider {...settings}>
        {cardArticles.map((card, index) => (
          <Container key={card.id} height="100%" padding="app.base">
            <Flex
              backgroundColor="app.white"
              height="100%"
              flexDirection="column"
              alignItems="center"
            >
              <Box padding="app.base">
                <Image
                  src={card.imageSrc}
                  width={319}
                  height={227}
                  alt={card.imageAlt}
                />
              </Box>
              <Box padding="app.base" alignSelf="flex-start">
                <Flex
                  color="app.black"
                  rowGap={5}
                  columnGap={5}
                  width="inherit"
                >
                  <Text textStyle="universal.h3">{index + 1 + "."}</Text>
                  <Flex
                    flexDirection="column"
                    rowGap={2}
                    columnGap={2}
                    wordBreak="break-word"
                  >
                    <Text
                      textStyle="universal.h3"
                      width="100%"
                      textAlign="left"
                    >
                      {card.title}
                    </Text>
                    <Text textStyle="universal.description" color="app.black">
                      {card.description}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Container>
        ))}
      </Slider>
    </Box>
  );
}
