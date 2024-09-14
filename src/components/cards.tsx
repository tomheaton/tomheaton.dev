import type { CardData } from "@/utils/types";
import Image from "next/image";

const cardData: CardData[] = [
  {
    title: "Simply Jetpacks 2",
    description: "A Minecraft mod that adds Jetpacks and Fluxpacks",
    link: "https://curseforge.com/minecraft/mc-mods/simply-jetpacks-2",
  },
  {
    title: "Clear Cut Salon",
    description:
      "A website for a hair salon built with Next.js and TailwindCSS",
    link: "https://clearcutsalon.co.uk",
  },
];

export default function Cards() {
  return (
    <div className="justify-content-center cards flex flex-wrap pt-20">
      {cardData.map((element, index) => (
        <div
          key={index}
          className="m-2 w-[18rem] transition duration-[25ms] ease-in-out"
        >
          <a
            target="_blank"
            rel="external noopener noreferrer"
            href={element.link}
          >
            <Image
              height={100}
              width={100}
              src="/avatar.jpg"
              alt={`${element.title} Logo`}
            />
            <p>{element.description}</p>
          </a>
        </div>
      ))}
      <div className="m-2 w-[18rem] transition duration-[25ms] ease-in-out">
        <div>
          <br />
          <p>
            Watch this space to see it fill up with all the projects I am
            working on!
          </p>
        </div>
      </div>
    </div>
  );
}
