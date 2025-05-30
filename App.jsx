import React from 'react';
import ProjectCard from './components/ProjectCard';
import './styles/main.css';

const projects = [
    {
        title: 'Project 1',
        description: 'Description for project 1',
        image: '/images/project1.jpg',
        video: '/videos/project1.mp4',
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        image: '/images/project2.jpg',
        video: '/videos/project2.mp4',
    },
    {
        title: 'Project 3',
        description: 'Description for project 3',
        image: '/images/project3.jpg',
        video: '/videos/project3.mp4',
    },
    {
        title: 'Project 4',
        description: 'Description for project 4',
        image: '/images/project4.jpg',
        video: '/videos/project4.mp4',
    },
];

function App() {
    return (
        <div className="App">
            <h1>My Portfolio</h1>
            <div className="project-gallery">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        image={project.image} 
                        video={project.video} 
                    />
                ))}
            </div>
        </div>
    );
}

export default App;