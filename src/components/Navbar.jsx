import React, { useState, useEffect } from 'react'
import { links } from '../data'
import { FaBars, FaTimes, FaCode } from 'react-icons/fa'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle smooth scrolling and close mobile menu
    const handleLinkClick = (href) => {
        setIsMenuOpen(false)
        if (href.startsWith('#')) {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10'
                : 'bg-transparent'
            }`}>
            <div className='align-element py-4 flex items-center justify-between'>
                {/* Logo */}
                <div className='flex items-center gap-2 group cursor-pointer' onClick={() => handleLinkClick('#home')}>
                    <div className='p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                        <FaCode className='h-6 w-6 text-white' />
                    </div>
                    <h2 className='text-2xl md:text-3xl font-bold text-white'>
                        Vidya<span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>sagar</span>
                    </h2>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-8'>
                    {links.map((link) => {
                        const { id, href, text } = link
                        return (
                            <a
                                href={href}
                                key={id}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleLinkClick(href)
                                }}
                                className='group relative px-4 py-2 text-gray-300 hover:text-white font-medium capitalize tracking-wide transition-all duration-300 hover:scale-105'
                            >
                                <span className='relative z-10'>{text}</span>
                                {/* Hover effect */}
                                <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm'></div>
                                {/* Active indicator */}
                                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300'></div>
                            </a>
                        )
                    })}

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick('#contact')
                        }}
                        className='px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='md:hidden p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-110'
                >
                    {isMenuOpen ? (
                        <FaTimes className='h-5 w-5 text-gray-300' />
                    ) : (
                        <FaBars className='h-5 w-5 text-gray-300' />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}>
                <div className='bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20'>
                    <div className='align-element py-6 space-y-4'>
                        {links.map((link) => {
                            const { id, href, text } = link
                            return (
                                <a
                                    href={href}
                                    key={id}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleLinkClick(href)
                                    }}
                                    className='block px-4 py-3 text-gray-300 hover:text-white font-medium capitalize tracking-wide transition-all duration-300 hover:bg-purple-500/10 rounded-lg hover:translate-x-2'
                                >
                                    {text}
                                </a>
                            )
                        })}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                handleLinkClick('#contact')
                            }}
                            className='block px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center'
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
