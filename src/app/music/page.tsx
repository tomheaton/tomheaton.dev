import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MusicCard from "@/components/MusicCard";
import {musicSchema, type MusicType} from "@/utils/types";

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
}

const Music = async () => {
    const data = await getMusic();

    return (
        <div
            className={"min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white flex flex-col justify-between"}>
            <main className={"h-full w-full flex flex-col content-center items-center"}>
                <div className={"w-4/5 md:w-2/5 mt-20 min-h-96 p-10 flex flex-col border-2 border-myGreen rounded-md"}>
                    <Header/>
                    <div className={"border-t-4 my-4 border-myGreen"}/>
                    <p className={"text-xl"}>
                        Music
                    </p>
                </div>
                <div className={"w-4/5 md:w-2/5 mt-8 p-4 flex flex-col border-2 border-myGreen rounded-md"}>
                    <div className={"grid grid-cols-1 xl:grid-cols-2"}>
                        {data && data.map((music: MusicType, index: number) => (
                            <MusicCard key={index} music={music}/>
                        ))}
                        {data && data.length === 0 && (
                            <p className={"col-span-2"}>
                                no music found
                            </p>
                        )}
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
