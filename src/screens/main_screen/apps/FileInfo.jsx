import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './FileInfo.css';

import DesktopAppLayout from './DesktopAppLayout';

//img technologies
import IMG_CHROME from '../../../assets/iconos/chrome.png';
import IMG_FILE from '../../../assets/iconos/archivo.png';
import IMG_CSS from '../../../assets/iconos/css.png';
import IMG_GITHUB from '../../../assets/iconos/github.png';
import IMG_HTML from '../../../assets/iconos/html.png';
import IMG_LARAVEL from '../../../assets/iconos/laravel.png';
import IMG_REACT from '../../../assets/iconos/react.png';
import IMG_SQL from '../../../assets/iconos/sql.png';
import IMG_VUE from '../../../assets/iconos/vue.png';
import IMG_JS from '../../../assets/iconos/js.png';
import IMG_PHP from '../../../assets/iconos/php.png';

const CSS_TECHNOLOGY = "CSS"
const HTML_TECHNOLOGY = "HTML"
const LARAVEL_TECHNOLOGY = "LARAVEL"
const REACT_TECHNOLOGY = "REACT"
const SQL_TECHNOLOGY = "SQL"
const VUE_TECHNOLOGY = "VUE"
const JAVASCRIPT_TECHNOLOGY = "JAVASCRIPT"
const PHP_TECHNOLOGY = "PHP"

const FileInfo = ({ project }) => {

    const [showReadme, setShowReadme] = useState(false);

    const loadAppTechnologies = (tecnologia, index) => {
        let imgTech;
        switch (tecnologia) {
            case CSS_TECHNOLOGY:
                imgTech = IMG_CSS;
                break;
            case HTML_TECHNOLOGY:
                imgTech = IMG_HTML;
                break;
            case LARAVEL_TECHNOLOGY:
                imgTech = IMG_LARAVEL;
                break;
            case REACT_TECHNOLOGY:
                imgTech = IMG_REACT;
                break;
            case SQL_TECHNOLOGY:
                imgTech = IMG_SQL;
                break;
            case VUE_TECHNOLOGY:
                imgTech = IMG_VUE;
                break;
            case JAVASCRIPT_TECHNOLOGY:
                imgTech = IMG_JS;
                break;
            case PHP_TECHNOLOGY:
                imgTech = IMG_PHP;
                break;
        }
        return (
            <li key={index} className="file-info-item" title={tecnologia}>
                <img src={imgTech} alt={tecnologia} />
                <span>{tecnologia}</span>
            </li>
        );
    };


    if (!project) {
        return null;
    }

    const toggleReadme = () => {
        setShowReadme(!showReadme);
    };

    const readmeContent = (
        <DesktopAppLayout AppId={"readme-project-" + project.id} AppName="README.txt" AppComponent={project.descripcion}/>
    );

    const readmeContainer = document.getElementById('main-container');

    return (
        <div className="file-info">
            <h2>{project.titulo}</h2>
            <div className="file-info-container">
                <ul className="file-info-list">
                    <a href="https://google.com" target="_blank">
                        <li className="file-info-item" title="Open the project">
                            <img src={IMG_CHROME} alt="File" />
                            <span>{project.titulo}</span>
                        </li>
                    </a>

                    <li className="file-info-item file-info-readme" title="About the project..." onClick={toggleReadme}>
                        <img src={IMG_FILE} alt="File" />
                        <span>README.txt</span>
                    </li>

                    <a href="">
                        <li className="file-info-item" title="Go to repository">
                            <img src={IMG_GITHUB} alt="GitHub" />
                            <span>GITHUB</span>
                        </li>
                    </a>
                    {project.tecnologias.map((tecnologia, index) => (
                        loadAppTechnologies(tecnologia, index)
                    ))}
                </ul>
            </div>
            {showReadme && readmeContainer && ReactDOM.createPortal(readmeContent, readmeContainer)}
        </div>
    );
}

export default FileInfo;
