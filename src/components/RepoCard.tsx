// @ts-ignore
import {Repo} from "@types/types"; // TODO: fix this.
import React from "react";
import {useRouter} from "next/router";

const RepoCard = ({repository}: {repository: Repo}) => {

    const router = useRouter();

    return (
        <div className={"cursor-pointer"}
             onClick={() => {router.push(repository.link)}}>
            <p>{repository.repo}</p>
            <img src={repository.image} alt={"lol"}/>
        </div>
    );
}

export default RepoCard;