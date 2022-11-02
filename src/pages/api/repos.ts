import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import type {RepoType} from "@utils/types";

type Data = {
    data: RepoType[]
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const response = await fetch("https://gh-pinned-repos.egoist.dev/?username=tomheaton")
    const data = await response.json()

    return res.status(200).json(data);
}

export default handler;
