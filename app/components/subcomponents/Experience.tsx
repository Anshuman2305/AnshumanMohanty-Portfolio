import React from 'react'
import ExperienceCard from './reusableComponents/Experiencecard'

function Experience() {
    return (
        <div className="experience-container p-2 lg:p-4">
            <h2 className="text-2xl text-brightgreen font-bold mb-4">EXPERIENCE</h2>
            <div className="card-container flex flex-col justify-center gap-4">
                <ExperienceCard designation='GET Mining' timeperiod='Jun 23 - Dec 23' company='Hindustan Copper Ltd.' />
                <ExperienceCard designation='Traniee' timeperiod='May 22 - Jun 22' company='National Aluminium Company Ltd.' />
            </div>
        </div>
    )
}

export default Experience