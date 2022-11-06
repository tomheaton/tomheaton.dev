import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import type {MusicType} from "@utils/types";

type Data = {
    data: MusicType[]
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const response = await fetch("https://api.deezer.com/user/844148065/flow")
    const data = await response.json()

    if (!data.data) {
        return res.status(200).json({data: []});
    }

    let musicData: MusicType[] = [];

    // TODO: add zod?
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

    return res.status(200).json({data: musicData});
}

export default handler;
