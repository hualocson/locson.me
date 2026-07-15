import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.woff2",
      weight: "500 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.woff2",
      weight: "500 900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const roxborough = localFont({
  src: [
    {
      path: "../../public/fonts/roxborough/RoxboroughCF-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/roxborough/RoxboroughCF-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-roxborough",
  display: "swap",
});
