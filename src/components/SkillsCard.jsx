import React, { useState } from 'react'

const SkillsCard = ({ icon, title, text }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <article
            className='group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect on hover */}
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

            {/* Icon container */}
            <div className='relative z-10 flex justify-center items-center mb-6'>
                <div className={`p-4 rounded-xl transition-all duration-500 ${isHovered
                        ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 scale-110'
                        : 'bg-gray-700/30'
                    }`}>
                    <span className='block transform transition-transform duration-300 group-hover:scale-110'>
                        {icon}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className='relative z-10 text-center space-y-3'>
                <h4 className='text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
                    {title}
                </h4>
                <p className='text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-4'>
                    {text}
                </p>
            </div>

            {/* Animated border */}
            <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 animate-pulse'></div>
            </div>

            {/* Corner accent */}
            <div className='absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </article>
    )
}

export default SkillsCard
