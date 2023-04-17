import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomheaton.dev"),
  title: "Tom Heaton",
  description: "Tom Heaton - Software Developer",
  authors: {
    name: "Tom Heaton",
    url: "https://tomheaton.dev",
  },
  keywords:
    "tom heaton, tomheaton, stormedpanda, software developer, software, developer, code, coding, programmer, software programmer, webapp developer, web development, programming, technology, apps, software development, software engineer, programming software, application development, software design, swe, open source, react, typescript, next.js, tailwindcss, react native, expo, git, github, github campus expert, gce, england, united kingdom",
  themeColor: "#66b193",
  openGraph: {
    title: "Tom Heaton",
    description: "Tom Heaton - Software Developer",
    type: "website",
    url: "https://tomheaton.dev",
    images: {
      url: "/avatar.jpg",
      alt: "Tom Heaton Avatar",
    },
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tomheaton_",
    creator: "@tomheaton_",
    title: "Tom Heaton",
    description: "Tom Heaton - Software Developer",
    images: {
      url: "/avatar.jpg",
      alt: "Tom Heaton Avatar",
    },
  },
  viewport: "width=device-width, initial-scale=1",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Tom Heaton",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_KEY}`}
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
      <body>
        <div className="flex min-h-screen flex-col justify-between bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
