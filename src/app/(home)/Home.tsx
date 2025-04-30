"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Stack,
  Container,
  Text,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import Section from "@/components/ui/Section";
import { generalIcon } from "@/ui/icons";
import { LandingSchema } from "@/schemas/LandingSchema";

export default function Landing() {
  const landingData: LandingSchema = {
    CTAText: "Alamin ang Illicit Trade",
    goToSection: "ano-ang-illicit-tobacco-trade",
    imageBanner: "/assets/fit-home-banner.webp",
    videoPoster: "/assets/fit-vid-preview.webp",
    videoSrc: "/assets/fit-home-video.mp4",
  };

  const { CTAText, goToSection, imageBanner, videoPoster, videoSrc } =
    landingData;

  return (
    <Section id="home" w="inherit">
      <Box padding="app.base" display="flex" justifyContent="center">
        <Image
          src={imageBanner}
          alt="Lugi Na, Yari Pa"
          width={390}
          height={478}
        />
      </Box>
      <Stack backgroundColor="app.red">
        <Container display="flex" justifyContent="center" padding="app.base">
          <video
            style={{
              width: "390px",
              height: "390px",
              objectFit: "cover",
            }}
            controls
            playsInline
            poster={videoPoster}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
        <VStack>
          <Text textStyle="universal.caption">{CTAText}</Text>
          <Link href={`#${goToSection}`}>
            <Button
              border="1px solid white"
              cursor="pointer"
              height={50}
              width={50}
              borderRadius="50%"
              background="transparent"
              marginTop="16px"
            >
              <Icon width="30px" height="30px">
                {generalIcon("arrow_down")}
              </Icon>
            </Button>
          </Link>
        </VStack>
      </Stack>
    </Section>
  );
}
