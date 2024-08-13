import '../ResumeStyle.css'
import React from 'react';
import education from "./educationData.ts";

interface Education {
    degree: string;
    uni: string;
    date: string;
    pathToImage: string;
}

interface EducationBoxProps {
    education: Education;
}

const EducationBox: React.FC<EducationBoxProps> = ({ education }) => {
    return (
        <div className='content-grid-item'>
            <div className='university-title-date-col'>
                <p>{education.degree}</p>
                <p className='university-names'>{education.uni}</p>
                <p className='university-dates'>{education.date}</p>
            </div>
            <img className='rounded-shadowed-icon content-grid-item-icon' src={education.pathToImage} alt='ULB acronym' />
        </div>
    );
}

function Education() {
    return (
        <div>
            <h2> Education </h2>
            <div className='content-container'>
                {education.map((edu, index) => (
                    <EducationBox
                        key={index}
                        education={edu}
                    />
                ))}
            </div>
        </div>
    )
}

export default Education;