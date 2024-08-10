import './ResumeStyle.css'
import projects from "./projectData.ts";

function Project() {

    return (
        <>
            <h2> Projects </h2>
            {projects.map((category, idx) => (
                <div key={idx}>
                    <h3> {category.subheading} </h3>
                    <div className='content-container'>
                        {category.projects.map((project, jdx) => (
                            <div className='content-grid-item' key={jdx}>
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
                </div>
            ))}
        </>
    )
}

export default Project;