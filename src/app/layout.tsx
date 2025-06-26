import type { Metadata } from "next";
import {
  titlingGothicFBCond,
  titlingGothicFBComp,
  soDoSans,
  titlingGothicFBCondMedium,
} from "@/ui/fonts";
import "./globals.css";
import { Provider } from "@/providers/ChakraProvider";
import GlobalStateProvider from "@/providers/GlobalStateProvider";
import Favicon from "./favicon.ico";

export const metadata: Metadata = {
  title: "Fight Illicit Trade",
  description: "Pagbenta ng iligal na yosi, may multa at kulong!",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${titlingGothicFBCond.variable} 
          ${titlingGothicFBCondMedium.variable} 
          ${titlingGothicFBComp.variable} 
          ${soDoSans.variable}`}
      >
        <GlobalStateProvider>
          <Provider>{children}</Provider>
        </GlobalStateProvider>
      </body>
    </html>
  );
}
