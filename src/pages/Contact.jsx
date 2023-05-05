import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Email from '../components/Email'
import Twitter from '../components/Twitter'
import Dribble from '../components/Dribble'
import Behance from '../components/Behance'
import LinkedIn from '../components/LinkedIn'
import Project from '../components/Project'
import Compass from '../components/Compass'





export default function Contact() {

      const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
      const [isLoading, setIsLoading] = useState(true);


      const handleMouseMove = (event) => {
            setTimeout(() => {
                  setCursorPosition({ x: event.clientX, y: event.clientY });


            }, 100)
      };
      useEffect(() => {



            setTimeout(() => {
                  setIsLoading(false);
            }, 3000);
      }, []);
      return (
            <>
                  {isLoading ? (<Compass />) : (
                        <div className='contact' onMouseMove={handleMouseMove}>
                              <Nav contact={true} />
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
                              <Project />

                              <div
                                    className="cursor"
                                    style={{ left: cursorPosition.x, top: cursorPosition.y }}
                              />
                        </div>


                  )}
            </>

      )
}
