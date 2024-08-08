import './ResumeStyle.css'
import React from 'react';

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
    const education = [
        {
            pathToImage: './icons/ulb.png',
            uni: 'Université Libre de Bruxelles',
            date: 'Sep 2020 - 2023',
            degree: 'BSc. Computer Science',
        },
        {
            pathToImage: './icons/rug.png',
            uni: 'Rijksuniversiteit Groningen',
            date: 'Sep 2023 - 2025',
            degree: 'MSc. Artificial Intelligence',
        },
    ]
    return (
        <>
            <h2> Education </h2>
            <div className='content-container'>
                {education.map((edu, index) => (
                    <EducationBox
                        key={index}
                        education={edu}
                    />
                ))}
            </div>
        </>
    )
}

export default Education;