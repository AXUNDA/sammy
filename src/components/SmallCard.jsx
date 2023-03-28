import React from 'react'
import pudio from "../assets/pudio.png"

export default function SmallCard() {
      return (
            <div className='smallCard'>
                  <div className="cardContent">
                        <div className="header">
                              <h1 className="title">
                                    Pudio

                              </h1>
                              <div className="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                                    </svg>
                                    <hr className='rule' />
                              </div>
                        </div>
                        <p className="smallDesc">
                              Pudio is a mobile app focused on bridging the gap between audio contents and video contents for knowledge seekers to acquire more knowledge anywhere and anytime.

                        </p>
                        <div className="niches">
                              <h1 className="niche">
                                    Mobile app
                              </h1>
                              <h1 className="niche">
                                    Edu-tech
                              </h1> <h1 className="niche">
                                    Product
                              </h1>
                        </div>
                        <img src={pudio} alt="" className='smallCardImg' />

                  </div>

            </div>
      )
}

