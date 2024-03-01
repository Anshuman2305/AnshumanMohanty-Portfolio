import React from 'react'

function Experience() {
    return (
        <div className="experience-container p-2 lg:p-4">
            <h2 className="text-2xl text-brightgreen font-bold mb-4">EXPERIENCE</h2>
            <div className="card-container flex flex-col justify-center gap-4">
                <div className="card flex flex-col justify-center border-[3px] rounded-2xl border-dullgreen p-4">
                    <div className="chip-container flex flex-row gap-2 mb-4">
                        <div className="my-position text-mediumgreen text-sm bg-dullgreen py-1 px-3 rounded-full">GET MINING</div>
                        <div className="timefrom text-mediumgreen text-sm bg-dullgreen py-1 px-3 rounded-full">Jun 23 - Dec 23</div>
                    </div>
                    <h3 className="text-brightgreen text-lg lg:text-xl px-2">Hindustan Copper Ltd.</h3>
                </div>
                <div className="card flex flex-col justify-center border-[3px] rounded-2xl border-dullgreen p-4">
                    <div className="chip-container flex flex-row gap-2 mb-4">
                        <div className="my-position text-mediumgreen text-sm bg-dullgreen py-1 px-3 rounded-full">TRAINEE</div>
                        <div className="timefrom text-mediumgreen text-sm bg-dullgreen py-1 px-3 rounded-full">May 22 - Jun 22</div>
                    </div>
                    <h3 className="text-brightgreen text-lg lg:text-xl px-2">National Aluminium Company </h3>
                </div>
            </div>
        </div>
    )
}

export default Experience