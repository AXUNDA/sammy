import React from 'react'
import sammy from "../assets/Ellipse 1.png"
import "./styles.css"

export default function Nav() {
      return (
            <div className='nav'>
                  <img src={sammy} className="sam" />
                  <div className="main">
                        <div className="tags">
                              <p className='tag'>Work</p>
                              <p className='tag'>About</p>
                              <p className='tag'>Contact</p>

                        </div>

                  </div>

            </div>
      )
}
