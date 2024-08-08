import './SidePanelStyle.css'
import Profile from "./Profile.tsx";
import DetailsSection from "./DetailsSection.tsx";
import SocialLinks from "./SocialLinks.tsx";
import React from "react";

interface SidePanelProps {
    isOpen: boolean,
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen }) => {
    return (
        <div className={`side-panel ${isOpen ? 'show' : ''}`}>
            <div className='side-panel-top-section'>
                <Profile />
                <DetailsSection />
            </div>

            <SocialLinks />
        </div>
    )
}

export default SidePanel;