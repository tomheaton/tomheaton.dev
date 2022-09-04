import useSWR from 'swr';
import {RepoType} from "@utils/types";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useRepos = () => {
    return useSWR<{data: RepoType[]}>("/api/repos", fetcher);
}
