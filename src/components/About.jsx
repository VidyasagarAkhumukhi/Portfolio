import React, { useState, useEffect, useRef } from 'react'
import aboutImg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
import { FaCode, FaCoffee, FaGraduationCap, FaHeart, FaMapMarkerAlt, FaRocket } from 'react-icons/fa'
// import Beams from './Beams';


const About = () => {
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
            className='relative py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 overflow-hidden'
            id='about'
        >
            {/* Background Effects */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]'></div>
            <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>

            <div className='align-element relative z-10'>
                <div className='grid lg:grid-cols-2 items-center gap-16 xl:gap-20'>

                    {/* Image Section */}
                    <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                        }`}>
                        <div className='relative'>
                            {/* Glassmorphism container for image */}
                            <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl'>
                                <img
                                    src={aboutImg}
                                    alt="About illustration"
                                    className='w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-105'
                                />

                                {/* Floating elements */}
                                <div className='absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse'>
                                    <FaCode className='text-white text-xl' />
                                </div>
                                <div className='absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000'>
                                    <FaCoffee className='text-white text-sm' />
                                </div>
                            </div>

                            {/* Background glow */}
                            <div className='absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10'></div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                        }`}>
                        <article className='space-y-8'>
                            <div>
                                <SectionTitle text='About' className='text-gradient' />
                                <div className='mt-4 flex items-center space-x-2 text-purple-400'>
                                    <FaMapMarkerAlt className='text-sm' />
                                    <span className='text-sm font-medium'>Galway, Ireland</span>
                                </div>
                            </div>

                            {/* Story Cards */}
                            <div className='space-y-6'>
                                {/* Introduction Card */}
                                <div className='bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/15'>
                                    <div className='flex items-start space-x-4'>
                                        <div className='flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
                                            <FaHeart className='text-white text-sm' />
                                        </div>
                                        <div>
                                            <h3 className='text-lg font-semibold text-white mb-2'>Passionate Developer</h3>
                                            <p className='text-gray-300 leading-relaxed'>
                                                Hello, I'm <span className='text-purple-400 font-medium'>Vidyasagar Akhumukhi</span>, a front-end developer whose journey from Mumbai to Galway has been fueled by a passion for crafting web experiences that are not only functional but genuinely delightful to use.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Approach Card */}
                                <div className='bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/15'>
                                    <div className='flex items-start space-x-4'>
                                        <div className='flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center'>
                                            <FaRocket className='text-white text-sm' />
                                        </div>
                                        <div>
                                            <h3 className='text-lg font-semibold text-white mb-2'>My Approach</h3>
                                            <p className='text-gray-300 leading-relaxed'>
                                                I combine thoughtful user-experience design with clean, efficient code. It's a dynamic field, and I embrace the continuous learning it demands – a pursuit I've keenly advanced with recent studies here in Ireland.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Current Status Card */}
                                <div className='bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-green-500/30 hover:bg-white/15'>
                                    <div className='flex items-start space-x-4'>
                                        <div className='flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center'>
                                            <FaGraduationCap className='text-white text-sm' />
                                        </div>
                                        <div>
                                            <h3 className='text-lg font-semibold text-white mb-2'>Ready to Collaborate</h3>
                                            <p className='text-gray-300 leading-relaxed'>
                                                Currently based in Galway with <span className='text-green-400 font-medium'>Stamp 1G authorization</span> for full-time work. I'm eager to join a collaborative team and apply my front-end skills to build polished, user-centric applications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className='pt-6'>
                                <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm'>
                                    <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3'></div>
                                    <span className='text-gray-300 font-medium'>
                                        Let's build something amazing together
                                    </span>
                                </div>
                            </div>
                        </article>
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

export default About