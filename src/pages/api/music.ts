import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import {musicSchema, type MusicType} from "@/utils/types";

type Data = {
    data: MusicType[];
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const response = await fetch("https://api.deezer.com/user/844148065/flow");
    const data = await response.json();

    if (!data.data) {
        return res.status(200).json({data: []});
    }

    let musicData = data.data.flatMap((m: any) => {
        const music = musicSchema.safeParse(m);
        if (!music.success) {
            return [];
        }
        return music.data;
    });

    return res.status(200).json({data: musicData});
}

export default handler;
