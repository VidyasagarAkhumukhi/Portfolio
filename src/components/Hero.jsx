import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import heroImg from '../assets/hero.svg'

const Hero = () => {
    return (
        <div className='bg-stone-200 py-24'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-7xl font-bold tracking-wider'>
                        I'm Noob
                    </h1>
                    <p className='mt-4 text-3xl font-bold text-stone-600 capitalize tracking-wide'>Front-End Developer</p>
                    <p className='mt-1 text-lg text-stone-400 capitalize tracking-wider'>turning ideas into interactive reality</p>
                    <div className='flex gap-x-4 mt-4'>
                        <a href="https://github.com/VidyasagarAkhumukhi">
                            <FaGithubSquare className='h-8 w-8 text-stone-700 hover:text-slate-900' />
                        </a>
                        <a href="https://www.linkedin.com/in/vidyasagar-akhumukhi/">
                            <FaLinkedin className='h-8 w-8 text-stone-700 hover:text-blue-700' />
                        </a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img src={heroImg} alt="" className='h-70 lg:h-90' />
                </article>
            </div>
        </div>
    )

}

export default Hero
