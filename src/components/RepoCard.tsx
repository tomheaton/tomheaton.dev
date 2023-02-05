import type { RepoType } from "@/utils/types";
import React from "react";

type Props = {
    repo: RepoType;
};

const RepoCard: React.FC<Props> = ({ repo }) => {
    return (
        <a href={repo.link} target={"_blank"} rel={"external noopener noreferrer"}>
            <div className={"m-4 cursor-pointer rounded-lg border-2 border-myGreen p-4"}>
                <h2 className={"text-xl font-semibold"}>{repo.repo}</h2>
                <p>
                    Stars: {repo.stars.toLocaleString()}, Forks: {repo.forks.toLocaleString()}
                </p>
                <div className={`my-4 border-t-4`} style={{ borderColor: repo.languageColor }} />
                {/*TODO: fix image*/}
                {/*<Image src={repository.image} height={600} width={1200} alt={repository.repo}/>*/}
            </div>
        </a>
    );
};

export default RepoCard;
