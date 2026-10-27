import type { Metadata } from "next";
import Script from "next/script";
import { nunito, stack_sana } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "TruHired — Next-Gen Career & Hiring Platform",
  description:
    "Join the TruHired waitlist. Experience a smarter, extraordinary way to connect top talent with dream opportunities.",
  openGraph: {
    title: "TruHired — Next-Gen Career & Hiring Platform",
    description:
      "Join the TruHired waitlist. Experience a smarter, extraordinary way to connect top talent with dream opportunities.",
    siteName: "TruHired",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TruHired — Next-Gen Career & Hiring Platform",
    description:
      "Join the TruHired waitlist. Experience a smarter, extraordinary way to connect top talent with dream opportunities.",
  },
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

