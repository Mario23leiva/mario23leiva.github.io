import React from 'react';

const SongInfo = ({ songImage, songName, songArtist }) => {
    return (
        <div className="song-info">
            <img src={songImage} alt="" />
            <h2>{songName}</h2>
            <p>{songArtist}</p>
        </div>
    );
}

export default SongInfo;