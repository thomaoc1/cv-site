import './PageStyle.css'
import SidePanel from "../SidePanel/SidePanel.tsx";
import ResumeContainer from "../Resume/ResumeContainer.tsx";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

function Page() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const handlers = useSwipeable({
        onSwipedLeft: () => { setSidebarOpen(false); },
        onSwipedRight: () => { setSidebarOpen(true); }
    })

    return (
        <div className='page' {...handlers}>
            <div className='top-bar'>
                <button className='invisible-button' onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <img className={`side-menu-icon ${isSidebarOpen ? 'move' :''}`} src='icons/side-menu-icon.png' alt='side-menu'/>
                </button>
            </div>
            <div className='main-page-content'>
                <SidePanel isOpen={isSidebarOpen}/>
                <ResumeContainer isSidebarOpen={isSidebarOpen} onContainerClicked={() => setSidebarOpen(false)} />
            </div>
        </div>
    )
}

export default Page
