import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { repoSchema, type RepoType } from "@/utils/types";

type Data = {
    data: RepoType[];
};

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const response = await fetch("https://gh-pinned-repos.egoist.dev/?username=tomheaton");
    const data = await response.json();

    if (!data.length) {
        return res.status(200).json({ data: [] });
    }

    let repoData = data.flatMap((r: any) => {
        const repo = repoSchema.safeParse(r);
        if (!repo.success) {
            return [];
        }
        return repo.data;
    });

    return res.status(200).json({ data: repoData });
};

export default handler;
