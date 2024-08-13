import React from "react";
import allTechnicalSkills from "./technicalSkillsData.ts";

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
    return (
        <div>
            <h2> Technical Skills </h2>
            <div className='technical-skills-grid'>
                {allTechnicalSkills.map((category, index) => (
                    <SkillCategory key={index} category={category} />
                ))}
            </div>
        </div>
 )
}

export default TechnicalSkills;