import React from 'react'

function Projects() {
    return (
        <div className="hero-container flex flex-row gap-8 justify-between items-center px-2 lg:px-8 py-12">
            <div className="flex flex-col gap-6 w-full">
                <h1 className="text-3xl text-brightgreen font-bold">Projects -{'>'}</h1>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="card flex basis-1/2 flex-col gap-2 justify-center border-[3px] rounded-2xl border-dullgreen p-4">
                        <h3 className="text-brightgreen text-lg lg:text-xl px-2 font-bold line-clamp-1">Rock Identification using ML</h3>
                        <p className="text-mediumgreen text-sm px-2 line-clamp-2">From delving into the depths of the earth to navigating the vast expanses of the digital realm.</p>
                    </div>
                    <div className="card flex basis-1/2 flex-col gap-2 justify-center border-[3px] rounded-2xl border-dullgreen p-4">
                        <h3 className="text-brightgreen text-lg lg:text-xl px-2 font-bold line-clamp-1">Hindustan Copper Ltd.</h3>
                        <p className="text-mediumgreen text-sm px-2 line-clamp-2">From delving into the depths of the earth to navigating the vast expanses of the digital realm.</p>
                    </div>
                    <div className="card flex basis-1/2 flex-col gap-2 justify-center border-[3px] rounded-2xl border-dullgreen p-4">
                        <h3 className="text-brightgreen text-lg lg:text-xl px-2 font-bold line-clamp-1">Rock Identification using ML</h3>
                        <p className="text-mediumgreen text-sm px-2 line-clamp-2">From delving into the depths of the earth to navigating the vast expanses of the digital realm.</p>
                    </div>
                    <div className="card flex basis-1/2 flex-col gap-2 justify-center border-[3px] rounded-2xl border-dullgreen p-4">
                        <h3 className="text-brightgreen text-lg lg:text-xl px-2 font-bold line-clamp-1">Hindustan Copper Ltd.</h3>
                        <p className="text-mediumgreen text-sm px-2 line-clamp-2">From delving into the depths of the earth to navigating the vast expanses of the digital realm.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects