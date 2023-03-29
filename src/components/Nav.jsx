import React from 'react'
import sammy from "../assets/sammy.jpg"
import "./styles.css"
import "../fonts/Satoshi-Regular.otf"


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
