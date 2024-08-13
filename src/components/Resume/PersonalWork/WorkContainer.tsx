import React from "react";
import { SingleWork } from "./projectData.ts";

interface WorkContainerProps {
    works: SingleWork[]
}

const WorkContainer: React.FC<WorkContainerProps> = ({ works }) => (
    <div className='content-container'>
        {works.map((project, idx) => (
            <div className='content-grid-item' key={idx}>
                <div>
                    <a href={project.link}>
                        <div className='project-name-link'>
                            <p> {project.title} </p>
                            <img className='link-icon' src='icons/link-icon.png' alt='link icon'/>
                        </div>
                    </a>
                    <p className='project-description'> {project.desc} </p>
                </div>
            </div>
        ))}
    </div>
)

export default WorkContainer;