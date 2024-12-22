import React, { useState } from 'react';
import './MusicPlayer.css';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';
import { songs } from './playlist'; // Importing an example playlist

const MusicPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  return (
    <div
      className={`music-player ${isExpanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {!isExpanded && (
        <div className="music-icon">
          <FaPlay />
        </div>
      )}

      {isExpanded && (
        <>
          <div className="controls">
            <button onClick={prevSong}><FaStepBackward /></button>
            <button onClick={togglePlayPause}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={nextSong}><FaStepForward /></button>
            <div className="volume-button">
              <FaVolumeUp />
              <div className="volume-slider">
                <input type="range" min="0" max="100" defaultValue="50" />
              </div>
            </div>
          </div>
          {/* <div className="song-title">{songs[currentSongIndex].title.slice(0,10)}</div> */}
          <div className="song-title">{(songs[currentSongIndex].title.length) > 10 ? songs[currentSongIndex].title.slice(0,20) + "..." : songs[currentSongIndex].title  }</div>
        </>
      )}
    </div>
  );
};

export default MusicPlayer;


// {`navbar navbar-expand-lg navbar-${props.mode === 'redDark' ? 'dark':props.mode === 'yellowDark'? 'dark' : props.mode} bg-${props.mode === 'redDark' ? 'dark' : props.mode === 'yellowDark' ? 'dark' : props.mode}`}
