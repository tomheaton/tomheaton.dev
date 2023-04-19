import type { Track } from "@/utils/types";

type Props = {
  track: Track;
};

export default function TrackCard({ track }: Props) {
  return (
    <a href={track.link} target="_blank" rel="external noopener noreferrer">
      {/*TODO: fix card grow*/}
      <div className="m-4 rounded-lg border-2 border-myGreen p-4">
        <h2 className="text-xl font-semibold">{track.title}</h2>
        <p>Artist: {track.artist}</p>
        <p>Album: {track.album}</p>
        <p>Duration: {new Date(track.duration * 1000).toISOString().substring(14, 19)}</p>
        {/*TODO: fix image*/}
        {/*<Image src={music.image} height={600} width={600} alt={music.title}/>*/}
      </div>
    </a>
  );
}
