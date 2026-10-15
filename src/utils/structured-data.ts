import { absoluteUrl, contactPage, site } from "@/data/site";

const personId = `${site.url}/#person`;

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: site.url,
        image: absoluteUrl("/avatar.jpg"),
        description: site.description,
        jobTitle: site.jobTitle,
        email: `mailto:${site.email}`,
        worksFor: {
          "@type": "Organization",
          name: site.employer.name,
          url: site.employer.url,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: site.alumniOf.name,
          url: site.alumniOf.url,
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: site.region,
          addressCountry: site.country,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "personal",

          email: site.email,
          url: absoluteUrl(contactPage.path),
          availableLanguage: "en",
        },
        knowsAbout: ["Software engineering", "React", "TypeScript", "Next.js", "React Native"],
        sameAs: site.socials.map((social) => social.href),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en-GB",
        author: { "@id": personId },
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profile`,
        url: site.url,
        name: site.title,
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: { "@id": personId },
      },
    ],
  };
}

/** Serialises JSON-LD for a `<script>` tag, escaping `<` so the data can't close the tag. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
