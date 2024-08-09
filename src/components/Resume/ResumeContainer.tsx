import './ResumeStyle.css';
import Education from "./Education.tsx";
import TechnicalSkills from "./TechnicalSkills.tsx";
import Projects from "./Projects.tsx";
import React from "react";


interface ResumeContainerProps {
    isSidebarOpen: boolean,
    onContainerClicked: () => void,
}

const ResumeContainer: React.FC<ResumeContainerProps> = ({ isSidebarOpen, onContainerClicked }) => {
    return (
        <div className={`resume-container ${isSidebarOpen ? 'side-bar-open' : ''}`} onClick={onContainerClicked}>
            <h1> Resume Website  </h1>
            <Education  />
            <TechnicalSkills />
            <Projects />
        </div>
    )
}

export default ResumeContainer;