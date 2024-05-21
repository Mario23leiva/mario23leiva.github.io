import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './BlockedScreen.css'
import FotoPerfil from '../../assets/foto_epica_redonda.png';



function BlockedScreen({ onEnter }) {

    

    const [bluredScreen, setBluredScreen] = useState(false);
    const [startY, setStartY] = useState(null);
    const [blurValue, setBlurValue] = useState(0);

    // Función para manejar el evento de inicio de toque
    const handleTouchStart = (event) => {
        if (!bluredScreen) {
            setBlurValue(0);
            setStartY(event.touches[0].clientY); // Guardar la posición inicial del toque
        }
    };

    // Función para manejar el evento de desplazamiento táctil
    const handleTouchMove = (event) => {
        if (!bluredScreen) {
            const deltaY = startY - event.touches[0].clientY;
            if (deltaY > 0) {
                setBlurValue(deltaY / 10); // Ajusta la velocidad del desenfoque según sea necesario
            }

            // Verificar si el usuario está desplazando hacia arriba después de hacer clic
            if (startY && event.touches[0].clientY < startY - 200) {
                setBluredScreen(true);
                setStartY(null); // Limpiar la variable de inicio de toque
                startLoading();
            }
        }
    };

    const handleMouseDown = (event) => {
        if (!bluredScreen) {
            setStartY(event.clientY); // Guardar la posición inicial del ratón
            event.preventDefault(); // Evitar la selección de texto
        }
    };

    const handleMouseUp = (event) => {
        if (!bluredScreen) {
            setStartY(null);
            setBlurValue(0);
        }
    };

    // Función para manejar el evento de movimiento de ratón
    const handleMouseMove = (event) => {
        if (!bluredScreen) {
            const deltaY = startY - event.clientY;
            if (deltaY > 0) {
                setBlurValue(deltaY / 10); // Ajusta la velocidad del desenfoque según sea necesario
            }

            // Verificar si el usuario está desplazando hacia arriba después de hacer clic
            if (startY && event.clientY < startY - 200) {
                setBluredScreen(true);
                setStartY(null); // Limpiar la variable de inicio de toque
                startLoading();
            }
        }
    };

    function startLoading(){
        
        setTimeout(() => {
            onEnter();
        }, 2000);
    }

    return (
        <div className="blocked-screen"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >

            <div className='blocked-screen-background-image' style={{filter: `blur(${blurValue}px)` }}>
                <h2>^ SWIPE UP TO LOGIN ^</h2>
            </div>

            {bluredScreen &&
                <div className='blocked-screen-login'>
                    <img src={FotoPerfil} alt="" />
                    <h2>Mario Leiva Torres</h2>

                    <h1>Loading  <FontAwesomeIcon id="spinner" icon={faSpinner} /></h1>
                </div>
            }

            {/* <button onClick={onEnter}>Entrar</button> */}
        </div>


    );
}

export default BlockedScreen;
