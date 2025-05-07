import { Text } from "@chakra-ui/react";

interface ContentDescriptionProps {
    description: string;
}

export default function ContentDescription({description} : ContentDescriptionProps) {
  return (
    <Text
      color="app.black"
      textStyle="universal.description"
      marginTop="app.base"
      whiteSpace="pre-line"
    >
      {description}
    </Text>
  );
}