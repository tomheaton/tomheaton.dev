import React from "react";
import Footer from "@components/Footer";
import Header from "@components/Header";
import type {MusicType} from "@utils/types";
import MusicCard from "@components/MusicCard";

const getMusic = async () => {
    const response = await fetch("https://api.deezer.com/user/844148065/flow");
    const data = await response.json();

    // return [];

    if (!data || !data.data) {
        return [];
    }

    let musicData: MusicType[] = [];

    data.data.forEach((music: any) => {
        if (music.type === "track") {
            musicData.push({
                title: music.title,
                title_short: music.title_short,
                duration: music.duration,
                artist: music.artist.name,
                link: `https://deezer.com/en/track/${music.id}`,
                image: music.album.cover_xl,
                album: music.album.title
            })
        }
    });

    return musicData;
}

const Music = async () => {
    const data = await getMusic();

    return (
        <div className={"min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white flex flex-col justify-between"}>
            <main className={"h-full w-full flex flex-col content-center items-center"}>
                <div className={"w-4/5 md:w-2/5 mt-20 min-h-96 p-10 flex flex-col border-2 border-mygreen rounded-md"}>
                    <Header/>
                    <div className={"border-t-4 my-4 border-mygreen"}/>
                    <p className={"text-xl"}>
                        Music
                    </p>
                </div>
                <div className={"w-4/5 md:w-2/5 mt-8 p-4 flex flex-col border-2 border-mygreen rounded-md"}>
                    <div className={"grid grid-cols-1 xl:grid-cols-2"}>
                        {data && data.map((music: MusicType, index: number) => (
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
