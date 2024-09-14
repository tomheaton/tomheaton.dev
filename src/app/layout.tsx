import "@/styles/globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
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
  twitter: {
    card: "summary_large_image",
    site: "@tomheaton_",
    creator: "@tomheaton_",
    title: "Tom Heaton",
    description: "Tom Heaton - Software Engineer",
    images: {
      url: "/tomheaton.png",
      alt: "Tom Heaton - Software Engineer",
    },
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
  themeColor: "#66b193",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/* TODO: remove this */}
        <script
          async
          src={`https://googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_KEY}`}
        />
        <script
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
      <body className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">
        <Header />
        <div className="mx-auto my-4 w-2/3 border-t-4 border-myGreen lg:w-1/3" />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
