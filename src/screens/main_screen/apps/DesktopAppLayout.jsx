import React from 'react';
import './DesktopAppLayout.css';

const DesktopAppLayout = ({ AppId, AppName, AppComponent }) => {

    let desktopAppClass = 'desktop-app-layout';
    
    if (AppName == "README.txt") {
        desktopAppClass += ' README active';
    }

    const closeApp = () => {
        const app = document.getElementById(AppId);
        app.classList.toggle('active');
        if (AppName != "README.txt") {
            const pokeballApp = document.getElementById(`desktop-app-${AppId}`);
            pokeballApp.classList.remove('minimized');
        }
    }

    const minimizeApp = () => {
        const app = document.getElementById(AppId);
        app.classList.toggle('active');
        if (AppName != "README.txt") {
            const pokeballApp = document.getElementById(`desktop-app-${AppId}`);
            pokeballApp.classList.add('minimized');
        }
    }

    const maximizeApp = () => {
        const app = document.getElementById(AppId);
        app.classList.toggle('maximize');
    }

    function ajustarAncho() {
        const miDiv = document.getElementById(AppId);

        if (window.innerWidth <= 1000) {
            miDiv.classList.add('small-window');
        } else {
            miDiv.classList.remove('small-window');
        }
    }

    window.addEventListener('resize', ajustarAncho);


    return (
        <div
            id={AppId} 
            className={desktopAppClass}>
            <div className="top-bar">
                <div className="buttons">
                    <button type="button" id="closeBtn" title='Close' onClick={closeApp}></button>
                    <button type="button" id="minimizeBtn" title='Minimize' onClick={minimizeApp}></button>
                    <button type="button" id="maximizeBtn" title='Maximize/window' onClick={maximizeApp}></button>
                </div>
                <h3>{AppName}</h3>
            </div>
            <div className="app-container">
                {AppComponent}
            </div>
        </div>
    );
}

export default DesktopAppLayout;