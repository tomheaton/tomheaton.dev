import Link from "next/link";
import { Dock } from "@/components/dock";
import { Logo } from "@/components/logo";
import { ProfileAvatar } from "@/components/profile-avatar";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <main className="mx-auto max-w-135 px-6 pt-16 pb-32 sm:pt-24">
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
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex items-center gap-3.5 rounded-xl px-3 py-3 no-underline transition-colors duration-150 hover:bg-black/2"
          >
            <Logo src={project.logo} name={project.name} size={40} />
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-[15px] text-ink tracking-[-0.01em] transition-colors duration-150 group-hover:text-ink-strong">
                {project.name}
              </div>
              <div className="truncate text-[13px] text-ink-soft">{project.role}</div>
            </div>
            <span className="shrink-0 font-mono text-[12px] text-ink-faint tabular-nums">
              {project.year}
            </span>
            <span
              aria-hidden
              className="shrink-0 text-ink-faint transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-accent-dark"
            >
              →
            </span>
          </Link>
        ))}
      </div>

      <Dock />
    </main>
  );
}
