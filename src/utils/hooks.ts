import useSWR from 'swr';
import {Repo} from "@utils/types";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useRepos = () => {
    return useSWR<{data: Repo[]}>("/api/repos", fetcher);
}
