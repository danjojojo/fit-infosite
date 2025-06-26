import { Box, Text, TextProps } from "@chakra-ui/react";

interface HeadlineProps extends TextProps {
  originalText: string;
  highlightedText: string[];
  ogTextColor?: string;
  highlightedTextColor?: string;
  highlightedTextBgColor?: string;
}

export default function Headline({
  originalText,
  highlightedText,
  ogTextColor = "app.black",
  highlightedTextColor = "app.white",
  highlightedTextBgColor = "app.red",
  ...textProps
}: HeadlineProps) {
  const ogText = originalText.split(" ");

  return (
    <Box
      wordBreak="break-word"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      rowGap={1}
      alignContent="stretch"
      {...textProps}
    >
      {ogText.map((text, index) => {
        const highlight = highlightedText?.includes(text);
        const nextTextHighlight = highlightedText?.includes(ogText[index + 1]);

        const padRight = nextTextHighlight ? "0px" : "5px";
        const margRight = nextTextHighlight ? "0px" : "8px";

        return (
          <Box key={index} width="fit-content" marginRight={margRight}>
            <Text
              color={highlight ? highlightedTextColor : ogTextColor}
              backgroundColor={
                highlight ? highlightedTextBgColor : "transparent"
              }
              padding={
                highlight ? `2.5px ${padRight} 0px 5px` : `2.5px 5px 0px 0px`
              }
              height="calc(100% - 5px)"
              width="100%"
            > 
              {text}{" "}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}
