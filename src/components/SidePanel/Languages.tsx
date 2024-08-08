import React from "react";

interface Language {
    language: string,
    level: string,
}

interface PercentageCirclesProps {
    language: Language
}

const PercentageCircles: React.FC<PercentageCirclesProps> = ({ language }) => {
    return (
        <div className='language-circle-container'>
            <div className='language-circle' >
                <p className='language-level-text'> {language.level} </p>
            </div>
            <p> {language.language} </p>
        </div>
    )
}

function Languages() {
    const languages = [
        { language: 'English', level: 'C2' },
        { language: 'French', level: 'C2' },
        { language: 'Dutch', level: 'B1' },
    ]
    return (
        <div className='language-row'>
            {languages.map((language, index) => (
                <PercentageCircles key={index} language={language} />
            ))}
        </div>
    )
}

export default Languages;