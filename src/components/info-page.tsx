import type { Metadata } from "next";
import { BackLink } from "@/components/back-link";
import { Dock } from "@/components/dock";
import { type InfoPage, site } from "@/data/site";
import { pageAlternates } from "@/utils/metadata";

export function infoPageMetadata(page: InfoPage): Metadata {
  return {
    title: `${page.title} · Tom Heaton`,
    description: page.description,
    alternates: pageAlternates(page.path),
  };
}

export function InfoPageView({ page }: { page: InfoPage }) {
  return (
    <main className="mx-auto max-w-135 px-6 pt-16 pb-32 sm:pt-24">
      <BackLink />

      <header>
        <h1 className="font-bold text-[24px] text-ink-strong leading-tight tracking-[-0.03em] sm:text-[28px]">
          {page.title}
        </h1>
        <p className="mt-2 text-[15px] text-ink-muted leading-[1.7]">{page.intro}</p>
      </header>

      {page.sections.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="mb-4 font-mono text-[13px] text-ink-label tracking-tight">
            {section.heading}
          </h2>
          <div className="flex flex-col gap-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[15px] text-ink-muted leading-[1.7]">
                {paragraph}
              </p>
            ))}
          </div>
          {section.links && section.links.length > 0 && (
            <div className="mt-3 flex flex-col gap-0">
              {section.links.map((link) => {
                const external = link.href.startsWith("http") && !link.href.startsWith(site.url);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group inline-flex w-fit items-center gap-1.5 py-2 font-medium text-[15px] text-ink no-underline transition-colors duration-150 hover:text-accent-dark"
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className="text-[12px] text-ink-faint transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-dark"
                    >
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          )}
        </section>
      ))}

      <Dock />
    </main>
  );
}
