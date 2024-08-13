import './ResumeStyle.css';
import Education from "./Education.tsx";
import TechnicalSkills from "./TechnicalSkills.tsx";
import Projects from "./PersonalWork/Projects.tsx";
import React from "react";
import Contributions from "./PersonalWork/Contributions.tsx";


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
            <Contributions />
            <Projects />
        </div>
    )
}

export default ResumeContainer;