import getAge from "../utils/age";
import SEO from "../components/seo";
import type {NextPage} from "next";
import Image from "next/image";
import {toWords} from "number-to-words";

const Index: NextPage = () => {

    const age = getAge(new Date("09/30/2002"));

    return (
        <div className={"h-screen bg-white text-black dark:bg-zinc-900 dark:text-white"}>
            <SEO />
            <main className={"w-full flex flex-col content-center items-center"}>
                <div className={"w-1/2 mt-20 h-96 p-10 flex flex-col border-2 border-mygreen rounded-md"}>
                    <div className={"flex items-center"}>
                        <div className={"max-h-[100px] max-w-[100px] rounded-full cursor-pointer"}>
                            <Image src={"/avatar.jpg"} width={100} height={100} alt={"Tom Heaton Avatar"}
                                   className={"rounded-full"} />
                        </div>
                        <h1 className={"ml-5 text-5xl font-bold"}>
                            Tom Heaton
                            {" "}
                            <span className={"text-3xl text-mygreen font-medium"}>
                                developer
                            </span>
                        </h1>
                    </div>
                    <div className={"border-t-4 my-4 border-mygreen"} />
                    <p className={"text-xl"}>
                        hey, I am a{age === 18 && "n"} {toWords(age)} year old who likes to code things.
                    </p>
                </div>
            </main>
            <footer className={"flex justify-center fixed bottom-0 left-0 right-0  text-center"}>
                <div className={"flex flex-col"}>
                    <div className={"text-[24px] space-x-4"}>
                        <a target={"_blank"} href={"https://www.github.com/tomheaton"} rel={"noopener noreferrer"}>
                            <i className={"bi bi-github"} aria-label={"Github"} />
                        </a>
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"https://www.discord.com/users/325306360004739072"}>
                            <i className={"bi bi-discord"} aria-label={"Discord"} />
                        </a>
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"https://www.twitter.com/tomheaton_"}>
                            <i className={"bi bi-twitter"} aria-label={"Twitter"} />
                        </a>
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"mailto:tom@tomheaton.dev"}>
                            <i className={"bi bi-envelope-fill"} aria-label={"Email"} />
                        </a>
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"https://www.linkedin.com/in/tom-heaton-39b107220/"}>
                            <i className={"bi bi-linkedin"} aria-label={"LinkedIn"} />
                        </a>
                    </div>
                    <p className={"p-2 text-lg"}>
                        &copy; Tom Heaton {new Date().getFullYear()}
                        {" "}
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"https://www.github.com/tomheaton/next-tomheaton-dev"}>
                            <i className={"bi bi-code-slash"} aria-label={"Source Code"} />
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Index;
