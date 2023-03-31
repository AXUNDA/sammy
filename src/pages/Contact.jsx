import React, { useState } from 'react'
import Nav from '../components/Nav'
import Email from '../components/Email'
import Twitter from '../components/Twitter'
import Dribble from '../components/Dribble'
import Behance from '../components/Behance'
import LinkedIn from '../components/LinkedIn'





export default function Contact() {
      const [contact, setContact] = useState(true)
      const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

      const handleMouseMove = (event) => {
            setTimeout(() => {
                  setCursorPosition({ x: event.clientX, y: event.clientY });


            }, 100)
      };
      return (
            <div className='contact' onMouseMove={handleMouseMove}>
                  <Nav contact={contact} />
                  <div className="socials">
                        <Email />
                        <div className="sc">
                              <div className="social">
                                    <Twitter />
                                    <Dribble />

                              </div>
                              <div className="social">
                                    <Behance />
                                    <LinkedIn />

                              </div>

                        </div>




                  </div>
                  <div
                        className="cursor"
                        style={{ left: cursorPosition.x, top: cursorPosition.y }}
                  />


            </div>
      )
}
