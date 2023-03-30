import React from 'react'
import sammy from "../assets/sammy.jpg"
import "./styles.css"
import "../fonts/Satoshi-Regular.otf"


export default function Nav({ work, about, contact }) {
      return (
            <div className='nav'>
                  <a href="/">
                        <img src={sammy} className="sam" />


                  </a>
                  <div className="main">
                        <div className="tags">
                              <a className='navTags' href="/work">
                                    <p className='tag' style={{ background: work ? '#595858' : 'auto', paddingTop: work ? "4.5px" : "auto", borderRadius: work ? "100px" : "auto", paddingBottom: work ? "4.5px" : "auto", paddingLeft: work ? "26px" : "auto", paddingRight: work ? "26px" : "auto" }}>Work</p>


                              </a>
                              <a className='navTags' href="/about">
                                    <p style={{ background: about ? '#595858' : 'auto', paddingTop: about ? "4.5px" : "auto", borderRadius: about ? "100px" : "auto", paddingBottom: about ? "4.5px" : "auto", paddingLeft: about ? "26px" : "auto", paddingRight: about ? "26px" : "auto" }} className='tag'>About</p>


                              </a>
                              <a className='navTags' href="/contact">
                                    <p className='tag'>Contact</p>


                              </a>

                        </div>

                  </div>

            </div>
      )
}
