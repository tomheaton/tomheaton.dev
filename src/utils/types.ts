export type RepoType = {
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

export type CardType = {
    title: string
    description: string
    link: string
}

export type MusicType = {
    "title": string
    "title_short": string
    // "title_version": string
    "duration": number
    // "rank": number
    // "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6430575d1f202af381f403b4752438af-6.mp3"
    artist: string
    link: string
    image: string
    album: string
}
