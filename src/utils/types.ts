import { z } from "zod";

export type CardData = {
  title: string;
  description: string;
  link: string;
};

export const repoSchema = z.object({
  owner: z.string(),
  repo: z.string(),
  link: z.string().url(),
  description: z.string().optional(),
  // image: z.string().url(),
  website: z.string().url().optional(),
  language: z.string(),
  languageColor: z.string(),
  stars: z.union([z.string(), z.number()]),
  // forks: z.union([z.string(), z.number()]),
});

export type Repo = z.infer<typeof repoSchema>;

export const trackSchema = z
  .object({
    id: z.number(),
    type: z.string(),
    title: z.string(),
    // duration: z.number(),
    artist: z.object({
      name: z.string(),
    }),
    album: z.object({
      cover_xl: z.string().url(),
      // title: z.string(),
    }),
  })
  .transform((t) => {
    return {
      id: t.id,
      title: t.title,
      // duration: t.duration,
      artist: t.artist.name,
      image: t.album.cover_xl,
      // album: t.album.title,
      link: `https://deezer.com/en/track/${t.id}`,
    };
  });

export type Track = z.infer<typeof trackSchema>;
