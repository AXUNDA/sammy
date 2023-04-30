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
                  <div className="section">
                        <AboutCard />
                        <div className=" playSection">
                              {/* <iframe style={{ borderRadius: '12px' }} className='spotify' src="https://open.spotify.com/embed/playlist/5YE6rNgwRrR3gyivopPBhM" width="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                              {/* <iframe style={{ borderRadius: '12px' }} className='spotify' src="https://open.spotify.com/embed/show/3UHIrTqr1Cm3BdxHEciBpi" width="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                              <iframe src="https://www.youtube.com/embed/MlK6SIjcjE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                              <iframe src="https://www.youtube.com/embed/MlK6SIjcjE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                        </div>
                  </div>
                  <div className="skillSection">
                        <Skills />
                        <Tools />


                  </div>
                  <div
                        className="cursor"
                        style={{ left: cursorPosition.x, top: cursorPosition.y }}
                  />
                  <Experience />
                  <Touch />
                  <Footer />

            </div>
      )
}
