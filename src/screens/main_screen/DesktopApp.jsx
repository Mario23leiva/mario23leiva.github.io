import React from 'react';
import './DesktopApp.css';

function DesktopApp({ AppId, AppImg, AppName, onClickApp }) {

    return (
        <>
            <div id={`desktop-app-${AppId}`} className='desktop-app' title={AppName} onClick={ () => onClickApp(AppId)}>
                <img src={AppImg} alt={AppName} draggable="false" />
            </div>
        </>
    );
}

export default DesktopApp;
