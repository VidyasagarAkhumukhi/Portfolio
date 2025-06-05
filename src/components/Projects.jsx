import React from 'react'
import SectionTitle from './SectionTitle'
import { projects } from '../data'
import ProjectCard from './ProjectCard'


const Projects = () => {
    return (
        <section className='py-20 align-element bgs' id='projects' >
            <SectionTitle text='Web Creations' />
            <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-2 gap-8'>
                {projects.map((project) => {
                    return <ProjectCard key={project.id} {...project} />
                })}

            </div>
            Projects

        </section>
    )
}

export default Projects
