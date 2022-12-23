import type {RepoType} from "@utils/types";
import React from "react";

type Props = {
    repo: RepoType
}

const RepoCard: React.FC<Props> = ({repo}) => {
    return (
        <a href={repo.link} target={"_blank"} rel={"external noopener noreferrer"}>
            <div className={"cursor-pointer p-4 m-4 border-2 border-myGreen rounded-lg"}>
                <h2 className={"font-semibold text-xl"}>
                    {repo.repo}
                </h2>
                <p>
                    Stars: {repo.stars}, Forks: {repo.forks}
                </p>
                <div className={`border-t-4 my-4`} style={{borderColor: repo.languageColor}}/>
                {/*TODO: fix image*/}
                {/*<Image src={repository.image} height={600} width={1200} alt={repository.repo}/>*/}
            </div>
        </a>
    );
}

export default RepoCard;
