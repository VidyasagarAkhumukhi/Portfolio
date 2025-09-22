import React from 'react'
import aboutImg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
// import Beams from './Beams';


const About = () => {
    return (
        <section className='bg-stone-950 py-20' id='about'>

            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutImg} alt="" className='w-full h-69' />
                <article>
                    <SectionTitle text='Code and Coffee' className='text-amber-50' />
                    <p className='text-stone-300 mt-4 leading-loose'>Hello, I'm Vidyasagar Akhumukhi, a front-end developer whose journey from Mumbai to Galway has been fueled by a passion for crafting web experiences that are not only functional but genuinely delightful to use. I thrive on turning creative visions into intuitive and visually engaging interfaces. <br />

                        My approach combines thoughtful user-experience design with clean, efficient code. It's a dynamic field, and I embrace the continuous learning it demands – a pursuit I've keenly advanced with recent studies here in Ireland. <br />

                        Currently based in Galway with a Stamp 1G authorizing full-time work, I'm eager to join a collaborative team. I'm looking to apply my front-end skills to build polished, user-centric applications, and enjoy doing it with colleagues who appreciate both technical skill and a positive, problem-solving spirit (and maybe a shared chuckle over tricky CSS!). <br />

                        If you need a front-end developer who’s enthusiastic, detail-oriented, and brings a proactive attitude to the table, I’d be very happy to connect."</p>
                </article>
            </div>
        </section>
    )
}

export default About
