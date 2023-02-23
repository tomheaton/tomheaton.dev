import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MusicCard from "@/components/MusicCard";
import { musicSchema, type MusicType } from "@/utils/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Music | Tom Heaton",
    description: "Tom Heaton's music",
};

const getMusic = async () => {
    const response = await fetch("https://api.deezer.com/user/844148065/flow");
    const data = await response.json();

    if (!data || !data.data || !data.data.length) {
        return [];
    }

    return data.data.flatMap((m: any) => {
        const music = musicSchema.safeParse(m);
        if (!music.success) {
            return [];
        }
        return music.data;
    });
};

const Music = async () => {
    const data = await getMusic();

    return (
        <div
            className={
                "flex min-h-screen flex-col justify-between bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
            }
        >
            <main className={"flex h-full w-full flex-col content-center items-center"}>
                <div
                    className={
                        "min-h-96 mt-20 flex w-4/5 flex-col rounded-md border-2 border-myGreen p-10 md:w-2/5"
                    }
                >
                    <Header />
                    <div className={"my-4 border-t-4 border-myGreen"} />
                    <p className={"text-xl"}>Music</p>
                </div>
                <div
                    className={
                        "mt-8 flex w-4/5 flex-col rounded-md border-2 border-myGreen p-4 md:w-2/5"
                    }
                >
                    <div className={"grid grid-cols-1 xl:grid-cols-2"}>
                        {data &&
                            data.map((music: MusicType, index: number) => (
                                <MusicCard key={index} music={music} />
                            ))}
                        {data && data.length === 0 && (
                            <p className={"col-span-2"}>no music found</p>
                        )}
                        {!data && <p className={"col-span-2"}>loading</p>}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Music;
