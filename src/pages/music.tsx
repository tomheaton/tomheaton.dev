import {NextPage} from "next";
import Image from "next/image";
import React, {SyntheticEvent, useEffect} from "react";
import {getTheme, setTheme, toggleTheme} from "@utils/theme";
import Head from "next/head";
import Footer from "@components/Footer";
import {useMusic} from "@utils/hooks";
import {MusicType} from "@utils/types";
import MusicCard from "@components/MusicCard";

const Music: NextPage = () => {

    const {data, error, mutate} = useMusic();

    useEffect(() => {
        setTheme(getTheme())
    }, []);

    const handleToggleTheme = (e: SyntheticEvent) => {
        e.preventDefault();
        toggleTheme();
    }

    return (
        <div className={"min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white flex flex-col justify-between"}>
            <Head>
                <title>Music | Tom Heaton</title>
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
                    <div className={"border-t-4 my-4 border-mygreen"}/>
                    <p className={"text-xl"}>
                        Music
                    </p>
                </div>
                <div className={"w-4/5 md:w-2/5 mt-8 p-4 flex flex-col border-2 border-mygreen rounded-md"}>
                    <div className={"grid grid-cols-1 xl:grid-cols-2"}>
                        {data && data.data.map((music: MusicType, index: number) => (
                            <MusicCard key={index} music={music}/>
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

export default Music;