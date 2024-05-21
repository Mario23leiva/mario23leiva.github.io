import React, { useEffect } from 'react';
import './ImageApp.css';


const ImageApp = ( { img, incrementCount}) => {
    useEffect(() => {

        const mainScreen = document.querySelector('.main-screen');
        mainScreen.style.backgroundImage = `url(${img})`;
        console.log(img);
        incrementCount();        
        
    }, []);

    return null;
};

export default ImageApp;
