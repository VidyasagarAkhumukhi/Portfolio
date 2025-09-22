import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Connect from './components/Connect'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='relative'>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Connect />
      </main>
    </>
  )
}

export default App
