"use client";

// Package
import Link from "next/link";

// UI
import { Stack, Text } from "@chakra-ui/react";

// Schema
import type { NavLinksProps } from "@/schemas/HeaderSchema";

export default function FITNavLinks({ toggleMenu, links } : NavLinksProps) {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      columnGap={0}
      backgroundColor="#000000"
      height="100svh"
      paddingTop="112px"
      width="100%"
      position="fixed"
      left={0}
      top={0}
      zIndex={2}
      overflowX="hidden"
    >
      {links.map((link, index) => (
        <Link key={index} href={`#${link.section}`}>
          <Text
            textStyle="universal.nav"
            mb="16px"
            padding="0 16px"
            color="app.white"
            onClick={() => toggleMenu()}
          >
            {link.name.toUpperCase()}
          </Text>
        </Link>
      ))}
    </Stack>
  );
}
