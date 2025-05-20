"use client";

// Packages
import { Box, Button, Stack, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

// UI
import { generalIcon } from "@/ui/icons";

// Components
import NavLinks from "./NavLinks";

export default function Header() {
  const [toggledMenu, setToggledMenu] = useState<boolean>(false);
  const [navDisplay, setNavDisplay] = useState<boolean>(true);

  const toggleMenu = () => {
    setToggledMenu(!toggledMenu);

    if (!toggledMenu) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
  };


  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setNavDisplay(true);

      if (scrollTimeout) clearTimeout(scrollTimeout);

      if (!toggledMenu) {
        scrollTimeout = setTimeout(() => {
          setNavDisplay(false);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [toggledMenu]);

  return (
    <Stack
      width="100%"
      position="sticky"
      top={navDisplay ? "0px" : "-100px"}
      zIndex={999}
      transition="ease 0.3s"
    >
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
          border="1px solid white"
          cursor="pointer"
          height={50}
          width={50}
          borderRadius="50%"
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
