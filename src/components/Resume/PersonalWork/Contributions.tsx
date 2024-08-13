import { contributions } from "./projectData.ts"
import WorkContainer from "./WorkContainer.tsx";

const Contributions = () => (
    <>
        <h2> Open-Source Contributions </h2>
        <WorkContainer works={contributions} />
    </>
)

export default Contributions