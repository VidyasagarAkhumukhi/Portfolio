import React, { useState, useEffect, useRef } from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

import Hyperspeed from './animations/Hyperspeed';

// the component will fill the height/width of its parent container, edit the CSS to change this
// the options below are the default values


const Skills = () => {
    const [isVisible, setIsVisible] = useState(false)
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

    return (
        <section
            ref={sectionRef}
            className='relative py-20 bg-gray-950 overflow-hidden min-h-screen w-screen'
            id='skills'
        >
            {/* Background Effects */}
            <div className='absolute inset-0 w-screen h-full opacity-40 pointer-events-none'>
                <div className='w-screen h-full'>
                    <Hyperspeed
                        effectOptions={{
                            onSpeedUp: () => { },
                            onSlowDown: () => { },
                            distortion: 'turbulentDistortion',
                            length: 400,
                            roadWidth: 10,
                            islandWidth: 2,
                            lanesPerRoad: 4,
                            fov: 90,
                            fovSpeedUp: 150,
                            speedUp: 1.2,
                            carLightsFade: 0.8,
                            totalSideLightSticks: 20,
                            lightPairsPerRoadWay: 40,
                            shoulderLinesWidthPercentage: 0.05,
                            brokenLinesWidthPercentage: 0.1,
                            brokenLinesLengthPercentage: 0.5,
                            lightStickWidth: [0.12, 0.5],
                            lightStickHeight: [1.3, 1.7],
                            movingAwaySpeed: [40, 60],
                            movingCloserSpeed: [-80, -120],
                            carLightsLength: [400 * 0.03, 400 * 0.2],
                            carLightsRadius: [0.05, 0.14],
                            carWidthPercentage: [0.3, 0.5],
                            carShiftX: [-0.8, 0.8],
                            carFloorSeparation: [0, 5],
                            colors: {
                                roadColor: 0x050505,
                                islandColor: 0x0a0a0a,
                                background: 0x000000,
                                shoulderLines: 0x8b5cf6,
                                brokenLines: 0xa855f7,
                                leftCars: [0xD856BF, 0x8b5cf6, 0xC247AC],
                                rightCars: [0x3b82f6, 0x6366f1, 0x8b5cf6],
                                sticks: 0x8b5cf6,
                            }
                        }}
                    />
                </div>
            </div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]'></div>
            <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>

            <div className='align-element relative z-10'>
                <div className='text-center mb-16'>
                    <SectionTitle text='tech stack' />
                    <p className='mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                        Passionate about cutting-edge technologies and building scalable, performant applications
                        with modern tools and frameworks.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className='grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {skills.map((skill, index) => {
                        return (
                            <div
                                key={skill.id}
                                className={`transform transition-all duration-700 ${isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                <SkillsCard {...skill} />
                            </div>
                        )
                    })}
                </div>

                {/* Skills Summary */}
                <div className='mt-20 text-center'>
                    <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm'>
                        <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3'></div>
                        <span className='text-gray-300 font-medium'>
                            Always learning and exploring new technologies
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
            </div>
        </section>
    )
}

export default Skills
