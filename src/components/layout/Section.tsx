import { Box, BoxProps } from "@chakra-ui/react";

interface SectionProps extends BoxProps {
  children: React.ReactNode;
  boxProps?: BoxProps;
}

const Section = ({ children, boxProps, ...props }: SectionProps) => {
  return (
    <Box
      {...props}
      as="section"
      width="inherit"
      position="relative"
      overflow="hidden"
      scrollMarginTop="87px"
    >
      <Box {...boxProps}>{children}</Box>
    </Box>
  );
};

export default Section;
