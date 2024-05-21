import React from 'react';
import './MainScreen.css'
import PokeballMenu from './PokeballMenu';
import MainContainer from './MainContainer';

function MainScreen() {

    return (
        <div className="main-screen">
            <div id="main-container" className='main-container'>
                <MainContainer />
            </div>
            <div className="menu">
                <PokeballMenu />
            </div>
        </div>
    );
}

export default MainScreen; // Exporta el componente MainScreen
