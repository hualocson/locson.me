import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";

import { cn } from "@/lib/utils";

import ArtBackground from "@/components/ArtBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import CmdK from "@/components/cmdk";

import "./globals.css";

const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loc Son",
  description:
    "Personal website of Locson - A passionate developer building beautiful web experiences with Next.js, React, and TypeScript.",
  other: {
    appMobileWebAppTitle: "LocSon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={cn(
          `antialiased`,
          fontSans.variable,
          robotoCondensed.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          <main className="mt-16 overflow-x-hidden px-7 py-10">
            <ArtBackground />
            {children}
            <Footer />
          </main>

          <CmdK />
        </ThemeProvider>
      </body>
    </html>
  );
}
