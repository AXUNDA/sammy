import React, { useState } from 'react'
import Nav from '../components/Nav'
import "./styles.css"
import AboutCard from '../components/AboutCard'

export default function About() {
      const [about, setAbout] = useState(true)
      return (
            <div className='about'>
                  <Nav about={about} />
                  <AboutCard />

            </div>
      )
}
