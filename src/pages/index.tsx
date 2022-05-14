import getAge from "@utils/age";
import SEO from "@components/seo";
import {NextPage} from "next";
import Image from "next/image";
import {toWords} from "number-to-words";
import {SyntheticEvent, useEffect} from "react";
import {getTheme, setTheme, toggleTheme} from "@utils/theme";
import {useRepos} from "@utils/hooks";
import {Repo} from "@utils/types";
import RepoCard from "@components/RepoCard";

const Index: NextPage = () => {

    const {data, error, mutate} = useRepos();

    const age: number = getAge(new Date("09/30/2002"));

    useEffect(() => {
/*        if (typeof window !== "undefined") {
            window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
                setTheme(e.matches ? "light" : "dark");
            });
        }*/
        setTheme(getTheme())
    }, []);

    const handleToggleTheme = (e: SyntheticEvent) => {
        e.preventDefault();
        toggleTheme();
    }

    return (
        <div className={"min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white flex flex-col justify-between"}>
            <SEO />
            <main className={"h-full w-full flex flex-col content-center items-center"}>
                <div className={"w-4/5 md:w-2/5 mt-20 min-h-96 p-10 flex flex-col border-2 border-mygreen rounded-md"}>
                    <div className={"flex flex-col md:flex-row items-center text-center w-full"}>
                        <div className={"w-1/3 rounded-full cursor-pointer"}>
                            <Image src={"/avatar.jpg"} width={100} height={100} alt={"Tom Heaton Avatar"}
                                   onClick={handleToggleTheme} className={"rounded-full"}
                            />
                        </div>
                        <h1 className={"w-2/3 mx-5 text-4xl md:text-5xl font-bold"}>
                            Tom Heaton
                            {" "}
                            <span className={"text-3xl text-mygreen font-medium"}>
                                developer
                            </span>
                        </h1>
                    </div>
                    <div className={"border-t-4 my-4 border-mygreen"} />
                    <p className={"text-xl"}>
                        Hey, I am a {toWords(age)} year old software developer from the United Kingdom.
                    </p>
                    {/*<div className={"border-t-4 my-4 border-mygreen"} />*/}
                    <ul>
                        {data && data.data.map((repo: Repo, index: number) => {
                            return (
                                <li key={index} id={`${index}`}>
                                    {JSON.stringify(repo, null, 4)}
                                    {/*<RepoCard repository={repo}/>*/}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={"w-4/5 md:w-2/5 mt-8 min-h-96 p-10 flex flex-col border-2 border-mygreen rounded-md"}>
                    <div className={"grid grid-cols-1 xl:grid-cols-2"}>
                        <div className={"p-4 m-4 border-2 border-red-500"}>
                            <h3>
                                item
                            </h3>
                        </div>
                        <div className={"p-4 m-4 border-2 border-red-500"}>
                            <h3>
                                item
                            </h3>
                        </div>
                        <div className={"p-4 m-4 border-2 border-red-500"}>
                            <h3>
                                item
                            </h3>
                        </div>
                        <div className={"p-4 m-4 border-2 border-red-500"}>
                            <h3>
                                item
                            </h3>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={"flex justify-center text-center font-medium mt-10"}>
                <div className={"flex flex-col"}>
                    <div className={"text-[24px] space-x-4"}>
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"https://www.github.com/tomheaton"}
                        >
                            <i className={"bi bi-github"} aria-label={"GitHub"} />
                        </a>
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"https://www.discord.com/users/325306360004739072"}
                        >
                            <i className={"bi bi-discord"} aria-label={"Discord"} />
                        </a>
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"https://www.twitter.com/tomheaton_"}
                        >
                            <i className={"bi bi-twitter"} aria-label={"Twitter"} />
                        </a>
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"mailto:tom@tomheaton.dev"}
                        >
                            <i className={"bi bi-envelope-fill"} aria-label={"Email"} />
                        </a>
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"https://www.linkedin.com/in/tomheaton7/"}
                        >
                            <i className={"bi bi-linkedin"} aria-label={"LinkedIn"} />
                        </a>
                    </div>
                    <p className={"p-2 text-lg"}>
                        &copy; Tom Heaton {new Date().getFullYear()}
                        {" "}
                        <a target={"_blank"} rel={"noopener noreferrer"}
                           href={"https://www.github.com/tomheaton/next-tomheaton-dev"}
                        >
                            <i className={"bi bi-code-slash"} aria-label={"Source Code"} />
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Index;
