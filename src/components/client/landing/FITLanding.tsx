"use client";

// UI
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Text, VStack, Button, Icon } from "@chakra-ui/react";
import Section from "@/components/layout/Section";
import { generalIcon } from "@/ui/icons";

// Schema
import { LandingDataSchema } from "@/schemas/LandingSchema";

export default function FITLanding({ landingData }: LandingDataSchema) {
  const { CTAText, goToSection, imageBanner, videoPoster, videoSrc } =
    landingData;

  return (
    <Section id="home">
      <Box padding="app.base" display="flex" justifyContent="center">
        <Image
          src={imageBanner.src}
          alt={imageBanner.alt}
          width={343}
          height={478}
          style={{ width: "auto" }}
        />
      </Box>
      <VStack backgroundColor="app.red">
        <Container display="flex" justifyContent="center" padding="app.base">
          <video
            style={{
              width: "343px",
              height: "343px",
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
              marginY="16px"
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
