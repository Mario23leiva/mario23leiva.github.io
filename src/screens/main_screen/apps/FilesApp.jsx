import React, { useState, useEffect } from 'react';
import './FilesApp.css';
import FileItem from './FileItem';
import FileInfo from './FileInfo';
import projectsData from './../../../assets/json/projects.json';

const FilesApp = () => {
    const [proyectos, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        setProjects(projectsData); // Establece los datos de proyectos desde el archivo JSON
    }, []);

    const handleClickFileItem = (project, index) => {
        const projects = document.querySelectorAll('.file-item');
        projects.forEach(project => {
            project.classList.remove('file-selected');
        });
        const projectSelected = document.getElementById(`file-item-${index}`);
        projectSelected.classList.add('file-selected');
        setSelectedProject(project);
    };

    return (
        <div className="files-app">
            <div className="left-container">
                <h2>Personal Projects</h2>
                <ul className="file-list">
                    {proyectos.map((project, index) => (
                        <FileItem 
                            key={index}
                            index={index}
                            title={project.titulo} 
                            onClick={() => handleClickFileItem(project, index)} /> // Asegúrate de pasar el proyecto correctamente al hacer clic
                    ))}
                </ul>
            </div>

            <div className="right-container">
                <FileInfo project={selectedProject} /> {/* Asegúrate de pasar el proyecto seleccionado correctamente */}
            </div>
        </div>
    );
}

export default FilesApp;
