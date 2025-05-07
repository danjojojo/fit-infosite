import { Text, Box, Flex, VStack, Button } from "@chakra-ui/react";
import Image from "next/image";

import Section from "@/components/ui/Section";
import ContentContainer from "@/components/layout/ContentContainer";

export default function AboutUs() {
  const headlineText = "'Di maloloko ang may pakialam";
  const aboutUsTextFIT =
    "Fight IT is a movement under the Federation of Philippine Industries (FPI) in collaboration with the Philippine Tobacco Institute (PTI) intended to protect consumers, safeguard government revenues, and shield legitimate industries from the ill-effects of smuggling.";
  const aboutUsTextPTI =
    "The Philippine Tobacco Institute, Inc. represents, expresses and effects the opinions of the tobacco industry in the Philippines. It is a trade association composed of leading tobacco companies in the Philippines:";
  return (
    <Section id="about-us">
      <VStack backgroundColor="app.red">
        <ContentContainer marginTop="48px">
          <Flex flexDir="column" rowGap="app.base">
            <Text textStyle="universal.description">About Us</Text>
            <Text textStyle="universal.h1">{headlineText}</Text>
          </Flex>
        </ContentContainer>
        <ContentContainer>
          <Flex flexDir="column" rowGap="app.base">
            <Image
              src="/assets/fit.webp"
              alt="FIT Logo"
              height={132}
              width={132}
            />
            <Text textStyle="universal.description">{aboutUsTextFIT}</Text>
          </Flex>
        </ContentContainer>
        <ContentContainer>
          <Box
            width="100%"
            height="240px"
            position="relative"
            border="1px solid white"
          >
            <Image
              src="/assets/about-us.png"
              alt="About us"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </ContentContainer>
        <ContentContainer>
          <Flex flexDir="column" rowGap="app.base">
            <Image
              src="/assets/pti.png"
              alt="PTI Logo"
              height={132}
              width={132}
            />
            <Text textStyle="universal.description">{aboutUsTextPTI}</Text>
          </Flex>
        </ContentContainer>
        <ContentContainer>
          <Flex rowGap="app.base" flexDir="column">
            <Button
              width="100%"
              textStyle="universal.h6"
              padding="7%"
              backgroundColor="app.black"
              color="app.white"
            >
              JOIN THE CONVERSATION
            </Button>
            <Button
              width="100%"
              textStyle="universal.h6"
              padding="7%"
              backgroundColor="app.white"
              color="app.black"
            >
              CONTACT US
            </Button>
          </Flex>
        </ContentContainer>
      </VStack>
    </Section>
  );
}
