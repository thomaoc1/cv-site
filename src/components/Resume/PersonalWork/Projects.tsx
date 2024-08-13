import '../ResumeStyle.css'
import { allProjects } from "./projectData.ts";
import WorkContainer from "./WorkContainer.tsx";

function Project() {
    return (
        <>
            <h2> Personal Projects </h2>
            {allProjects.map((category: object, idx) => (
                <div key={idx}>
                    <h3> {category.subheading} </h3>
                    <WorkContainer works={category.projects} />
                </div>
            ))}
        </>
    )
}

export default Project;