import {getAge} from "@utils/utils";
import {NextPage} from "next";
import Image from "next/image";
import {toWords} from "number-to-words";
import React, {SyntheticEvent, useEffect} from "react";
import {getTheme, setTheme, toggleTheme} from "@utils/theme";
import Head from "next/head";

const Index: NextPage = () => {

    // const {data, error, mutate} = useRepos();

    const age: number = getAge(new Date("09/30/2002"));

    useEffect(() => {
        /*if (typeof window !== "undefined") {
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
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="canonical" href="https://tomheaton.dev"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                <link rel="manifest" href="/manifest.json"/>

                <meta charSet="utf-8"/>

                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {/*<meta name="color-scheme" content="dark light" />*/}
                {/*<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#212529" />*/}
                {/*<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />*/}
                <meta name="author" content="Tom Heaton"/>
                <meta name="description" content="Tom Heaton - Software Developer"/>
                <meta name="keywords" content="software developer, software, developer, code, coding, programmer, software programmer, webapp developer, web development, programming, technology, apps, software development, software engineer, programming software, application development, software design"/>

                <meta property="og:title" content="Tom Heaton"/>
                <meta property="og:description" content="Tom Heaton - Software Developer"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://tomheaton.dev/"/>
                <meta property="og:image" content="/avatar.jpg"/>
                <meta property="og:locale" content="en_GB"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@tomheaton_"/>
                <meta name="twitter:creator" content="@tomheaton_"/>
                <meta name="twitter:title" content="Tom Heaton"/>
                <meta name="twitter:description" content="Tom Heaton - Software Developer"/>
                <meta name="twitter:image" content="https://tomheaton.dev/avatar.jpg"/>
                <meta name="twitter:image:alt" content="Tom Heaton Avatar"/>

                <title>Tom Heaton</title>
            </Head>
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
                </div>
                {/*<div className={"w-4/5 md:w-2/5 mt-8 p-4 flex flex-col border-2 border-mygreen rounded-md"}>
                    <div className={"grid grid-cols-1 xl:grid-cols-2"}>
                        {data && data.data.map((repo: Repo, index: number) => {
                            return (<RepoCard key={index} repository={repo} />);
                        })}
                        {!data && (
                            <p className={"col-span-2"}>
                                loading
                            </p>
                        )}
                    </div>
                </div>*/}
            </main>
            <footer className={"flex justify-center text-center font-medium mt-10"}>
                <div className={"flex flex-col"}>
                    <div className={"text-[24px] space-x-4"}>
                        <a target={"_blank"} rel={"me external noopener noreferrer"} href={"https://www.github.com/tomheaton"}>
                            <i className={"bi bi-github"} aria-label={"GitHub"}/>
                        </a>
                        <a target={"_blank"} rel={"me external noopener noreferrer"} href={"https://www.discord.com/users/325306360004739072"}>
                            <i className={"bi bi-discord"} aria-label={"Discord"}/>
                        </a>
                        <a target={"_blank"} rel={"me external noopener noreferrer"} href={"https://www.twitter.com/tomheaton_"}>
                            <i className={"bi bi-twitter"} aria-label={"Twitter"}/>
                        </a>
                        <a target={"_blank"} rel={"me external noopener noreferrer"} href={"mailto:tom@tomheaton.dev"}>
                            <i className={"bi bi-envelope-fill"} aria-label={"Email"}/>
                        </a>
                        <a target={"_blank"} rel={"me external noopener noreferrer"} href={"https://www.linkedin.com/in/tomheaton7/"}>
                            <i className={"bi bi-linkedin"} aria-label={"LinkedIn"}/>
                        </a>
                    </div>
                    <p className={"p-2 text-lg"}>
                        &copy; Tom Heaton {new Date().getFullYear()}
                        {" "}
                        <a target={"_blank"} rel={"external noopener noreferrer"} href={"https://www.github.com/tomheaton/next-tomheaton-dev"}>
                            <i className={"bi bi-code-slash"} aria-label={"Source Code"}/>
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Index;
