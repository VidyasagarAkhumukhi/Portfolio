import React from 'react'
import SectionTitle from './SectionTitle'
import { projects } from '../data'
import ProjectCard from './ProjectCard'


const Projects = () => {
    return (
        <section className='py-20 align-element bg-' id='projects' >
            <SectionTitle text='Web Creations' />
            <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-7'>
                {projects.map((project) => {
                    return <ProjectCard key={project.id} {...project} />
                })}

            </div>
            Projects

        </section>
    )
}

export default Projects
