import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import HomePage from "@/app/page";
import PrivacyPage from "@/app/privacy/page";

function jsonLd(html: string) {
  const match = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
  if (!match?.[1]) throw new Error("no JSON-LD script found");
  return JSON.parse(match[1]);
}

function visibleText(html: string) {
  return html
    .replace(/<script\b.*?<\/script>/gs, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

describe("home page", () => {
  const html = renderToStaticMarkup(<HomePage />);

  it("embeds Person JSON-LD with identity, contact and address", () => {
    const person = jsonLd(html)["@graph"].find(
      (node: { "@type": string }) => node["@type"] === "Person",
    );

    expect(person).toMatchObject({
      name: "Tom Heaton",
      url: "https://tomheaton.dev",
      jobTitle: "Software Engineer",
      worksFor: { "@type": "Organization", name: "SparkLayer" },
      contactPoint: { "@type": "ContactPoint", email: "tom@tomheaton.dev" },
      address: { "@type": "PostalAddress", addressCountry: "GB" },
    });
    expect(person.contactPoint.contactType).toBeTruthy();
    expect(person.sameAs).toEqual(
      expect.arrayContaining([
        "https://github.com/tomheaton",
        "https://linkedin.com/in/tomheaton7",
      ]),
    );
  });

  it("links to the about, contact and privacy pages", () => {
    for (const path of ["/about", "/contact", "/privacy"]) {
      expect(html).toContain(`href="${path}"`);
    }
  });

  it("serves at least 500 characters of text under a single H1", () => {
    expect(visibleText(html).length).toBeGreaterThanOrEqual(500);
    expect(html.match(/<h1\b/g)).toHaveLength(1);
  });
});

describe.each([
  ["about", AboutPage, "About"],
  ["contact", ContactPage, "Contact"],
  ["privacy", PrivacyPage, "Privacy"],
])("%s page", (_name, Page, title) => {
  const html = renderToStaticMarkup(<Page />);

  it("has at least 500 characters of content", () => {
    expect(visibleText(html).length).toBeGreaterThanOrEqual(500);
  });

  it("uses one H1 followed only by H2s", () => {
    expect(html).toContain(`>${title}</h1>`);
    const levels = [...html.matchAll(/<h([1-6])\b/g)].map(([, level]) => Number(level));
    expect(levels[0]).toBe(1);
    expect(levels.slice(1).every((level) => level === 2)).toBe(true);
    expect(levels.length).toBeGreaterThan(1);
  });
});

it("contact page shows the email address", () => {
  expect(renderToStaticMarkup(<ContactPage />)).toContain("mailto:tom@tomheaton.dev");
});
