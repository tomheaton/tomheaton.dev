import type { CardType } from "@/utils/types";
import React from "react";

const cardData: CardType[] = [
    {
        title: "Simply Jetpacks 2",
        description: "A Minecraft mod that adds Jetpacks and Fluxpacks",
        link: "https://www.curseforge.com/minecraft/mc-mods/simply-jetpacks-2",
    },
    {
        title: "Clear Cut Salon",
        description: "A website for a Hair Salon built with React",
        link: "https://www.clearcutsalon.co.uk",
    },
];

const Cards: React.FC = () => {
    return (
        <div className={"justify-content-center cards flex flex-wrap pt-20"}>
            {cardData.map((element, index) => (
                <div key={index} className={"m-2 w-[18rem] transition duration-[25ms] ease-in-out"}>
                    <a target={"_blank"} rel={"noopener noreferrer"} href={element.link}>
                        <img src={"/avatar.jpg"} alt={`${element.title} Logo`} width={"100px"} />
                        <p>{element.description}</p>
                    </a>
                </div>
            ))}
            <div className={"m-2 w-[18rem] transition duration-[25ms] ease-in-out"}>
                <div>
                    <br />
                    <p>Watch this space to see it fill up with all the projects I am working on!</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
