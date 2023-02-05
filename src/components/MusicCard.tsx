import type { MusicType } from "@/utils/types";
import React from "react";

type Props = {
    music: MusicType;
};

const MusicCard: React.FC<Props> = ({ music }) => {
    return (
        <a
            href={`https://deezer.com/en/track/${music.id}`}
            target={"_blank"}
            rel={"external noopener noreferrer"}
        >
            {/*TODO: fix card grow*/}
            <div className={"m-4 cursor-pointer rounded-lg border-2 border-myGreen p-4"}>
                <h2 className={"text-xl font-semibold"}>{music.title}</h2>
                <p>Artist: {music.artist}</p>
                <p>Album: {music.album}</p>
                <p>Duration: {new Date(music.duration * 1000).toISOString().substring(14, 19)}</p>
                {/*TODO: fix image*/}
                {/*<Image src={music.image} height={600} width={600} alt={music.title}/>*/}
            </div>
        </a>
    );
};

export default MusicCard;
