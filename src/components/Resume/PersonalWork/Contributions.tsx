import { contributions } from "./projectData.ts"
import WorkContainer from "./WorkContainer.tsx";

const Contributions = () => (
    <div>
        <h2> Open-Source Contributions </h2>
        <WorkContainer works={contributions} />
    </div>
)

export default Contributions