import React, { useState, useEffect, useRef } from 'react'
import SectionTitle from './SectionTitle'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [filter, setFilter] = useState('all')
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const categories = [
        { value: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.text.toLowerCase().includes('full-stack') || p.text.toLowerCase().includes('fullstack')).length },
        { value: 'react', label: 'React Apps', count: projects.filter(p => p.title.toLowerCase().includes('react') || p.text.toLowerCase().includes('react')).length },
        { value: 'all', label: 'All Projects', count: projects.length },
        { value: 'ecommerce', label: 'E-commerce', count: projects.filter(p => p.text.toLowerCase().includes('store') || p.text.toLowerCase().includes('cart') || p.text.toLowerCase().includes('e-commerce')).length }
    ]

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => {
            const text = project.text.toLowerCase()
            const title = project.title.toLowerCase()

            switch (filter) {
                case 'react':
                    return text.includes('react') || title.includes('react')
                case 'fullstack':
                    return text.includes('full-stack') || text.includes('fullstack')
                case 'ecommerce':
                    return text.includes('store') || text.includes('cart') || text.includes('e-commerce')
                default:
                    return true
            }
        })

    return (
        <section
            ref={sectionRef}
            className='relative py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 overflow-hidden'
            id='projects'
        >
            {/* Background Effects */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(139,92,246,0.1),transparent_50%)]'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.08),transparent_50%)]'></div>
            <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>

            <div className='align-element relative z-10'>
                {/* Header Section */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <SectionTitle text='Web Creations' />
                    <p className='mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                        A showcase of innovative web applications, from sleek React components to
                        full-stack solutions, demonstrating modern development practices and user-centric design.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {categories.map(category => (
                        <button
                            key={category.value}
                            onClick={() => setFilter(category.value)}
                            className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${filter === category.value
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                                : 'bg-white/10 text-gray-300 border border-white/20 backdrop-blur-sm hover:bg-white/15 hover:border-purple-500/30'
                                }`}
                        >
                            <span className='relative z-10 flex items-center gap-2'>
                                {category.label}
                                <span className={`text-xs px-2 py-0.5 rounded-full ${filter === category.value
                                    ? 'bg-white/20 text-white'
                                    : 'bg-purple-500/20 text-purple-300'
                                    }`}>
                                    {category.count}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`transform transition-all duration-700 ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-12 opacity-0'
                                }`}
                            style={{
                                transitionDelay: `${(index * 150) + 600}ms`
                            }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <div className='text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                        <div className='text-3xl font-bold text-purple-400 mb-2'>{projects.length}+</div>
                        <div className='text-gray-300 text-sm'>Projects Built</div>
                    </div>
                    <div className='text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                        <div className='text-3xl font-bold text-blue-400 mb-2'>100%</div>
                        <div className='text-gray-300 text-sm'>Responsive Design</div>
                    </div>
                    <div className='text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                        <div className='text-3xl font-bold text-green-400 mb-2'>Modern</div>
                        <div className='text-gray-300 text-sm'>Tech Stack</div>
                    </div>
                    <div className='text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                        <div className='text-3xl font-bold text-indigo-400 mb-2'>Live</div>
                        <div className='text-gray-300 text-sm'>Deployments</div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`mt-16 text-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm'>
                        <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3'></div>
                        <span className='text-gray-300 font-medium'>
                            More projects available on GitHub
                        </span>
                    </div>
                </div>
            </div>

            {/* Floating Particles */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse'></div>
                <div className='absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce'></div>
                <div className='absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-pulse delay-1000'></div>
                <div className='absolute top-1/2 right-1/4 w-1 h-1 bg-purple-300/40 rounded-full animate-bounce delay-500'></div>
                <div className='absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse delay-700'></div>
            </div>
        </section>
    )
}

export default Projects
