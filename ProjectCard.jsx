import React from 'react';

const ProjectCard = ({ title, description, image, video }) => {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <p>{description}</p>
            {image && <img src={image} alt={title} />}
            {video && (
                <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default ProjectCard;