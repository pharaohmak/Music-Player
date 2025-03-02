import React, { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player';
import songsData from './data/songsData';

const App = () => {
  const [songs, setSongs] = useState(songsData);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex((currentSongIndex + 1) % songs.length);
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default App;