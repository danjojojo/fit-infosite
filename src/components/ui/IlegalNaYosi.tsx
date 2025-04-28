"use client";

import Image from "next/image";
import { Box, Text, VStack, Container } from "@chakra-ui/react";
import Section from "@/components/ui/Section";
import Philippines from "@/ui/img/philippines.svg";

import IlegalNaYosiTwo from "@/components/ui/IlegalNaYosiTwo";

export default function IlegalNaYosi() {
  const mapLegends = [
    { color: "#EAC2BF", legend: "Manila / North Central Luzon / Palawan" },
    { color: "#D87476", legend: "Visayas" },
    { color: "#CD0E04", legend: "Mindanao" },
  ];

  return (
    <Section
      id="klase-ng-ilegal-na-yosi"
      width={"inherit"}
      position={"relative"}
      height={"auto"}
      overflow={"hidden"}
    >
      <VStack padding={"app.base"} background="app.white">
        <Image src={"/assets/fit-fake.webp"} alt="Fake Cigarettes" width={390} height={390} />
        <Box marginTop={"24px"} overflow={"hidden"} maxWidth={"app.base"}>
          <Text
            textStyle={"universal.h2"}
            color={"app.black"}
            textTransform={"uppercase"}
            lineHeight={"120%"}
          >
            <Text
              as="span"
              color={"app.white"}
              backgroundColor={"app.red"}
              padding={"5px 5px 0px"}
              textTransform={"uppercase"}
            >
              Talamak Na
            </Text>{" "}
            ang mga illicit cigarettes!
          </Text>
          <Text textStyle={"universal.description"} color={"app.black"}>
            Lalong lumaganap ang ilegal na sigarilyo—mas madali nang mabili, mas
            marami pang brand ang nagsusulputan.
          </Text>

          <Box display={"flex"} justifyContent={"center"}>
            <Image src={Philippines} alt="Philippines" />
          </Box>
          <Text
            textStyle={"universal.h4"}
            color={"app.black"}
            textTransform={"uppercase"}
            paddingTop={"app.base"}
            paddingBottom={"app.base"}
          >
            Ayon SA TERRIER EPS REPORT: MAS NAGING TALAMAK Ang MGA BAWAL na
            brand ng SIGARILYO{" "}
          </Text>
          <Text
            textStyle={"universal.description"}
            color={"app.black"}
            lineHeight={"120%"}
          >
            Mataas pa rin ang bentahan ng ilegal na sigarilyo sa Mindanao
            (19.0%)—malayo sa Luzon (4.9%) at Visayas (1.3%).
          </Text>

          {mapLegends.map((legend, index) => (
            <Container
              key={index}
              padding={0}
              display={"flex"}
              alignItems={"center"}
              marginTop={"app.base"}
            >
              <Box
                display={"inline-block"}
                width={"24px"}
                height={"24px"}
                backgroundColor={legend.color}
                // borderRadius={"50%"}
                marginRight={"8px"}
              ></Box>
              <Text
                textStyle={"universal.legend"}
                color={"app.black"}
                lineHeight={"120%"}
                textAlign={"left"}
                fontStyle={"bold"}
              >
                {legend.legend}
              </Text>
            </Container>
          ))}

          <VStack paddingTop={"24px"}>
            <Text textStyle={"universal.overline1"} color={"app.red"}>
              Ang mga top brand na pinepeke
            </Text>
            <Text
              textStyle={"universal.overline_description"}
              color={"app.black"}
              textAlign={"center"}
            >
              Pagdating sa pineke na brand, MIGHTY ang nangunguna, habang
              MARLBORO humahabol na rin sa 0.6%.
            </Text>

            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              width={"100%"}
              marginTop={"24px"}
            >
              <Text textStyle={"universal.h3"} color={"app.black"}>
                MARLBORO
              </Text>
              <Text textStyle={"universal.h3"} color={"app.black"}>
                MIGHTY
              </Text>
            </Box>
          </VStack>

          <VStack paddingTop={"24px"}>
            <Text textStyle={"universal.overline1"} color={"app.red"}>
              Ang mga top brand na &quot;illicit whites&quot;
            </Text>
            <Text
              textStyle={"universal.overline_description"}
              color={"app.black"}
              textAlign={"center"}
            >
              Sa mga tinatawag na &quot;illicit whites,&quot; ASTRO (0.6%) at
              FORT (0.5%) ay mabilis ang paglago—halos kapantay na ng Marlboro.
            </Text>

            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              // padding={"0px 32px"}
              width={"100%"}
              marginTop={"24px"}
            >
              <Box position="relative">
                <Image
                  src={"/assets/astro.webp"}
                  alt="Astro"
                  width={139}
                  height={181}
                />
                <Text
                  textStyle={"universal.h2"}
                  color={"app.white"}
                  position={"absolute"}
                  bottom={"0"}
                  width={"100%"}
                  textAlign={"center"}
                >
                  ASTRO
                </Text>
              </Box>

              <Box position="relative">
                <Image
                  src={"/assets/fort.webp"}
                  alt="Fort"
                  width={139}
                  height={181}
                />
                <Text
                  textStyle={"universal.h2"}
                  color={"app.white"}
                  position={"absolute"}
                  bottom={"0"}
                  width={"100%"}
                  textAlign={"center"}
                >
                  FORT
                </Text>
              </Box>
            </Box>
          </VStack>
        </Box>
      </VStack>
      <IlegalNaYosiTwo />
    </Section>
  );
}
