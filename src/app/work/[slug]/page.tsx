import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/back-link";
import { Dock } from "@/components/dock";
import { Logo } from "@/components/logo";
import { Placeholder } from "@/components/placeholder";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { getProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;

  const project = getProject(slug);
  if (!project) {
    return {};
  }

  return {
    title: `${project.name} · Tom Heaton`,
    description: project.tagline,
  };
}

function SectionLabel({ children }: { children: string }) {
  return <p className="mb-4 font-mono text-[13px] text-ink-label tracking-tight">{children}</p>;
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-135 px-6 pt-16 pb-32 sm:pt-24">
      <BackLink />

      <header>
        <div className="mb-4 flex items-center gap-3.5">
          <Logo src={project.logo} name={project.name} />
          <div>
            <h1 className="font-bold text-[24px] text-ink-strong leading-tight tracking-[-0.03em] sm:text-[28px]">
              {project.name}
            </h1>
            <div className="mt-0.5 flex items-baseline gap-2">
              <span className="text-[14px] text-ink-muted">{project.role}</span>
              <span className="text-[14px] text-ink-faint">·</span>
              <span className="font-mono text-[12px] text-ink-faint tabular-nums">
                {project.year}
              </span>
            </div>
          </div>
        </div>
        <p className="mt-8 font-medium text-[17px] text-ink leading-[1.55] tracking-[-0.01em] sm:text-[19px]">
          {project.tagline}
        </p>
      </header>

      <figure className="mt-10 flex flex-col gap-2">
        <div className="relative w-full overflow-hidden rounded-xl border border-line bg-surface-alt">
          {project.hero ? (
            project.hero.type === "video" ? (
              <video
                src={project.hero.src}
                autoPlay
                muted
                loop
                playsInline
                className="block h-auto w-full"
              />
            ) : (
              // biome-ignore lint/performance/noImgElement: project hero
              <img src={project.hero.src} alt={project.name} className="block h-auto w-full" />
            )
          ) : (
            <Placeholder domain={project.domain} />
          )}
        </div>
        {project.hero?.caption && (
          <figcaption className="text-center text-[13px] text-ink-soft leading-snug">
            {project.hero.caption}
          </figcaption>
        )}
      </figure>

      {project.stat && (
        <div className="mt-8 inline-block rounded-lg bg-accent-tint px-3.5 py-2 font-mono text-[13px] text-accent-dark">
          {project.stat}
        </div>
      )}

      <div className="mt-10 flex flex-col gap-4">
        {project.body.map((paragraph) => (
          <p key={paragraph} className="text-[15px] text-ink-muted leading-[1.7]">
            {paragraph}
          </p>
        ))}
      </div>

      {project.highlights.length > 0 && (
        <div className="mt-12">
          <SectionLabel>Highlights</SectionLabel>
          <ul className="flex flex-col gap-2.5">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] text-ink-body leading-normal"
              >
                <span className="mt-2.25 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ScreenshotGallery screenshots={project.screenshots} />

      <div className="mt-12">
        <SectionLabel>Links</SectionLabel>
        <div className="flex flex-col gap-0">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
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
          ))}
        </div>
      </div>

      {project.press && project.press.length > 0 && (
        <div className="mt-12">
          <SectionLabel>In the press</SectionLabel>
          <div className="flex flex-col gap-0">
            {project.press.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-1.5 py-2 text-[15px] text-ink-muted no-underline transition-colors duration-150 hover:text-accent-dark"
              >
                {link.label}
                <span
                  aria-hidden
                  className="text-[12px] text-ink-faint transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-dark"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <Dock />
    </main>
  );
}
