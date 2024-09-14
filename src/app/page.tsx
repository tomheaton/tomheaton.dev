// import { getAge } from "@/utils";
// import { toWords } from "number-to-words";
import { Fragment } from "react";

const projectData: {
  name: string;
  description: string;
  url?: string;
}[] = [
  {
    name: "GitHub Field Day",
    description:
      "A regional unconference for leaders of technical student communities.",
    url: "https://githubfieldday.com",
  },
  {
    name: "Kampeign",
    description: "Reshaping digital marketing campaigns.",
    url: "https://kampeign.com",
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
];

export default async function Page() {
  // let ageText = toWords(getAge(new Date("09/30/2002")));
  // ageText = ageText.charAt(0).toUpperCase() + ageText.slice(1);

  return (
    <main className="mx-auto flex w-2/3 flex-col lg:w-1/3">
      {/* <h2 className="text-2xl font-bold tracking-tight">About</h2>
      <p>
        I&apos;m a {ageText} year old software engineer from the United Kingdom.
      </p>
      <br /> */}
      {/* <p className="text-center text-xl"> */}
      {/* {ageText} year old software engineer from the United Kingdom. */}
      {/* Software engineer from the United Kingdom. */}
      {/* </p> */}
      {/* <br /> */}
      {/* <h2 className="text-2xl font-bold tracking-tight">Work</h2> */}
      {/* <table>
        <tbody>
          {projectData.map((project, index) => (
            <tr key={index}>
              <td className="w-32">
                <a
                  target="_blank"
                  rel="external noopener noreferrer"
                  href={project.url}
                  aria-label={project.name}
                  className="font-semibold"
                >
                  {project.name}
                </a>
              </td>
              <td>{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
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
      {/* <br /> */}
      {/* <h2 className="text-3xl font-bold tracking-tight">Music</h2> */}
    </main>
  );
}
