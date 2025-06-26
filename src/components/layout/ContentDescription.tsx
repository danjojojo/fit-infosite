import { Text, TextProps } from "@chakra-ui/react";

interface ContentDescriptionProps extends TextProps {
    description: string;
    textProps?: TextProps;
}

export default function ContentDescription({description, ...textProps} : ContentDescriptionProps) {
  return (
    <Text
      color="app.black"
      textStyle="universal.description"
      marginTop="app.base"
      whiteSpace="pre-line"
      {...textProps}
    >
      {description}
    </Text>
  );
}