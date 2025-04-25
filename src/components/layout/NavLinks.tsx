"use client";

import { Stack, Text } from "@chakra-ui/react";

export default function NavLinks(props : {
    toggleMenu: () => void;
}){
    const navLinks = [
      { name: "Home", section: "landing" },
      {
        name: "Ano ang Illicit Tobacco Trade?",
        section: "ano-ang-illicit-tobacco-trade",
      },
      { name: "Klase ng Ilegal na Yosi", section: "klase-ng-ilegal-na-yosi" },
      { name: "Epekto ng Illicit Trade", section: "epekto-ng-illicit-trade" },
      { name: "Reports & News", section: "reports-and-news" },
      { name: "About Us", section: "about-us" },
      { name: "Contact Us", section: "contact-us" },
    ];

    const toggleMenu = props.toggleMenu;
    return (
      <Stack
        display="flex"
        flexDirection="column"
        gap={0}
        backgroundColor="#000000"
        height="100svh"
        paddingTop={"112px"}
        width="100%"
        position={"fixed"}
        left={0}
        top={0}
        zIndex={2}
        overflowX={"hidden"}
      >
        {navLinks.map((link, index) => (
          <a key={index} href={`#${link.section}`}>
            <Text
              textStyle={"universal.nav"}
              mb={"16px"}
              padding={"0 16px"}
              onClick={toggleMenu}
            >
              {link.name.toUpperCase()}
            </Text>
          </a>
        ))}
      </Stack>
    );
}