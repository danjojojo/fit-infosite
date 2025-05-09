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
      <VStack background="app.black">
        <ContentContainer position="relative" border="1px solid red" marginTop="48px">
          <Bleed
            border="1px solid white"
            width="fit-content"
            position="absolute"
            top="0"
            left="-10"
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
          <Box border="1px solid white" width="255px" marginLeft="30%">
            <Headline
              originalText={originalText}
              highlightedText={highlightedText}
              textStyle="universal.h1_s"
              ogTextColor="app.white"
            />
          </Box>
        </ContentContainer>
        <ContentContainer border="1px solid red">
          <Flex flexDir="column" rowGap="app.base" color="app.white">
            {tipCards.map((tipCard, index) => (
              <VStack backgroundColor="app.gray" padding="app.base" key={index}>
                <Image
                  src={tipCard.image}
                  alt="Tip"
                  height={227}
                  width={319}
                  style={{
                    objectFit: "contain",
                  }}
                />
                <Text textStyle="universal.h3" paddingTop="app.base" alignSelf="start">
                  {tipCard.title}
                </Text>
                <Text textStyle="universal.description">
                  {tipCard.description}
                </Text>
              </VStack>
            ))}
          </Flex>
        </ContentContainer>
      </VStack>
    </Section>
  );
}
