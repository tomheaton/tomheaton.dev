import { z } from "zod";

export type CardType = {
  title: string;
  description: string;
  link: string;
};

export const repoSchema = z.object({
  owner: z.string(),
  repo: z.string(),
  link: z.string().url(),
  description: z.string().optional(),
  image: z.string().url(),
  website: z.string().url().optional(),
  language: z.string(),
  languageColor: z.string(),
  // TODO: is this good?
  stars: z.union([z.string(), z.number()]),
  forks: z.union([z.string(), z.number()]),
});

export type Repo = z.infer<typeof repoSchema>;

export const trackSchema = z
  .object({
    id: z.number(),
    type: z.string(),
    title: z.string(),
    link: z.string(),
    // title: z.number(),
    title_short: z.string(),
    // title_version: z.string(),
    duration: z.number(),
    // rank: z.number(),
    // https://cdns-preview-6.dzcdn.net/stream/c-6430575d1f202af381f403b4752438af-6.mp3
    // preview: z.string().url(),
    artist: z.object({
      name: z.string(),
    }),
    album: z.object({
      cover_xl: z.string().url(),
      title: z.string(),
    }),
  })
  .transform((t) => {
    return {
      id: t.id,
      link: t.link,
      title: t.title,
      title_short: t.title_short,
      // title_version: m.title_version,
      duration: t.duration,
      // rank: m.rank,
      // preview: m.preview,
      artist: t.artist.name,
      image: t.album.cover_xl,
      album: t.album.title,
      // link: `https://deezer.com/en/track/${m.id}`
    };
  });

export type Track = z.infer<typeof trackSchema>;
