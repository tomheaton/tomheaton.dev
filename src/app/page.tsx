import type { Metadata } from "next";
import Link from "next/link";
import { Dock } from "@/components/dock";
import { Logo } from "@/components/logo";
import { ProfileAvatar } from "@/components/profile-avatar";
import { projects } from "@/data/projects";
import { aboutPage, contactPage, privacyPage } from "@/data/site";
import { pageAlternates } from "@/utils/metadata";
import { homeJsonLd, serializeJsonLd } from "@/utils/structured-data";

export const metadata: Metadata = {
  alternates: pageAlternates("/"),
};

export default function Page() {
  return (
    <main className="mx-auto max-w-135 px-6 pt-16 pb-32 sm:pt-24">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data, escaped by serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd()) }}
      />
      <header className="flex items-center gap-3.5">
        <ProfileAvatar />
        <div>
          <h1 className="font-bold text-[20px] text-ink-strong leading-tight tracking-[-0.02em]">
            Tom Heaton
          </h1>
          <p className="text-[14px] text-ink-muted">
            Software engineer at{" "}
            <a
              href="https://sparklayer.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-dark no-underline hover:underline"
            >
              SparkLayer
            </a>
          </p>
        </div>
      </header>

      <p className="mt-8 font-medium text-[17px] text-ink leading-[1.55] tracking-[-0.01em]">
        A working log of what I've built, broken, and shipped.
      </p>
      <p className="mt-3 text-[15px] text-ink-muted leading-[1.7]">
        Open source software, a Formula Student team, a couple of small tools, and a Minecraft mod
        that got slightly out of hand. Also a peek at my{" "}
        <Link href="/projects" className="text-accent-dark no-underline hover:underline">
          open source
        </Link>{" "}
        and the{" "}
        <Link href="/music" className="text-accent-dark no-underline hover:underline">
          music
        </Link>{" "}
        I'm listening to.
      </p>

      <div className="-mx-3 mt-12 flex flex-col">
        {projects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="project-row group">
            <Logo src={project.logo} name={project.name} size={40} />
            <div className="min-w-0 flex-1">
              <div className="project-row-name">{project.name}</div>
              <div className="project-row-role">{project.role}</div>
            </div>
            <span className="project-row-year">{project.year}</span>
            <span aria-hidden className="project-row-arrow">
              →
            </span>
          </Link>
        ))}
      </div>

      <nav aria-label="About this site" className="mt-12 flex gap-5">
        {[aboutPage, contactPage, privacyPage].map((page) => (
          <Link
            key={page.path}
            href={page.path}
            className="text-[13px] text-ink-soft no-underline transition-colors duration-150 hover:text-ink"
          >
            {page.title}
          </Link>
        ))}
      </nav>

      <Dock />
    </main>
  );
}
