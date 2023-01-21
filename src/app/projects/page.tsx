import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RepoCard from "@/components/RepoCard";
import {repoSchema, type RepoType} from "@/utils/types";

const getProjects = async () => {
    const response = await fetch("https://gh-pinned-repos.egoist.dev/?username=tomheaton");
    const data = await response.json();

    if (!data || !data.length) {
        return [];
    }

    return data.flatMap((r: any) => {
        const repo = repoSchema.safeParse(r);
        if (!repo.success) {
            return [];
        }
        return repo.data;
    });
}

const Projects = async () => {
    const data = await getProjects();

    return (
        <div
            className={"min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white flex flex-col justify-between"}>
            <main className={"h-full w-full flex flex-col content-center items-center"}>
                <div className={"w-4/5 md:w-2/5 mt-20 min-h-96 p-10 flex flex-col border-2 border-myGreen rounded-md"}>
                    <Header/>
                    <div className={"border-t-4 my-4 border-myGreen"}/>
                    <p className={"text-xl"}>
                        Projects
                    </p>
                </div>
                <div className={"w-4/5 md:w-2/5 mt-8 p-4 flex flex-col border-2 border-myGreen rounded-md"}>
                    <div className={"grid grid-cols-1 xl:grid-cols-2"}>
                        {data && data.map((repo: RepoType, index: number) => (
                            <RepoCard key={index} repo={repo}/>
                        ))}
                        {data && data.length === 0 && (
                            <p className={"col-span-2"}>
                                no projects found
                            </p>
                        )}
                        {!data && (
                            <p className={"col-span-2"}>
                                loading
                            </p>
                        )}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Projects;
