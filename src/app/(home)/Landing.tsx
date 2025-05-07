"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
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
    imageBanner: {
      src: "/assets/fit-home-banner.webp",
      width: 343,
      height: 478,
      alternativeText: "Lugi Na, Yari Pa",
    },
    videoPoster: {
      src: "/assets/fit-vid-preview.webp",
      width: 343,
      height: 343,
      alternativeText: "Video Poster",
    },
    videoSrc: {
      src: "/assets/fit-home-video.mp4",
      width: 343,
      height: 343,
    },
  };

  const { CTAText, goToSection, imageBanner, videoPoster, videoSrc } =
    landingData;

  return (
    <Section id="home">
      <Box padding="app.base" display="flex" justifyContent="center">
        <Image
          src={imageBanner.src}
          alt={imageBanner.alternativeText}
          width={imageBanner.width}
          height={imageBanner.height}
        />
      </Box>
      <VStack backgroundColor="app.red">
        <Container display="flex" justifyContent="center" padding="app.base">
          <video
            style={{
              width: `${videoSrc.width}px`,
              height: `${videoSrc.height}px`,
              objectFit: "cover",
            }}
            controls
            playsInline
            poster={videoPoster.src}
          >
            <source src={videoSrc.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
        <VStack>
          <Text textStyle="universal.caption" color="app.white">
            {CTAText}
          </Text>
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
      </VStack>
    </Section>
  );
}
