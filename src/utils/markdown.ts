import { getPinnedRepos } from "@/data/github";
import { getMusic } from "@/data/music";
import { getProject, type Project, type ProjectLink, projects } from "@/data/projects";
import { absoluteUrl, type InfoPage, infoPages, markdownPath, site } from "@/data/site";

function escapeText(text: string) {
  return text.replace(/([\\[\]*_`])/g, "\\$1");
}

function link(label: string, href: string) {
  return `[${escapeText(label)}](${href})`;
}

function mdUrl(path: string) {
  return absoluteUrl(markdownPath(path));
}

function linkList(links: ProjectLink[]) {
  return links.map((l) => `- ${link(l.label, l.href)}`).join("\n");
}

function doc(blocks: (string | false | undefined)[]) {
  return `${blocks.filter(Boolean).join("\n\n")}\n`;
}

function renderHome() {
  return doc([
    `# ${site.name}`,
    `> Software engineer at ${link(site.employer.name, site.employer.url)}. A working log of what I've built, broken, and shipped.`,
    "Open source software, a Formula Student team, a couple of small tools, and a Minecraft mod that got slightly out of hand.",
    "## Work",
    projects
      .map(
        (p) => `- ${link(p.name, mdUrl(`/work/${p.slug}`))} (${p.year}, ${p.role}): ${p.tagline}`,
      )
      .join("\n"),
    "## More",
    [
      `- ${link("About", mdUrl("/about"))}: background, work, and education`,
      `- ${link("Open source", mdUrl("/projects"))}: pinned GitHub repositories`,
      `- ${link("Music", mdUrl("/music"))}: what I'm listening to`,
      `- ${link("Contact", mdUrl("/contact"))}: email ${site.email}`,
      `- ${link("Privacy", mdUrl("/privacy"))}: what data this site collects`,
    ].join("\n"),
  ]);
}

function renderProject(project: Project) {
  return doc([
    `# ${project.name}`,
    `> ${project.tagline}`,
    `${project.role} · ${project.year} · ${link(project.domain, project.url)}`,
    project.stat,
    ...project.body,
    project.highlights.length > 0 && "## Highlights",
    project.highlights.length > 0 && project.highlights.map((h) => `- ${h}`).join("\n"),
    "## Links",
    linkList(project.links),
    project.press && project.press.length > 0 && "## In the press",
    project.press && project.press.length > 0 && linkList(project.press),
  ]);
}

function renderInfoPage(page: InfoPage) {
  return doc([
    `# ${page.title}`,
    page.intro,
    ...page.sections.flatMap((section) => [
      `## ${section.heading}`,
      ...section.paragraphs,
      section.links && linkList(section.links),
    ]),
  ]);
}

async function renderProjects() {
  const repos = await getPinnedRepos();

  return doc([
    "# Open source",
    `A few pinned repositories from ${link("GitHub", "https://github.com/tomheaton")}.`,
    repos.length > 0
      ? repos
          .map((repo) => {
            const details = [repo.language, `${repo.stars} stars`].filter(Boolean).join(", ");
            const description = repo.description ? `: ${repo.description}` : "";
            return `- ${link(`${repo.owner}/${repo.repo}`, repo.link)} (${details})${description}`;
          })
          .join("\n")
      : "No projects found right now.",
  ]);
}

async function renderMusic() {
  const tracks = await getMusic().catch(() => []);

  return doc([
    "# Music",
    "A live feed of what I've been listening to on Deezer.",
    tracks.length > 0
      ? tracks
          .map((track) => `- ${link(`${track.title} by ${track.artist}`, track.link)}`)
          .join("\n")
      : "No tracks found right now.",
  ]);
}

/** Markdown for a page path such as `/` or `/work/sparklayer`, or null when there is no page. */
export async function renderMarkdown(path: string): Promise<string | null> {
  if (path === "/") return renderHome();
  if (path === "/projects") return renderProjects();
  if (path === "/music") return renderMusic();

  const info = infoPages.find((page) => page.path === path);
  if (info) return renderInfoPage(info);

  const slug = path.match(/^\/work\/([^/]+)$/)?.[1];
  const project = slug ? getProject(slug) : undefined;
  if (project) return renderProject(project);

  return null;
}

export function renderNotFoundMarkdown(path: string) {
  const shown = path.replace(/[^\w\-./~%]/g, "").slice(0, 200) || "/";

  return doc([
    "# Page not found",
    `There is no page at \`${shown}\` on ${site.url.replace("https://", "")}. It may have been moved, renamed, or never existed.`,
    "Every page on this site is listed in these indexes:",
    [
      `- ${link("llms.txt", absoluteUrl("/llms.txt"))}: Markdown index of every page`,
      `- ${link("Sitemap", absoluteUrl("/sitemap.xml"))}`,
      `- ${link("Home", mdUrl("/"))}`,
    ].join("\n"),
  ]);
}

export function renderLlmsTxt() {
  return doc([
    `# ${site.name}`,
    `> Personal website of ${site.name}, a software engineer at ${site.employer.name} (B2B ecommerce) based in England, UK. It covers Tom's work, open source projects, and how to get in touch.`,
    `**When to use this site:** use it when you need first-hand information about ${site.name}: current role, projects built or maintained (SparkLayer, Carry Naloxone, Team Bath Racing Electric, GitHub Field Day, Simply Jetpacks 2, QR Calendar, and others), pinned open source repositories, or contact details. It is not a source of SparkLayer product documentation or support; use ${site.employer.url} for that.`,
    "**How to read it:** every page is available as Markdown. Request a page URL with the header `Accept: text/markdown`, or append `.md` to its path (`/index.md` for the home page). The links below point at the Markdown versions.",
    `**How to get in touch:** email ${site.email}. There is no contact form or public API for messages.`,
    "## Pages",
    [
      `- ${link("Home", mdUrl("/"))}: summary and list of projects`,
      `- ${link("About", mdUrl("/about"))}: background, work, and education`,
      `- ${link("Contact", mdUrl("/contact"))}: email and where to send different kinds of messages`,
      `- ${link("Open source", mdUrl("/projects"))}: pinned GitHub repositories`,
    ].join("\n"),
    "## Work",
    projects.map((p) => `- ${link(p.name, mdUrl(`/work/${p.slug}`))}: ${p.tagline}`).join("\n"),
    "## Optional",
    [
      `- ${link("Music", mdUrl("/music"))}: recent listening on Deezer`,
      `- ${link("Privacy", mdUrl("/privacy"))}: what data the site collects`,
      `- ${link("Sitemap", absoluteUrl("/sitemap.xml"))}`,
    ].join("\n"),
  ]);
}
