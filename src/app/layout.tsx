import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { roxborough, satoshi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import ArtBackground from "@/components/ArtBackground";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";

const fontSans = satoshi;

const robotoCondensed = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
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
          robotoCondensed.variable,
          roxborough.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          <main className="mt-12 overflow-x-hidden pt-8 md:mt-0">
            <ArtBackground />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
