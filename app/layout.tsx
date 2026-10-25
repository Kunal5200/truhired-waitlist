import type { Metadata } from "next";
import { nunito, stack_sana } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Something Extraordinary Is Coming Soon",
  description:
    "Be the first to know when we launch. Join our community of early supporters and get exclusive updates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${stack_sana.variable} ${nunito.variable}`}>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}

