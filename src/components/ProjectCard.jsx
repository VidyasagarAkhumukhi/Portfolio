import React, { useState } from 'react'
import { FaGithubSquare, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ url, img, github, title, text }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <article
            className='group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-purple-500/10'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className='relative overflow-hidden rounded-t-3xl bg-gray-800/50'>
                <div className={`relative transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                    <img
                        src={img}
                        alt={title}
                        className={`w-full h-64 object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                            } ${isHovered ? 'brightness-75' : 'brightness-100'}`}
                        onLoad={() => setImageLoaded(true)}
                    />

                    {/* Loading Placeholder */}
                    {!imageLoaded && (
                        <div className='absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center'>
                            <FaCode className='text-4xl text-gray-500' />
                        </div>
                    )}
                </div>

                {/* Overlay with Action Buttons */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className='flex gap-4'>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='group/btn bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 transition-all duration-300 hover:bg-purple-500/30 hover:border-purple-400 hover:scale-110'
                            title="View Live Site"
                        >
                            <FaEye className='text-white text-xl transition-transform duration-300 group-hover/btn:scale-110' />
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='group/btn bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 transition-all duration-300 hover:bg-blue-500/30 hover:border-blue-400 hover:scale-110'
                            title="View Source Code"
                        >
                            <FaGithubSquare className='text-white text-xl transition-transform duration-300 group-hover/btn:scale-110' />
                        </a>
                    </div>
                </div>

                {/* Tech Badge */}
                <div className='absolute top-4 right-4'>
                    <div className='bg-gradient-to-r from-purple-500/80 to-blue-500/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20'>
                        <span className='text-white text-xs font-medium'>Live Project</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className='p-6 space-y-4'>
                {/* Title */}
                <h3 className='text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-1'>
                    {title}
                </h3>

                {/* Description */}
                <p className='text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300'>
                    {text}
                </p>

                {/* Action Links */}
                <div className='flex items-center justify-between pt-4 border-t border-white/10'>
                    <div className='flex gap-3'>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm font-medium rounded-lg border border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/30 hover:text-white hover:scale-105'
                        >
                            <TbWorldWww className='text-sm' />
                            Live Demo
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-300 text-sm font-medium rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-105'
                        >
                            <FaCode className='text-sm' />
                            Code
                        </a>
                    </div>

                    {/* External Link Icon */}
                    <FaExternalLinkAlt className='text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300' />
                </div>
            </div>

            {/* Gradient Border Effect */}
            <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm'></div>
        </article>
    )
}

export default ProjectCard
