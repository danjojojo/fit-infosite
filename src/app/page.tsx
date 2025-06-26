import { Stack } from "@chakra-ui/react";

import Header from "@/app/(home)/Header";
import Landing from "@/app/(home)/Landing";
import IllicitTobaccoTrade from "@/app/(home)/IllicitTobaccoTrade";
import IllicitCigarettes from "@/app/(home)/IllicitCigarettes";
import EffectsOfIllicitTrade from "@/app/(home)/EffectsOfIllicitTrade";
import Tips from "@/app/(home)/Tips";
import News from "@/app/(home)/News";
import AboutUs from "@/app/(home)/AboutUs";
import ContactUs from "@/app/(home)/ContactUs";

export default function Page() {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      rowGap={0}
      backgroundColor="app.black"
      width={"100%"}
    >
      <Header />
      <Landing />
      <IllicitTobaccoTrade />
      <IllicitCigarettes />
      <EffectsOfIllicitTrade />
      <Tips />
      <News />
      <AboutUs />
      <ContactUs />
    </Stack>
  );
}
