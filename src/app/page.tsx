import { Fragment } from "react";

const projectData: {
  name: string;
  description: string;
  url: string;
}[] = [
  {
    name: "GitHub Field Day",
    description:
      "A regional unconference for leaders of technical student communities.",
    url: "https://githubfieldday.com",
  },
  {
    name: "Carry Naloxone",
    description:
      "Find nearby naloxone suppliers and access information on how to use naloxone.",
    url: "https://carrynaloxone.uk",
  },
  {
    name: "QR Calendar",
    description: "Create calendar events and share them via QR Codes.",
    url: "https://qr-calendar.com",
  },
  {
    name: "Simply Jetpacks 2",
    description: "A Minecraft mod that adds jetpacks.",
    url: "https://curseforge.com/minecraft/mc-mods/simply-jetpacks-2",
  },
  {
    name: "Clear Cut",
    description: "A website for Clear Cut Hair Salon.",
    url: "https://clearcutsalon.co.uk",
  },
] as const;

export default async function Page() {
  return (
    <main className="mx-auto flex w-2/3 flex-col lg:w-1/3">
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-2 gap-2">
        {projectData.map((project, index) => (
          <Fragment key={index}>
            {project.url ? (
              <a
                target="_blank"
                rel="external noopener noreferrer"
                href={project.url}
                aria-label={project.name}
                className="font-semibold"
              >
                {project.name}
              </a>
            ) : (
              <p className="font-semibold">{project.name}</p>
            )}
            <p className="lg:col-span-3">{project.description}</p>
          </Fragment>
        ))}
      </div>
    </main>
  );
}
