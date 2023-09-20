import { getAge } from "@/utils";
import { toWords } from "number-to-words";

const PROJECT_DATA: {
  name: string;
  description: string;
  url: string;
}[] = [
    // {
    //   name: "Kampeign",
    //   description: "Reshaping digital marketing campaigns.",
    //   url: "https://kampeign.com",
    // },
    {
      name: "Carry Naloxone",
      description: "Find nearby naloxone suppliers and access information on how to use naloxone.",
      url: "https://carrynaloxone.uk",
    },
    {
      name: "Clear Cut",
      description: "A website for Clear Cut, a hairdressers in Malmesbury.",
      url: "https://clearcutsalon.co.uk",
    },
  ];

export default async function Page() {
  let ageText = toWords(getAge(new Date("09/30/2002")));
  ageText = ageText.charAt(0).toUpperCase() + ageText.slice(1);

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
      <h2 className="text-2xl font-bold tracking-tight">Work</h2>
      <table>
        <tbody>
          {PROJECT_DATA.map((project, index) => (
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
      </table>
      {/* <br /> */}
      {/* <h2 className="text-3xl font-bold tracking-tight">Music</h2> */}
    </main>
  );
}
