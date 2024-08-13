interface TechnicalSkillEntry {
    title: string,
    skills: string[],
}

const allTechnicalSkills: TechnicalSkillEntry[] = [
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

export default allTechnicalSkills