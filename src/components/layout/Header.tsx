"use client";

// Packages
import { Box, Button, Stack, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

// UI
import { generalIcon } from "@/ui/icons";

// Components
import NavLinks from "./NavLinks";

export default function Header() {
  const [toggledMenu, setToggledMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setToggledMenu(!toggledMenu);

    if (!toggledMenu) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
  };

  return (
    <Stack width="100%" position={"sticky"} top={0} zIndex={1}>
      <Box
        height="87"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        padding="12px 16px"
        zIndex={3}
      >
        <Image
          src="/assets/fit.webp"
          alt="Fight Illicit Trade logo"
          width={50}
          height={50}
        />
        <Button
          border={"1px solid white"}
          cursor="pointer"
          height={50}
          width={50}
          borderRadius={"50%"}
          background="transparent"
          onClick={toggleMenu}
        >
          <Icon width="30px" height="30px">
            {!toggledMenu ? generalIcon("list") : generalIcon("close")}
          </Icon>
        </Button>
      </Box>
      {toggledMenu && <NavLinks toggleMenu={toggleMenu} />}
    </Stack>
  );
}
