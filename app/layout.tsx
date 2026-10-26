import type { Metadata } from "next";
import Script from "next/script";
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
      <body className={nunito.className}>
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-22SXLN63S9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-22SXLN63S9');
            `,
          }}
        />
      </body>
    </html>
  );
}

