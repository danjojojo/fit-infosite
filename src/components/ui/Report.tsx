import Image from "next/image";
import { Box, Text, Container } from "@chakra-ui/react";

import Philippines from "@/ui/img/philippines.svg";
import ContentDescription from "../layout/ContentDescription";

export default function Report() {

  const mapLegends = [
    { color: "#EAC2BF", legend: "Manila / North Central Luzon / Palawan" },
    { color: "#D87476", legend: "Visayas" },
    { color: "#CD0E04", legend: "Mindanao" },
  ];

  const reportCaption = "AYON SA TERRIER EPS REPORT: MAS NAGING TALAMAK ANG MGA BAWAL NA BRAND NG SIGARILYO";

  const reportDescription = "Mataas pa rin ang bentahan ng ilegal na sigarilyo sa Mindanao (19.0%)—malayo sa Luzon (4.9%) at Visayas (1.3%)."

  return (
    <Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Image src={Philippines} alt="Philippines" />
      </Box>
      <Text
        textStyle={"universal.h6"}
        color={"app.black"}
        textTransform={"uppercase"}
        paddingTop={"app.base"}
      >
        {reportCaption}
      </Text>

      <ContentDescription description={reportDescription}/>

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
    </Box>
  );
}
