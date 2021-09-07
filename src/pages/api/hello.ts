import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
    name: string
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ name: 'Tom Heaton' });
}

export default handler;