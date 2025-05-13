import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

interface TopBrandProps {
  topBrand: {
    overline: string;
    description: string;
    brands: Array<{
      id: string;
      name: string;
      image?: string;
    }>;
  };
}

export default function TopBrands({ topBrand }: TopBrandProps) {
  return (
    <VStack paddingTop="24px">
      <Text textStyle="universal.overline1" color="app.red">
        {topBrand.overline}
      </Text>
      <Text
        textStyle="universal.overline_description"
        color="app.black"
        textAlign="center"
      >
        {topBrand.description}
      </Text>

      <Box
        display="flex"
        justifyContent="space-evenly"
        width="100%"
        marginTop="24px"
      >
        {topBrand.brands.map((brand) => (
          <Box position="relative" key={brand.id}>
            {brand.image && (
              <Image
                src={brand.image}
                alt={brand.name}
                width={139}
                height={181}
              />
            )}
            <Text
              textStyle="universal.h2"
              color={brand.image ? "app.white" : "app.black"}
              position={brand.image ? "absolute" : "static"}
              bottom={brand.image ? "0" : "auto"}
              width="100%"
              textAlign="center"
            >
              {brand.name}
            </Text>
          </Box>
        ))}
      </Box>
    </VStack>
  );
}
