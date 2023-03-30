import React, { useState } from 'react'
import Nav from '../components/Nav'
import "./styles.css"
import AboutCard from '../components/AboutCard'
import Skills from '../components/Skills'
import Tools from '../components/Tools'
import Experience from '../components/Experience'
import Touch from '../components/Touch'
import Footer from '../components/Footer'

export default function About() {
      const [about, setAbout] = useState(true)
      const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

      const handleMouseMove = (event) => {
            setTimeout(() => {
                  setCursorPosition({ x: event.clientX, y: event.clientY });


            }, 100)
      };
      return (
            <div className='about' onMouseMove={handleMouseMove}>
                  <Nav about={about} />
                  <div
                        className="cursor"
                        style={{ left: cursorPosition.x, top: cursorPosition.y }}
                  />
                  <AboutCard />
                  <div className="skillSection">
                        <Skills />
                        <Tools />


                  </div>
                  <Experience />
                  <Touch />
                  <Footer />

            </div>
      )
}
