import React from 'react'
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

const ProfileCard = ({ className = "" }) => {
    return (
        <div className={`relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 ${className}`}>
            {/* Glow effect on hover */}
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

            {/* Profile Image */}
            <div className='relative z-10 flex flex-col items-center space-y-4'>
                <div className='relative'>
                    <div className='w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold'>
                        VA
                    </div>
                    <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center'>
                        <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
                    </div>
                </div>

                {/* Profile Info */}
                <div className='text-center space-y-2'>
                    <h3 className='text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
                        Vidyasagar Akhumukhi
                    </h3>
                    <p className='text-purple-400 font-medium'>Frontend Developer</p>
                    <div className='flex items-center justify-center gap-2 text-sm text-gray-400'>
                        <FaMapMarkerAlt className='w-4 h-4' />
                        <span>Galway, Ireland</span>
                    </div>
                </div>

                {/* Status */}
                <div className='flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30'>
                    <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                    <span className='text-xs text-green-300 font-medium'>Available for work</span>
                </div>

                {/* Social Links */}
                <div className='flex gap-3 pt-2'>
                    <a
                        href="https://github.com/VidyasagarAkhumukhi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='p-2 bg-gray-700/50 rounded-lg hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 group/icon'
                    >
                        <FaGithub className='w-5 h-5 text-gray-300 group-hover/icon:text-white transition-colors duration-300' />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vidyasagar-akhumukhi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='p-2 bg-gray-700/50 rounded-lg hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group/icon'
                    >
                        <FaLinkedin className='w-5 h-5 text-gray-300 group-hover/icon:text-blue-400 transition-colors duration-300' />
                    </a>
                    <a
                        href="mailto:sagar112113@gmail.com"
                        className='p-2 bg-gray-700/50 rounded-lg hover:bg-green-600/20 hover:scale-110 transition-all duration-300 group/icon'
                    >
                        <FaEnvelope className='w-5 h-5 text-gray-300 group-hover/icon:text-green-400 transition-colors duration-300' />
                    </a>
                </div>

                {/* Skills Tags */}
                <div className='flex flex-wrap gap-2 pt-3'>
                    {['React', 'JavaScript', 'Tailwind'].map((skill) => (
                        <span
                            key={skill}
                            className='px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs font-medium border border-purple-500/30'
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Corner accent */}
            <div className='absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
    )
}

export default ProfileCard