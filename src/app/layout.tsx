import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomheaton.dev"),
  title: "Tom Heaton",
  description: "Tom Heaton - Software Engineer",
  authors: {
    name: "Tom Heaton",
    url: "https://tomheaton.dev",
  },
  keywords:
    "tom heaton, tomheaton, thomas heaton, tom, thomas, stormedpanda, software engineer, software developer, software, engineer, developer, code, coding, programmer, software programmer, webapp developer, web development, programming, technology, apps, software development, programming software, application development, software design, swe, open source, react, typescript, next.js, tailwindcss, react native, expo, git, github, github campus expert, gce, england, united kingdom",
  openGraph: {
    title: "Tom Heaton",
    description: "Tom Heaton - Software Engineer",
    type: "website",
    url: "https://tomheaton.dev",
    images: {
      url: "/tomheaton.png",
      alt: "Tom Heaton - Software Engineer",
    },
    locale: "en_GB",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Tom Heaton",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en-GB">
      <head>
        {/* TODO: remove this */}
        <script
          async
          src={`https://googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_KEY}`}
        />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: This is required for Google Analytics to work
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS_KEY}', {page_path: window.location.pathname});
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tomheaton.dev" />
      </head>
      <body className="bg-bg font-sans text-base text-ink leading-[1.55] antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
