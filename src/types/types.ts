type Repo = {
    owner: string
    repo: string
    link: string
    description: string
    image: string
    website: string
    language: string
    languageColor: string
    stars: string
    forks: string
}

type IndexProps = {
    data?: Repo[]
}

export type { Repo, IndexProps };
