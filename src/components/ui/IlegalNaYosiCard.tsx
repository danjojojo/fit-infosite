"use client";

import Image from "next/image";
import { Box, Text, VStack, Container, Flex, Icon } from "@chakra-ui/react";
import { generalIcon } from "@/ui/icons";
import { INYCard } from "@/ui/INYCardImageTitleDesign";

interface IlegalNaYosiCardProps {
    image: string;
    imageTitleDesign: INYCard;
    title: string;
    description: string;
    palantandaan: string[];
}

export default function IlegalNaYosiCard({
  image,
  imageTitleDesign, 
  title,
  description,
  palantandaan,
}: IlegalNaYosiCardProps) {
  return (
    <VStack rowGap="24px">
      <Box backgroundColor="app.gray" height="fit-content" width="100%">
        <Container padding="app.base">
          <Flex
            flexDirection="column"
            alignContent="center"
            alignItems="center"
            padding="app.base"
            position="relative"
          >
            <Flex
              position="relative"
              justifyContent="center"
              flexDirection="column"
            >
              <Box scale={1.05}>
                <Image src={imageTitleDesign.vector} alt="Vector" />
              </Box>
              <Box position="absolute" top={0} height="100%">
                <Image
                  src={image}
                  alt="Image"
                  width={390}
                  height={316}
                  style={{
                    height: "100%",
                    WebkitMaskImage: `url(${imageTitleDesign.vector.src})`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Flex>
            <Box
              backgroundColor="app.white"
              width="100%"
              padding="16px 24px"
              rotate={imageTitleDesign.titleRotation}
              position="absolute"
              bottom={0}
            >
              <Text
                textStyle="universal.h3"
                textAlign="center"
                color="app.black"
              >
                {title}
              </Text>
            </Box>
          </Flex>
        </Container>
        <Flex padding="app.base" rowGap="16px" flexDirection="column" color="app.white">
          <Text textStyle="universal.description">{description}</Text>
          <Text textStyle="universal.description">Mga palatandaan:</Text>
          <Flex columnGap="8px" flexDirection="column">
            {palantandaan.map((pdesc, index) => (
              <Flex key={index} columnGap="8px" alignItems="center">
                <Icon width="16px" height="16px" color="app.lightred">
                  {generalIcon("warning")}
                </Icon>
                <Text textStyle="universal.description">{pdesc}</Text>
              </Flex>
            ))}
          </Flex>
          <Flex columnGap="5px" alignItems="center">
            <Text textStyle="universal.h6">Iba pang detalye</Text>
            <Icon width="16px" height="16px">
              {generalIcon("arrow_right")}
            </Icon>
          </Flex>
        </Flex>
      </Box>
    </VStack>
  );
}
