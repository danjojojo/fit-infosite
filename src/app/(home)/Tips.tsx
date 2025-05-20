import { Text, VStack, Box, Flex, Bleed } from "@chakra-ui/react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import ContentContainer from "@/components/layout/ContentContainer";

import Headline from "@/components/ui/Headline";

export default function Tips() {
  const originalText = "Tips para makaiwas sa ilegal na sigarilyo";
  const highlightedText = ["Tips", "makaiwas"];

  const tipCards = [
    {
      image: "/assets/tips-1.png",
      title: "GRAPHIC HEALTH WARNING",
      description:
        "Kapag walang label, walang kasiguraduhan yan. Bahagi ng batas ang paglalagay ng mga graphic health warning sa mga kaha ng sigarilyo.",
    },
    {
      image: "/assets/tips-2.png",
      title: "PH TAX STAMP",
      description:
        "Sa kasalukuyan, Vinta ang nakalagay sa tunay na tax stamp at walang umuulit na numero sa code nito. Karaniwang tarsier o butanding parin ang nasa pekeng yosi.",
    },
    {
      image: "/assets/tips-3.png",
      title: "MANUFACTURER ADDRESS",
      description:
        "Walang address ng manufacturer?  Maaring gawa ito sa maruruming pabrika.",
    },
    {
      image: "/assets/tips-4.png",
      title: "MAS MABABANG PRESYO SA MINIMUM PRICE",
      description:
        "Masyadong mura? Malamang peke yan! Hindi dapat bababa sa minimum price na ₱114.60 ang isang kaha ng orig na yosi.",
    },
  ];

  return (
    <Section id="tips">
      {/* <Flex
        background="app.black"
        flexDir={{ base: "column", lg: "row" }}
        marginTop="48px"
        flexWrap="wrap"
        align="flex-start"
      > */}
      {/* <Box
          position="relative"
          width={{ base: "100vw", lg: "fit-content" }}
          border="1px solid blue"
          height="fit-content"
        >
          <Bleed
            width="fit-content"
            position="absolute"
            top="0"
            left="-12"
            marginTop="24px"
            filter="grayscale(100%)"
            rotate="9.5deg"
          >
            <Image
              src="/assets/tips-finger.png"
              width={141}
              height={292}
              alt="Finger"
              style={{ objectFit: "cover" }}
            />
          </Bleed>
          <Box width="270px" marginLeft="90px">
            <Headline
              originalText={originalText}
              highlightedText={highlightedText}
              textStyle="universal.h1_s"
              ogTextColor="app.white"
            />
          </Box>
        </Box>

        <Flex
          flex={1}
          flexWrap="wrap"
          rowGap="app.base"
          columnGap="app.base"
          color="app.white"
          justifyContent="center"
        >
          {tipCards.map((tipCard, index) => (
            <VStack
              backgroundColor="app.gray"
              padding="12px"
              paddingBottom="20px"
              key={index}
              width="343px"
            >
              <Box width="100%" height="227px" position="relative">
                <Image
                  src={tipCard.image}
                  alt="Tip"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Text
                textStyle="universal.h3"
                paddingTop="app.base"
                alignSelf="start"
              >
                {tipCard.title}
              </Text>
              <Text
                textStyle="universal.description"
                textAlign="left"
                width="100%"
              >
                {tipCard.description}
              </Text>
            </VStack>
          ))}
        </Flex> */}

      <Flex
        margin="48px 0"
        flexDir={{ base: "column", lg: "row" }}
        rowGap="app.base"
      >
        {/* <Box
          width={{ base: "100%", lg: "270px" }}
          h="350px"
          flexShrink={0}
          bgColor="app.gray"
          marginTop="48px"
        >
          main
        </Box> */}
        <Flex
          position="relative"
          width={{ base: "100vw", lg: "fit-content" }}
          justifyContent="center"
          alignItems="center"
        >
          <Bleed
            marginLeft="-24px"
            filter="grayscale(100%)"
            rotate="9.5deg"
            height="213px"
            width="141px"
          >
            <Image
              src="/assets/tips-finger.png"
              fill
              alt="Finger"
              style={{ objectFit: "cover" }}
            />
          </Bleed>
          <Box width="360px">
            <Headline
              originalText={originalText}
              highlightedText={highlightedText}
              textStyle="universal.h1_s"
              ogTextColor="app.white"
            />
          </Box>
        </Flex>
        <Flex
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          // flexDir={{ base: "column", lg: "row" }}
          columnGap="16px"
          rowGap="16px"
          justifyContent={{ base: "center", lg: "flex-start" }}
          overflowX="auto"
          minHeight={{ base: "100%", lg: "35vw" }}
          scrollbar="hidden"
        >
          {/* <Box minW="500px" h="350px" bgColor="app.gray">
            1
          </Box>
          <Box minW="500px" h="350px" bgColor="app.gray" mt="auto">
            2
          </Box>
          <Box minW="500px" h="350px" bgColor="app.gray">
            3
          </Box>
          <Box minW="500px" h="350px" bgColor="app.gray">
            4
          </Box> */}
          {tipCards.map((tipCard, index) => (
            <VStack
              backgroundColor="app.gray"
              padding="12px"
              paddingBottom="20px"
              key={index}
              width="343px"
              height="fit-content"
              mt={{ base: "0", lg: (index + 1) % 2 === 0 ? "auto" : "0" }}
              // flex={1}
            >
              <Box width="319px" margin="0 auto">
                <Box width="100%" height="227px" position="relative">
                  <Image
                    src={tipCard.image}
                    alt="Tip"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Text
                  textStyle="universal.h3"
                  paddingTop="app.base"
                  alignSelf="start"
                >
                  {tipCard.title}
                </Text>
                <Text
                  textStyle="universal.description"
                  textAlign="left"
                  width="100%"
                >
                  {tipCard.description}
                </Text>
              </Box>
            </VStack>
          ))}
        </Flex>
      </Flex>

      {/* </Flex> */}
    </Section>
  );
}
