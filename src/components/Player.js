import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import {
  MusicPlayer,
  TextAnim,
  NextSongDetails,
  PlayerFooter,
} from "./PlayerStyles";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <>
      <TextAnim>
        <strong>Upcoming Song:</strong>
      </TextAnim>

      <NextSongDetails>
        <img
          src={props.songs[props.nextSongIndex].img_src}
          alt={props.songs[props.nextSongIndex].title}
          style={{ width: "4em", height: "auto" }}
        />
        <p>
          <b>{props.songs[props.nextSongIndex].title} </b>&nbsp; by &nbsp;
          <b>{props.songs[props.nextSongIndex].artist}</b>
        </p>
      </NextSongDetails>

      <MusicPlayer>
        <audio
          src={props.songs[props.currentSongIndex].src}
          ref={audioElement}
        ></audio>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />

        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />

        <PlayerFooter>
          <ul className="list list--footer">
            <li>
              <a href="#" className="list__link">
                <i className="fa fa-heart-o"></i>
              </a>
            </li>

            <li>
              <a href="#" className="list__link">
                <i className="fa fa-random"></i>
              </a>
            </li>

            <li>
              <a href="#" className="list__link">
                <i className="fa fa-undo"></i>
              </a>
            </li>

            <li>
              <a href="#" className="list__link">
                <i className="fa fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
        </PlayerFooter>
      </MusicPlayer>
    </>
  );
}

export default Player;