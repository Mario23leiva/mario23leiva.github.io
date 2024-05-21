import React, { useState } from 'react';
import './PokeballMenu.css';
import DesktopApp from './DesktopApp';

import Pokeball from '../../assets/pokeball-img.png';
import MusicIcon from '../../assets/iconos/music.png';
import FilesIcon from '../../assets/iconos/files.png';
import PicturesIcon from '../../assets/iconos/pictures.png';
import PokeballTop from '../../assets/pokeball-top.png';
import PokeballBottom from '../../assets/pokeball-bottom.png';

import fondo1 from '../../assets/fondos/pantalla.png';
import fondo4 from '../../assets/fondos/win_xp.png';
import fondo3 from '../../assets/fondos/el_edit.png';
import fondo2 from '../../assets/fondos/otra.jpg';


const PokeballMenu = () => {

    const imgArray = [fondo1, fondo2, fondo3, fondo4];
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const PROFILE_APP = "Profile";
    const MUSIC_APP = "Music";
    const PICTURES_APP = "My Wallpapers";
    const FILES_APP = "Files";

    const PROFILE_APP_ID = "PROFILE";
    const MUSIC_APP_ID = "MUSIC";
    const PICTURES_APP_ID = "PICTURES";
    const FILES_APP_ID = "FILES";

    const handleClick = () => {
        const pokeball = document.getElementById('pokeball');
        pokeball.classList.add('pokeball-active');
        pokeball.classList.remove('pokeball-hover');
    };

    const openApp = (AppId) => {
        const app = document.getElementById(AppId);
        const activeApps = document.querySelectorAll('.desktop-app-layout.active');

        if (activeApps.length > 0) {
            activeApps.forEach((activeApp, index) => {
                if(activeApp.id === AppId) {
                    activeApp.style.zIndex = 999;
                } else{
                    activeApp.style.zIndex = index;
                }
            });
        }

        app.classList.toggle('active');
    };


    const changeBackground = () => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
        const mainScreen = document.querySelector('.main-screen');
        mainScreen.style.backgroundImage = `url(${imgArray[backgroundIndex]})`;
    };

    return (
        <div className="pokeball-menu" >
            <div id="pokeball" className="pokeball pokeball-hover">
                <img className='pokeball-img' src={PokeballTop} alt="" onClick={handleClick} />
                <div className='pokeball-apps-container'>
                    <DesktopApp AppId={PROFILE_APP_ID} AppImg={Pokeball} AppName={PROFILE_APP} onClickApp={openApp} />
                    <DesktopApp AppId={MUSIC_APP_ID} AppImg={MusicIcon} AppName={MUSIC_APP} onClickApp={openApp} />
                    <DesktopApp AppId={PICTURES_APP_ID} AppImg={PicturesIcon} AppName={PICTURES_APP} onClickApp={changeBackground} />
                    <DesktopApp AppId={FILES_APP_ID} AppImg={FilesIcon} AppName={FILES_APP} onClickApp={openApp} />
                </div>
                <img className='pokeball-img' src={PokeballBottom} alt="" onClick={handleClick} />
            </div>
        </div>
    );
};

export default PokeballMenu;