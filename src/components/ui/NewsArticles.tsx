import { Text, Box, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";

import { generalIcon } from "@/ui/icons";
import * as carousel from "@zag-js/carousel";
import { normalizeProps, useMachine } from "@zag-js/react";

import type { NewsArticlesDataSchema } from "@/schemas/NewsSchema";

export default function NewsArticles({ newsArticles }: NewsArticlesDataSchema) {
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
              <Text textStyle="universal.news_title">{newsArticle.title}</Text>
              <Text textStyle="universal.description">
                {newsArticle.description}
              </Text>
              <Flex columnGap="4px" alignItems="center" marginLeft="auto">
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
  );
}
