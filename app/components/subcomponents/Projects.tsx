import React from 'react'
import ProjectCard from './reusableComponents/Projectcard'

function Projects() {
    return (
        <div className="hero-container flex flex-row gap-8 justify-between items-center px-2 lg:px-8 py-12">
            <div className="flex flex-col gap-6 w-full">
                <h1 className="text-3xl text-brightgreen font-bold">Projects -{'>'}</h1>
                <div className="grid md:grid-cols-2 gap-4">
                    <ProjectCard title="Rock Identification using ML" description="From delving into the depths of the earth to navigating the vast expanses of the digital realm." />
                    <ProjectCard title="Rock Identification using ML" description="From delving into the depths of the earth to navigating the vast expanses of the digital realm." />
                    <ProjectCard title="Rock Identification using ML" description="From delving into the depths of the earth to navigating the vast expanses of the digital realm." />
                    <ProjectCard title="Rock Identification using ML" description="From delving into the depths of the earth to navigating the vast expanses of the digital realm." />
                </div>
            </div>
        </div>
    )
}

export default Projects