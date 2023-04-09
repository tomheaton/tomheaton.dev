import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Tom Heaton",
  description: "Tom Heaton - Software Developer",
  authors: {
    name: "Tom Heaton",
    url: "https://tomheaton.dev",
  },
  keywords:
    "software developer, software, developer, code, coding, programmer, software programmer, webapp developer, web development, programming, technology, apps, software development, software engineer, programming software, application development, software design",
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
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang={"en"}>
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
                        gtag('config', '${process.env.GOOGLE_ANALYTICS_KEY}', {page_path: window.location.pathname});`,
          }}
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tomheaton.dev" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/*<link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
            />*/}

        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<meta name="color-scheme" content="dark light" />*/}
        {/*<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#212529" />*/}
        {/*<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />*/}
        {/* <meta name="author" content="Tom Heaton" /> */}
        {/* <meta name="description" content="Tom Heaton - Software Developer" /> */}
        {/* <meta
          name="keywords"
          content="software developer, software, developer, code, coding, programmer, software programmer, webapp developer, web development, programming, technology, apps, software development, software engineer, programming software, application development, software design"
        /> */}

        {/* <meta property="og:title" content="Tom Heaton" />
        <meta property="og:description" content="Tom Heaton - Software Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tomheaton.dev/" />
        <meta property="og:image" content="/avatar.jpg" />
        <meta property="og:locale" content="en_GB" /> */}

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tomheaton_" />
        <meta name="twitter:creator" content="@tomheaton_" />
        <meta name="twitter:title" content="Tom Heaton" />
        <meta name="twitter:description" content="Tom Heaton - Software Developer" />
        <meta name="twitter:image" content="https://tomheaton.dev/avatar.jpg" />
        <meta name="twitter:image:alt" content="Tom Heaton Avatar" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
