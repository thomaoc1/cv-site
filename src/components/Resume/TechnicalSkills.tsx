import React from "react";

interface SkillCategory {
    title: string,
    skills: string[],
}

interface SkillCategoryProps {
    category: SkillCategory,
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
    return (
        <div className='technical-skills-grid-item'>
            <p> {category.title} </p>
            <ul>
                {category.skills.map((skill, index) => (
                    <li key={index}> {skill} </li>
                ))}
            </ul>
        </div>
    )
}

function TechnicalSkills() {
    const categories = [
        {
            title: 'Programming Languages',
            skills: ['Python', 'Javascript', 'C/C++', 'Kotlin', 'Java'],
        },
        {
            title: 'Machine Learning Libraries',
            skills: ['Tensorflow', 'Pytorch', 'Scikit-learn', 'Numpy', 'Pandas'],
        },
        {
            title: 'Front-end Development',
            skills: ['HTML', 'CSS', 'Vue.js', 'React'],
        },
        {
            title: 'Back-end Development',
            skills: ['Django', 'Flask', 'FastAPI', 'Next js', 'Spark']
        },
        {
            title: 'Databases',
            skills: ['PostgreSQL', 'SQLite', 'MongoDB']
        },
        {
            title: 'Other',
            skills: ['Pybullet', 'Git', 'Latex']
        },
    ];

    return (
        <>
            <h2> Technical Skills </h2>
            <div className='technical-skills-grid'>
                {categories.map((category, index) => (
                    <SkillCategory key={index} category={category} />
                ))}
            </div>
        </>
 )
}

export default TechnicalSkills;