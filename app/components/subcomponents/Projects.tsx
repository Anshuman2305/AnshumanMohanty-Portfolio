import React from 'react'
import ProjectCard from './reusableComponents/Projectcard'

function Projects() {
    return (
        <div className="hero-container flex flex-row gap-8 justify-between items-center px-2 py-2 lg:px-8 lg:py-12">
            <div className="flex flex-col gap-6 w-full">
                <h1 className="text-3xl text-brightgreen font-bold px-2">Projects -{'>'}</h1>
                <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                    <ProjectCard web_link='https://github.com/Anshuman2305/Twitter-Clone-NextJs' title="Twitter Clone" description="Twitter Clone using Next.js and Sanity.io." />
                    <ProjectCard web_link='https://github.com/Anshuman2305/Blogging-Website-Nextjs' title="Blogging Website" description="Personal Blogging Website using Next.js and Sanity.io." />
                    <ProjectCard web_link='https://github.com/Anshuman2305/Mental-Health-CodeUtsava' title="Depression Detection WebApp" description="A Depression Detection WebApp using Sklearn and Flask." />
                    <ProjectCard web_link='https://github.com/Anshuman2305/Rock-Identification' title="Rock Identification using ML" description="Rock Identification using CNN and Tensorflow.js." />
                </div>
            </div>
        </div>
    )
}

export default Projects