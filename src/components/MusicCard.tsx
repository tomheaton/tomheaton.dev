import type {MusicType} from "@utils/types";
import React from "react";

type Props = {
    music: MusicType
}

const MusicCard: React.FC<Props> = ({music}) => {
    return (
        <a href={music.link} target={"_blank"} rel={"external noopener noreferrer"}>
            {/*TODO: fix card grow*/}
            <div className={"cursor-pointer p-4 m-4 border-2 border-mygreen rounded-lg"}>
                <h2 className={"font-semibold text-xl"}>
                    {music.title}
                </h2>
                <p>
                    Artist: {music.artist}
                </p>
                <p>
                    Album: {music.album}
                </p>
                <p>
                    Duration: {new Date(music.duration * 1000).toISOString().substring(14, 19)}
                </p>
                {/*<Image src={music.image} height={600} width={600} alt={music.title}/>*/}
            </div>
        </a>
    );
}

export default MusicCard;