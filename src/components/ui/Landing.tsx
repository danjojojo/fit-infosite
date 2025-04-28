"use client"

import Image from "next/image";
import { Box, Stack, Container, Text, VStack, Button, Icon } from "@chakra-ui/react";
import Section from "@/components/ui/Section";
import { generalIcon } from "@/ui/icons";

export default function Landing() {
  return (
    <Section id="landing" width={"inherit"}>
      <Box padding="app.base" display="flex" justifyContent="center">
        <Image
          src={"/assets/fit-home-banner.webp"}
          alt="Lugi Na, Yari Pa"
          width={390}
          height={478}
        />
      </Box>
      <Stack backgroundColor="app.red">
        <Container
          display={"flex"}
          justifyContent={"center"}
          padding={"app.base"}
        >
          <video
            style={{
              width: "390px",
              height: "390px",
              objectFit: "cover",
            }}
            controls
            playsInline
            poster="/assets/fit-vid-preview.webp"
          >
            <source src="/assets/fit-home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
        <VStack>
          <Text textStyle={"universal.caption"}>ALAMIN ANG ILLICIT TRADE</Text>
          <Button
            border={"1px solid white"}
            cursor="pointer"
            height={50}
            width={50}
            borderRadius={"50%"}
            background="transparent"
            marginTop={"16px"}
            onClick={() => {
                const element = document.getElementById("ano-ang-illicit-tobacco-trade");
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }
            }
          >
            <Icon width="30px" height="30px">
              {generalIcon("arrow_down")}
            </Icon>
          </Button>
        </VStack>
      </Stack>
    </Section>
  );
}
