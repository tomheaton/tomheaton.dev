"use client";

import type {NextPage} from "next";
import React from "react";
import Footer from "@components/Footer";
import {useRepos} from "@utils/hooks";
import RepoCard from "@components/RepoCard";
import type {RepoType} from "@utils/types";
import Header from "@components/Header";

const Projects: NextPage = () => {
    const {data, error, mutate} = useRepos();

    return (
        <div className={"min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white flex flex-col justify-between"}>
            {/*<Head>
                <title>Projects | Tom Heaton</title>
            </Head>*/}

            <main className={"h-full w-full flex flex-col content-center items-center"}>
                <div className={"w-4/5 md:w-2/5 mt-20 min-h-96 p-10 flex flex-col border-2 border-mygreen rounded-md"}>
                    <Header/>
                    <div className={"border-t-4 my-4 border-mygreen"}/>
                    <p className={"text-xl"}>
                        Projects (currently pinned GitHub repos)
                    </p>
                </div>
                <div className={"w-4/5 md:w-2/5 mt-8 p-4 flex flex-col border-2 border-mygreen rounded-md"}>
                    <div className={"grid grid-cols-1 xl:grid-cols-2"}>
                        {data && data.data.map((repo: RepoType, index: number) => (
                            <RepoCard key={index} repo={repo}/>
                        ))}
                        {!data && (
                            <p className={"col-span-2"}>
                                loading
                            </p>
                        )}
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
}

export default Projects;
