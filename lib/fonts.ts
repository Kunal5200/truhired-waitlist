import { Nunito, Stack_Sans_Notch } from "next/font/google";

export const stack_sana = Stack_Sans_Notch({
  subsets: ["latin"],
  variable: "--font-stack-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
