import React from 'react';
import './Spotify.css';
import { FaSpotify } from 'react-icons/fa';

export default function Spotify() {
  const playlistId = '0grITgOjmRvPGdY5s5VUSu';
  return (
    <div className="spotify-container">
      <div className="spotify-icon">
        <FaSpotify />
      </div>
{/* 
      <iframe
        title="Spotify Embed: Recommendation Playlist"
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      /> */}

<iframe src="https://open.spotify.com/embed/playlist/679wCT6dVMDBxrYa5NcrXL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}
