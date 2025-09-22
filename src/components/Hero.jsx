import React from 'react'
import { FaGithubSquare, FaLinkedin, FaDownload, FaArrowDown } from 'react-icons/fa'
import heroImg from '../assets/hero.svg'
import resume from '../assets/Resume.pdf'
import TrueFocus from './animations/Text_Focus'

const Hero = () => {
    return (
        <section id='home' className='relative overflow-hidden'>
            {/* Animated Background */}
            <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
                {/* Floating particles background */}
                <div className='absolute inset-0 overflow-hidden'>
                    <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
                    <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl animate-bounce'></div>
                    <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-xl animate-pulse'></div>

                </div>

                {/* Grid pattern overlay */}
                <div className='absolute inset-0 opacity-20'>
                    <div className='h-full w-full bg-[radial-gradient(circle,rgba(120,119,198,0.1)_1px,transparent_1px)] [background-size:20px_20px]'></div>
                </div>
            </div>

            <div className='relative py-32 min-h-screen flex items-center'>
                <div className='align-element grid md:grid-cols-2 items-center gap-12 w-full'>
                    {/* Content Section */}
                    <article className='space-y-8 animate-fade-in-up'>
                        {/* Badge */}
                        <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm'>
                            <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3'></div>
                            <span className='text-sm text-gray-300 font-medium'>Available for opportunities</span>
                        </div>

                        {/* Main Heading */}
                        <div className='space-y-4'>
                            <h1 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight'>
                                <span className='block animate-slide-in-left'>Hi, I'm</span>
                                <span className='block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-slide-in-right [animation-delay:0.3s]'>
                                    Vidyasagar
                                </span>
                            </h1>

                            <div className='space-y-2 animate-fade-in [animation-delay:0.6s]'>
                                <div className='text-xl md:text-2xl lg:text-3xl font-bold'>
                                    <TrueFocus
                                        sentence="Frontend Developer"
                                        manualMode={false}
                                        blurAmount={3}
                                        borderColor="#f75555"
                                        glowColor="rgba(0, 0, 0, 0.116)"
                                        animationDuration={1.5}
                                        pauseBetweenAnimations={2}
                                    />
                                </div>
                                <p className='text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mt-4'>
                                    Crafting exceptional digital experiences with modern technologies.
                                    Turning innovative ideas into interactive reality.
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in [animation-delay:0.9s]'>
                            <a
                                href={resume}
                                download="Vidyasagar_Resume.pdf"
                                className='group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 inline-flex items-center justify-center gap-2 text-center'
                            >
                                <span className='relative z-10 flex items-center justify-center gap-2'>
                                    <FaDownload className='transition-transform group-hover:scale-110' />
                                    Download Resume
                                </span>
                                <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </a>

                            <a
                                href="#projects"
                                className='px-6 md:px-8 py-3 md:py-4 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-xl backdrop-blur-sm hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center text-center'
                            >
                                View Projects
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-6 animate-fade-in [animation-delay:1.2s]'>
                            <span className='text-gray-400 text-sm font-medium'>Connect with me:</span>
                            <div className='flex gap-4'>
                                <a
                                    href="https://github.com/VidyasagarAkhumukhi"
                                    className='group p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithubSquare className='h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300' />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vidyasagar-akhumukhi/"
                                    className='group p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className='h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300' />
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Image Section */}
                    <article className='hidden md:flex justify-center items-center animate-fade-in-right [animation-delay:0.5s]'>
                        <div className='relative'>
                            {/* Decorative elements */}
                            <div className='absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse'></div>
                            <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce'></div>
                            <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-15 animate-pulse'></div>

                            {/* Main image container */}
                            <div className='relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:scale-105'>
                                <img
                                    src={heroImg}
                                    alt="Vidyasagar - Front-End Developer"
                                    className='h-64 md:h-80 lg:h-96 xl:h-[28rem] w-auto mx-auto filter drop-shadow-2xl'
                                />
                            </div>
                        </div>
                    </article>
                </div>

                {/* Scroll indicator */}
                <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                    <div className='flex flex-col items-center gap-2 text-gray-400'>
                        <span className='text-sm font-medium'>Scroll to explore</span>
                        <FaArrowDown className='h-4 w-4 animate-pulse' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
