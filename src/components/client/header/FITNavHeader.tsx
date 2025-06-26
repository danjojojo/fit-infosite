"use client";

// UI
import Image from "next/image";
import { Box, Button, Stack, Icon } from "@chakra-ui/react";
import { generalIcon } from "@/ui/icons";

// Components
import FITNavLinks from "./FITNavLinks";

// Hooks
import { useHeader } from "@/hooks/useHeader";

// Schema
import type { NavHeaderProps } from "@/schemas/HeaderSchema";

export default function FITNavHeader({ links } : NavHeaderProps) {
  const { navDisplay, toggledMenu, toggleMenu } = useHeader();

  return (
    <Stack
      width="100%"
      position="sticky"
      top={navDisplay ? "0px" : "-100px"}
      zIndex={999}
      transition="ease 0.3s"
    >
      <Box
        height="87px"
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
          style={{ width: "auto" }}
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
      {toggledMenu && <FITNavLinks toggleMenu={toggleMenu} links={links} />}
    </Stack>
  );
}
