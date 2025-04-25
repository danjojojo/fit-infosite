import type { Metadata } from "next";
import { titlingGothicFBCond, titlingGothicFBComp, soDoSans } from "@/ui/fonts";
import "./globals.css";
import { Provider } from "@/providers/ChakraProvider";

export const metadata: Metadata = {
  title: "Fight Illicit Trade",
  description: "Pagbenta ng iligal na yosi, may multa at kulong!",
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
          ${titlingGothicFBComp.variable} 
          ${soDoSans.variable}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
