import React from 'react'

function Education() {
    return (
        <div className="education-container p-2 lg:p-4">
            <h2 className="text-2xl text-brightgreen font-bold mb-4">EDUCATION</h2>
            <div className="card-container flex flex-col justify-center gap-4">
                <div className="card flex flex-col justify-center rounded-2xl bg-dullgreen p-4">
                    <div className="chip-container flex flex-row gap-2 mb-2">
                        <div className="timefrom text-mediumgreen text-sm bg-darkgreen-bg py-1 px-3 rounded-full">Jul 19 - May 23</div>
                        <div className="timefrom text-mediumgreen text-sm bg-darkgreen-bg py-1 px-3 rounded-full">9.17/10</div>
                    </div>
                    <h3 className="text-brightgreen text-lg px-2 mb-1 hidden md:block">National Institute of Technology Raipur</h3>
                    <h3 className="text-brightgreen text-lg px-2 mb-1 block md:hidden">NIT Raipur</h3>
                    <p className="px-3 text-mediumgreen">- B.Tech in Mining Engineering</p>
                </div>
                <div className="card flex flex-col justify-center rounded-2xl bg-dullgreen p-4">
                    <div className="chip-container flex flex-row gap-2 mb-2">
                        <div className="timefrom text-mediumgreen text-sm bg-darkgreen-bg py-1 px-3 rounded-full">Jun 23 - Dec 23</div>
                        <div className="timefrom text-mediumgreen text-sm bg-darkgreen-bg py-1 px-3 rounded-full">90.4%</div>
                    </div>
                    <h3 className="text-brightgreen text-lg px-2 mb-1">Kendriya Vidyalaya No. 2 Raipur</h3>
                    <p className="px-3 text-mediumgreen">- Class XII (PCM+CS)</p>
                </div>
                <div className="card flex flex-col justify-center rounded-2xl bg-dullgreen p-4">
                    <div className="chip-container flex flex-row gap-2 mb-2">
                        <div className="timefrom text-mediumgreen text-sm bg-darkgreen-bg py-1 px-3 rounded-full">Jun 23 - Dec 23</div>
                        <div className="timefrom text-mediumgreen text-sm bg-darkgreen-bg py-1 px-3 rounded-full">10/10</div>
                    </div>
                    <h3 className="text-brightgreen text-lg px-2 mb-1">Kendriya Vidyalaya No. 2 Raipur</h3>
                    <p className="px-3 text-mediumgreen">- Class X (Science)</p>
                </div>
            </div>
        </div>
    )
}

export default Education