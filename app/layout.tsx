import type { Metadata } from "next";
import Script from "next/script";
import { nunito, stack_sana } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Something Extraordinary Is Coming Soon",
  description:
    "Be the first to know when we launch. Join our community of early supporters and get exclusive updates.",
  icons: {
    icon: [
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
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
        <Script
          id="theme-favicon-sync"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var matcher = window.matchMedia('(prefers-color-scheme: dark)');
                  function updateIcon() {
                    var isDark = matcher.matches;
                    var activeHref = isDark ? '/favicon-dark.png' : '/favicon-light.png';
                    var existing = document.getElementById('dynamic-theme-favicon');
                    if (!existing) {
                      existing = document.createElement('link');
                      existing.id = 'dynamic-theme-favicon';
                      existing.rel = 'icon';
                      document.head.appendChild(existing);
                    }
                    existing.href = activeHref;
                  }
                  if (matcher.addEventListener) {
                    matcher.addEventListener('change', updateIcon);
                  } else if (matcher.addListener) {
                    matcher.addListener(updateIcon);
                  }
                  updateIcon();
                } catch(e) {}
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

