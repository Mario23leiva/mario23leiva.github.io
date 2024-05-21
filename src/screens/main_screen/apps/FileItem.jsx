import React from 'react';
import DirectoryFile from './../../../assets/iconos/icono_carpeta.png';

const FileItem = ({ index, title, onClick }) => {
    return (
        <li id={`file-item-${index}`} className="file-item" title={title} onClick={onClick}>
            <img src={DirectoryFile} alt={title} />
            {title}
        </li>
    );  
}

export default FileItem;
