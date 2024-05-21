import React, { useState, useRef, useEffect } from 'react';
import './MusicApp.css';
import SongInfo from './SongInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

import songs from './../../../assets/json/songs.json';

const MusicApp = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const currentSong = songs[currentSongIndex];

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentSongIndex]);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        const seekTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;
        audio.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleStepBackward = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
        resetPlayer();
    };

    const handleStepForward = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
        resetPlayer();
    };

    const resetPlayer = () => {
        setCurrentTime(0);
        setIsPlaying(false);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    return (
        <div className="music-app" style={{ backgroundImage: `url(${currentSong.image})` }}>
            <audio ref={audioRef} src={currentSong.audio}></audio>
            <div className="main-container">
                <SongInfo songImage={currentSong.image} songName={currentSong.title} songArtist={currentSong.artist} />
                <div className="music-controllers">
                    <div className="progress-bar" onClick={handleSeek}>
                        <div
                            className="progress"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        ></div>
                    </div>
                    <div className="buttons-controller">
                        <button onClick={handleStepBackward}>
                            <FontAwesomeIcon id="step-backward" icon={faStepBackward} />
                        </button>
                        <button onClick={handlePlayPause}>
                            <FontAwesomeIcon id="play-pause" icon={isPlaying ? faPause : faPlay} />
                        </button>
                        <button onClick={handleStepForward}>
                            <FontAwesomeIcon id="step-forward" icon={faStepForward} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicApp;