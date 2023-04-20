import React from 'react'
import sammy from "../assets/sammy.jpg"
import "./styles.css"
import "../fonts/Satoshi-Regular.otf"


export default function Nav({ work, about, contact, home }) {
      return (
            <div className='nav'>

                  <div className="main">
                        <div className="tags">
                              <a className='navTags' href="/">
                                    <p className='tag' style={{ background: home ? '#595858' : 'auto', paddingTop: home ? "4.5px" : "auto", borderRadius: home ? "100px" : "auto", paddingBottom: home ? "4.5px" : "auto", paddingLeft: home ? "26px" : "auto", paddingRight: home ? "26px" : "auto" }}>Home</p>




                              </a>
                              <a className='navTags' href="/work">
                                    <p className='tag' style={{ background: work ? '#595858' : 'auto', paddingTop: work ? "4.5px" : "auto", borderRadius: work ? "100px" : "auto", paddingBottom: work ? "4.5px" : "auto", paddingLeft: work ? "26px" : "auto", paddingRight: work ? "26px" : "auto" }}>Work</p>


                              </a>
                              <a className='navTags' href="/about">
                                    <p style={{ background: about ? '#595858' : 'auto', paddingTop: about ? "4.5px" : "auto", borderRadius: about ? "100px" : "auto", paddingBottom: about ? "4.5px" : "auto", paddingLeft: about ? "26px" : "auto", paddingRight: about ? "26px" : "auto" }} className='tag'>About</p>


                              </a>
                              <a className='navTags' href="/contact">
                                    <p style={{ background: contact ? '#595858' : 'auto', paddingTop: contact ? "4.5px" : "auto", borderRadius: contact ? "100px" : "auto", paddingBottom: contact ? "4.5px" : "auto", paddingLeft: contact ? "26px" : "auto", paddingRight: contact ? "26px" : "auto" }} className='tag'>Contact</p>


                              </a>

                        </div>

                  </div>

            </div>
      )
}
