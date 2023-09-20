import { getAge } from "@/utils";
import { toWords } from "number-to-words";

const PROJECT_DATA: {
  name: string;
  description: string;
  url: string;
}[] = [
    {
      name: "Carry Naloxone",
      description: "Find nearby naloxone suppliers and access information on how to use naloxone.",
      url: "https://carrynaloxoneuk.uk",
    },
    {
      name: "Clear Cut",
      description: "A website for Clear Cut, a hairdressers in Malmesbury.",
      url: "https://clearcutsalon.co.uk",
    },
  ];

export default function Page() {
  let ageText = toWords(getAge(new Date("09/30/2002")));
  ageText = ageText.charAt(0).toUpperCase() + ageText.slice(1);

  return (
    <main className="mx-auto flex w-2/3 flex-col lg:w-1/3">
      <p className="text-center text-xl">
        {/* {ageText} year old software engineer from the United Kingdom. */}
        Software engineer from the United Kingdom.
      </p>
      <br />
      <table>
        <tbody>
          {PROJECT_DATA.map((project, index) => (
            <tr key={index}>
              <td>
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
    </main>
  );
}
