import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
// @ts-ignore
import {Repo} from "@types/types"; // TODO: fix this

type Data = {
    data: Repo[]
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const response = await fetch("https://gh-pinned-repos.egoist.sh/?username=tomheaton")
    const data = await response.json()
    console.log(JSON.stringify({ data }, null, 4))

    return res.status(200).json({ data });
}

export default handler;
