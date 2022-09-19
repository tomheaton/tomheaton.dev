import useSWR from 'swr';
import {MusicType, RepoType} from "@utils/types";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useRepos = () => {
    return useSWR<{data: RepoType[]}>("/api/repos", fetcher);
}

export const useMusic = () => {
    return useSWR<{data: MusicType[]}>("/api/music", fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
}
