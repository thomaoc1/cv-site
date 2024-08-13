interface EducationEntry {
    pathToImage: string,
    uni: string,
    date: string,
    degree: string,
}

const education: EducationEntry[] = [
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

export default education;