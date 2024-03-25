import React from 'react'
import EducationCard from './reusableComponents/Educationcard'

function Education() {
    return (
        <div className="education-container p-2 lg:p-4">
            <h2 className="text-2xl text-brightgreen font-bold mb-4 px-2">EDUCATION</h2>
            <div className="card-container flex flex-col justify-center gap-4">
                <EducationCard

                    timeperiod='Jul 19 - May 23'
                    marks='9.17/10'
                    institute_name='National Institute of Technology Raipur'
                    short_institute_name='NIT Raipur'
                    description='B.Tech in Mining Engineering'

                />
                <EducationCard

                    timeperiod='Apr 17 - May 18'
                    marks='90.4%'
                    institute_name='Kendriya Vidyalaya No. 2 Raipur'
                    short_institute_name='Kendriya Vidyalaya No. 2 Raipur'
                    description='Class XII (PCM+CS)'

                />
                <EducationCard

                    timeperiod='Apr 15 - May 16'
                    marks='10/10'
                    institute_name='Kendriya Vidyalaya No. 2 Raipur'
                    short_institute_name='Kendriya Vidyalaya No. 2 Raipur'
                    description='Class X (Science)'

                />
            </div>
        </div>
    )
}

export default Education