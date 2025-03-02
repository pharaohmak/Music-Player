import React from "react";
import {
  DetailsImg,
  ArtistInfo,
  DetailsTitle,
  DetailsArtist,
  InfoSong,
} from "./PlayerDetailsStyles";

function PlayerDetails({ song }) {
  return (
    <div className="music-player--details">
      <DetailsImg>
        <img src={song.img_src} alt={song.title} />
      </DetailsImg>
      <ArtistInfo>
        <DetailsTitle>{song.title}</DetailsTitle>
        <DetailsArtist>{song.artist}</DetailsArtist>
      </ArtistInfo>
      <InfoSong>{song.album}</InfoSong>
    </div>
  );
}

export default PlayerDetails;