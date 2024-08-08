import PersonalDetails from "./PersonalDetails.tsx";
import Languages from "./Languages.tsx";

function DetailsSection() {
    return (
        <div className='details-section'>
            <PersonalDetails/>
            <hr/>
            <Languages/>
            <hr/>

        </div>
    )
}

export default DetailsSection;