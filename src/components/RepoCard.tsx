import {Repo} from "@utils/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const RepoCard: React.FC<{repository: Repo}> = ({repository}) => {

    return (
        <Link href={repository.link}>
            <div className={"cursor-pointer p-4 m-4 border-2 border-mygreen rounded-lg"}>
                <h2 className={"font-semibold text-xl"}>
                    {repository.repo}
                </h2>
                <p>
                    Stars: {repository.stars}, Forks: {repository.forks}
                </p>
                {/*<Image src={repository.image} height={600} width={1200} alt={repository.repo}/>*/}
                <div className={`border-t-4 my-4 border-[${repository.languageColor}]`} />
            </div>
        </Link>
    );
}

export default RepoCard;