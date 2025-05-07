import { Box, BoxProps } from "@chakra-ui/react";

interface ContentContainerProps extends BoxProps {
  children: React.ReactNode;
  boxProps?: BoxProps;
}


export default function ContentContainer({children, ...boxProps} : ContentContainerProps) {
  return (
    <Box
      padding="app.base"
      width="app.base"
      maxWidth="100%"
      border={"1px solid black"}
      {...boxProps}
    >
      {children}
    </Box>
  );
}