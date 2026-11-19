import type { ProjectLink } from "@/data/projects";

export const site = {
  name: "Tom Heaton",
  url: "https://tomheaton.dev",
  email: "tom@tomheaton.dev",
  jobTitle: "Software Engineer",
  title: "Tom Heaton · Software Engineer",
  description:
    "Tom Heaton is a software engineer at SparkLayer in the UK, building web and mobile apps with React, TypeScript, and Next.js.",
  employer: { name: "SparkLayer", url: "https://sparklayer.io" },
  alumniOf: { name: "University of Bath", url: "https://www.bath.ac.uk" },
  country: "GB",
  region: "England",
  socials: [
    { label: "GitHub", href: "https://github.com/tomheaton" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tomheaton7" },
    { label: "X", href: "https://x.com/tomheaton_" },
  ],
} as const;

export function absoluteUrl(path = "/") {
  return path === "/" ? site.url : `${site.url}${path}`;
}

/** The Markdown sibling of a page, e.g. `/about` -> `/about.md`, `/` -> `/index.md`. */
export function markdownPath(path: string) {
  return path === "/" ? "/index.md" : `${path}.md`;
}

type InfoSection = {
  heading: string;
  paragraphs: string[];
  links?: ProjectLink[];
};

export type InfoPage = {
  path: string;
  title: string;
  description: string;
  intro: string;
  sections: InfoSection[];
};

export const aboutPage: InfoPage = {
  path: "/about",
  title: "About",
  description: "About Tom Heaton, a software engineer at SparkLayer.",
  intro:
    "I'm Tom Heaton, a software engineer based in England. I build web and mobile apps, mostly with React, TypeScript, Next.js, Tailwind CSS, React Native, and Expo.",
  sections: [
    {
      heading: "Work",
      paragraphs: [
        "I'm a software engineer at SparkLayer, the B2B ecommerce platform used by 3,000+ brands. I build the features that turn a brand's existing store into a wholesale ordering experience, across the buyer-facing storefront and the merchant-facing configuration.",
        "Outside of my day job I take on the occasional client site, such as the website for Clear Cut Hair Salon, and build small tools like QR Calendar, which turns a calendar event into a shareable QR code.",
      ],
    },
    {
      heading: "University of Bath",
      paragraphs: [
        "I studied Computer Science at the University of Bath. While there I was part of Team Bath Racing Electric, the university's Formula Student electric racing team, working on the AI team and running the team website.",
        "As a student I built Carry Naloxone for a Somerset Council public-health research project. It is the first naloxone-finder app of its kind in England, launched on International Overdose Awareness Day in August 2023, and was covered by the BBC.",
        "I was also a GitHub Campus Expert and helped organise GitHub Field Day, an unconference for leaders of technical student communities. More recently I built China's Global Environmental Leadership Database for SGAIN at the University of Bath.",
      ],
    },
    {
      heading: "Open source",
      paragraphs: [
        "I've maintained Simply Jetpacks 2, a Minecraft mod that adds RF-powered, tier-based jetpacks, since 2016. It has passed 54 million downloads on CurseForge. The rest of my open source work lives on GitHub.",
      ],
      links: [
        { label: "Projects", href: absoluteUrl("/projects") },
        { label: "GitHub", href: "https://github.com/tomheaton" },
      ],
    },
  ],
};

export const contactPage: InfoPage = {
  path: "/contact",
  title: "Contact",
  description: "How to get in touch with Tom Heaton.",
  intro:
    "The best way to reach me is by email at tom@tomheaton.dev. This page lists where to send different kinds of messages.",
  sections: [
    {
      heading: "Email",
      paragraphs: [
        "Email works for anything: questions about one of my projects, freelance or collaboration enquiries, speaking or community events, or just saying hello. Including a bit of context about who you are and what you're after helps me reply properly.",
      ],
      links: [{ label: site.email, href: `mailto:${site.email}` }],
    },
    {
      heading: "Projects and bug reports",
      paragraphs: [
        "For bugs or feature requests in one of my open source projects, such as Simply Jetpacks 2, please open an issue on that project's GitHub repository so the discussion stays public and searchable for other users.",
        "I work at SparkLayer, but this site is personal. For help with the SparkLayer product or a SparkLayer account, contact SparkLayer directly through sparklayer.io.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/tomheaton" },
        { label: "sparklayer.io", href: "https://sparklayer.io" },
      ],
    },
    {
      heading: "Elsewhere",
      paragraphs: [
        "You can also find me on LinkedIn and X. I'm based in England, United Kingdom, and don't publish a postal address or phone number.",
      ],
      links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/tomheaton7" },
        { label: "X", href: "https://x.com/tomheaton_" },
      ],
    },
  ],
};

export const privacyPage: InfoPage = {
  path: "/privacy",
  title: "Privacy",
  description: "What data tomheaton.dev collects and how it is used.",
  intro:
    "This is a personal website run by Tom Heaton. It has no accounts, forms, or newsletters, so it collects very little about you. This page explains what is collected and why.",
  sections: [
    {
      heading: "Analytics",
      paragraphs: [
        "The site uses Google Analytics to count page views and understand which pages people read. Google Analytics sets cookies in your browser and processes your IP address and device information on Google's servers.",
        "The site also uses Vercel Web Analytics and Vercel Speed Insights, which collect anonymous, aggregated page view and performance data without cookies.",
      ],
    },
    {
      heading: "Hosting",
      paragraphs: [
        "The site is hosted on Vercel. Like any web server, Vercel processes your IP address, browser user agent, and the pages you request in order to serve the site and protect it from abuse.",
        "The projects and music pages show data that the server fetches from GitHub and Deezer. Your browser doesn't contact those services unless you follow a link to them.",
      ],
    },
    {
      heading: "Email",
      paragraphs: [
        "If you email me, I keep your message and email address so I can reply. I don't add you to any mailing list or share your details with anyone else.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can block or delete cookies in your browser settings, or use an extension that blocks analytics; the site works the same either way. To ask about or delete any data I hold about you, email tom@tomheaton.dev.",
      ],
    },
  ],
};

export const infoPages = [aboutPage, contactPage, privacyPage];
