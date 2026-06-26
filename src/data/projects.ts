export type ProjectLink = { label: string; href: string };

export type Screenshot = { src: string; alt: string };

export type ProjectHero = {
  type: "image" | "video";
  src: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  role: string;
  year: string;
  url: string;
  domain: string;
  logo?: string;
  tagline: string;
  hero?: ProjectHero;
  body: string[];
  highlights: string[];
  screenshots: Screenshot[];
  links: ProjectLink[];
  press?: ProjectLink[];
  stat?: string;
};

export const projects: Project[] = [
  {
    slug: "sparklayer",
    name: "SparkLayer",
    role: "Software engineer",
    year: "Present",
    url: "https://sparklayer.io",
    domain: "sparklayer.io",
    logo: "/logos/sparklayer.png",
    tagline: "B2B ecommerce, layered onto the store a brand already runs.",
    hero: { type: "image", src: "/screenshots/sparklayer.png" },
    body: [
      "Software engineer at SparkLayer, the B2B ecommerce platform used by 3,000+ brands. I work on the tools that turn an existing store into a proper wholesale ordering experience.",
      "Day-to-day that means building features across the buyer-facing storefront and the merchant-facing configuration, and keeping the whole thing fast and reliable at the scale our customers depend on.",
    ],
    highlights: [
      "Building wholesale ordering features on top of existing storefronts",
      "Working across buyer-facing and merchant-facing surfaces",
      "Shipping to a platform used by 3,000+ brands",
    ],
    screenshots: [
      {
        src: "/screenshots/sparklayer-demo.png",
        alt: "SparkLayer — wholesale ordering demo",
      },
    ],
    links: [{ label: "sparklayer.io", href: "https://sparklayer.io" }],
  },
  {
    slug: "china-global-environmental-leadership-database",
    name: "China's Global Environmental Leadership Database",
    role: "SGAIN project · University of Bath",
    year: "2026",
    url: "https://cgel.sgain.org",
    domain: "cgel.sgain.org",
    logo: "/logos/sgain.png",
    tagline: "First comprehensive database of China-led cross-border environmental governance.",
    hero: { type: "image", src: "/screenshots/sgain-cgel.png" },
    body: [
      "A SGAIN project at the University of Bath for exploring China-led cross-border environmental governance initiatives.",
    ],
    highlights: [
      "Comprehensive database of China-led cross-border environmental governance",
      "Browseable dataset with country, region, governance level, and environmental focus filters",
      "Interactive visualisations for collaboration patterns and temporal evolution",
    ],
    screenshots: [
      {
        src: "/screenshots/sgain-cgel-browse.png",
        alt: "China's Global Environmental Leadership Database - browse view",
      },
      {
        src: "/screenshots/sgain-cgel-methodology.png",
        alt: "China's Global Environmental Leadership Database - methodology view",
      },
    ],
    links: [{ label: "cgel.sgain.org", href: "https://cgel.sgain.org" }],
  },
  {
    slug: "github-field-day",
    name: "GitHub Field Day",
    role: "Organiser · developer",
    year: "2024",
    url: "https://githubfieldday.com",
    domain: "githubfieldday.com",
    logo: "/logos/github-field-day.svg",
    tagline: "An unconference for leaders of technical student communities.",
    hero: { type: "image", src: "/screenshots/github-field-day.png" },
    body: [
      "A regional unconference that brings together leaders of technical student communities to swap what's worked and what hasn't.",
    ],
    highlights: [
      "Regional unconference for student community leaders",
      "Format built around sharing what worked and what didn't",
    ],
    screenshots: [
      {
        src: "/screenshots/github-field-day-new.png",
        alt: "GitHub Field Day — unconference for student community leaders",
      },
    ],
    links: [{ label: "githubfieldday.com", href: "https://githubfieldday.com" }],
  },
  {
    slug: "carry-naloxone",
    name: "Carry Naloxone",
    role: "Software developer · Somerset Council research",
    year: "2023",
    url: "https://carrynaloxone.uk",
    domain: "carrynaloxone.uk",
    logo: "/logos/carry-naloxone.png",
    tagline: "The first naloxone-finder app of its kind in England.",
    hero: { type: "image", src: "/screenshots/carry-naloxone.png" },
    body: [
      "A mapping app that helps people find nearby naloxone suppliers and learn how to use them — the first of its kind in England. I built it as a University of Bath student for a Somerset Council research project.",
      "It launched on International Overdose Awareness Day in August 2023 and was covered by the BBC, Somerset Council, and the University of Bristol.",
    ],
    highlights: [
      "First-of-its-kind naloxone-finder app in England",
      "Built for a Somerset Council public-health research project",
      "Launched on International Overdose Awareness Day, Aug 2023",
      "Shipped on both the App Store and Google Play",
    ],
    screenshots: [
      {
        src: "/screenshots/carry-naloxone-map.png",
        alt: "Carry Naloxone — finding nearby suppliers on the map",
      },
      {
        src: "/screenshots/carry-naloxone-supplier.png",
        alt: "Carry Naloxone — supplier details",
      },
      {
        src: "/screenshots/carry-naloxone-suppliers.png",
        alt: "Carry Naloxone — list of nearby suppliers",
      },
      {
        src: "/screenshots/carry-naloxone-information.png",
        alt: "Carry Naloxone — how to use naloxone",
      },
    ],
    links: [
      { label: "carrynaloxone.uk", href: "https://carrynaloxone.uk" },
      {
        label: "App Store",
        href: "https://apps.apple.com/gb/app/carry-naloxone/id1644703593",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=dev.tomheaton.carrynaloxone",
      },
    ],
    press: [
      {
        label: "BBC News",
        href: "https://www.bbc.co.uk/news/uk-england-somerset-66651868",
      },
      {
        label: "Somerset Council",
        href: "https://www.somerset.gov.uk/news/new-campaign-urges-somerset-to-carry-naloxone-to-end-opioid-overdoses/",
      },
      {
        label: "Bristol Health Partners",
        href: "https://www.bristolhealthpartners.org.uk/news/first-of-its-kind-carry-naloxone-app-launches-to-help-save-lives/",
      },
      {
        label: "Turning Point",
        href: "https://www.turning-point.co.uk/news-and-insight-detail/overdose-awareness-day-naloxone-app",
      },
      {
        label: "University of Bristol",
        href: "https://www.bristol.ac.uk/primaryhealthcare/researchthemes/carry-naloxone-somerset/",
      },
    ],
  },

  {
    slug: "team-bath-racing-electric",
    name: "Team Bath Racing Electric",
    role: "AI team · website admin",
    year: "2021 - now",
    url: "https://teambathracingelectric.com",
    domain: "teambathracingelectric.com",
    logo: "/logos/team-bath-racing-electric.png",
    tagline: "The University of Bath's Formula Student electric racing team.",
    hero: { type: "image", src: "/screenshots/team-bath-racing-electric.png" },
    body: [
      "The University of Bath's Formula Student electric racing team. I was part of the team while studying Computer Science at Bath.",
    ],
    highlights: [
      "Member of Bath's Formula Student electric racing team",
      "Worked on the team alongside a Computer Science degree",
    ],
    screenshots: [
      {
        src: "/screenshots/team-bath-racing-electric-cars.png",
        alt: "Team Bath Racing Electric — the cars",
      },
    ],
    links: [{ label: "teambathracingelectric.com", href: "https://teambathracingelectric.com" }],
  },
  {
    slug: "clear-cut",
    name: "Clear Cut",
    role: "Client site",
    year: "2021 - now",
    url: "https://clearcutsalon.co.uk",
    domain: "clearcutsalon.co.uk",
    logo: "/logos/clear-cut.png",
    tagline: "A website for Clear Cut Hair Salon.",
    hero: { type: "image", src: "/screenshots/clear-cut.png" },
    body: ["A website I designed and built for Clear Cut Hair Salon."],
    highlights: ["Designed and built end-to-end for a local hair salon"],
    screenshots: [],
    links: [{ label: "clearcutsalon.co.uk", href: "https://clearcutsalon.co.uk" }],
  },
  {
    slug: "qr-calendar",
    name: "QR Calendar",
    role: "Solo tool",
    year: "2021",
    url: "https://qr-calendar.com",
    domain: "qr-calendar.com",
    logo: "/logos/qr-calendar.svg",
    tagline: "Make a calendar event, share it as a QR code.",
    hero: { type: "image", src: "/screenshots/qr-calendar.png" },
    body: [
      "A small tool to create calendar events and share them as QR codes. Built to scratch my own itch and left online for anyone who needs it.",
    ],
    highlights: [
      "Turns a calendar event into a shareable QR code",
      "Built as a personal tool, kept online for anyone to use",
    ],
    screenshots: [],
    links: [{ label: "qr-calendar.com", href: "https://qr-calendar.com" }],
  },
  {
    slug: "simply-jetpacks-2",
    name: "Simply Jetpacks 2",
    role: "Minecraft mod · maintainer",
    year: "2016 - now",
    url: "https://www.curseforge.com/minecraft/mc-mods/simply-jetpacks-2",
    domain: "curseforge.com/minecraft/mc-mods/simply-jetpacks-2",
    logo: "/logos/simply-jetpacks-2.png",
    tagline: "RF-powered, tier-based jetpacks for Minecraft.",
    hero: { type: "image", src: "/screenshots/simply-jetpacks-2.png" },
    body: [
      "A Minecraft mod that adds RF-powered, tier-based jetpacks. I maintain it — one of the longest-running projects I've worked on, now past 54 million downloads.",
    ],
    highlights: [
      "Adds RF-powered, tier-based jetpacks to Minecraft",
      "One of my longest-running projects, maintained since 2016",
      "Past 54 million downloads on CurseForge",
    ],
    screenshots: [
      {
        src: "/screenshots/simply-jetpacks-2-enderio.png",
        alt: "Simply Jetpacks 2 — Ender IO integration",
      },
      {
        src: "/screenshots/simply-jetpacks-2-vanilla.png",
        alt: "Simply Jetpacks 2 — Vanilla integration",
      },
    ],
    links: [
      {
        label: "CurseForge",
        href: "https://www.curseforge.com/minecraft/mc-mods/simply-jetpacks-2",
      },
      { label: "Source", href: "https://github.com/Tomson124/SimplyJetpacks2" },
      { label: "Video", href: "https://www.youtube.com/watch?v=9bhLTkQrrEQ" },
    ],
    stat: "54.3M downloads on CurseForge 🚀",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
