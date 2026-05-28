import { z } from "zod";

export type Repo = {
  owner: string;
  repo: string;
  link: string;
  description?: string;
  language?: string;
  languageColor?: string;
  stars: number;
  website?: string;
};

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
      cover_xl: z.url(),
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
