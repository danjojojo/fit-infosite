import { Stack } from "@chakra-ui/react";

import Header from "@/components/layout/Header";
import Landing from "@/components/ui/Landing";
import IllicitTobaccoTrade from "@/components/ui/IllicitTobaccoTrade";

export default function Home() {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={0}
      backgroundColor="app.black"
      width={"100%"}
      overflowX={"hidden"}
      // border={"1px solid red"}
    >
      <Header />
      <Landing />
      <IllicitTobaccoTrade />
    </Stack>
  );
}
