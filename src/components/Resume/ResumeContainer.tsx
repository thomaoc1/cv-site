import './ResumeStyle.css';
import Education from "./Education.tsx";
import TechnicalSkills from "./TechnicalSkills.tsx";
import Projects from "./Projects.tsx";
import React from "react";

interface ResumeContainerProps {
    isSidebarOpen: boolean,
}

const ResumeContainer: React.FC<ResumeContainerProps> = ({ isSidebarOpen }) => {
    return (
        <div className={`resume-container ${isSidebarOpen ? 'blur' : ''}`}>
            <h1> Resume Website  </h1>
            <Education  />
            <TechnicalSkills />
            <Projects />
        </div>
    )
}

export default ResumeContainer;